const express = require('express');
const { body, validationResult } = require('express-validator');
const nodemailer = require('nodemailer');
const { db } = require('../database/init');

const router = express.Router();

// Create email transporter only when credentials exist
const hasEmailConfig = process.env.EMAIL_USER && process.env.EMAIL_PASS;
const transporter = hasEmailConfig
  ? nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS
      }
    })
  : null;

// Validation middleware
const validateContact = [
  body('name')
    .trim()
    .notEmpty()
    .withMessage('Name is required')
    .isLength({ min: 2, max: 100 })
    .withMessage('Name must be between 2 and 100 characters'),
  body('email')
    .trim()
    .notEmpty()
    .withMessage('Email is required')
    .isEmail()
    .withMessage('Invalid email address')
    .normalizeEmail(),
  body('message')
    .trim()
    .notEmpty()
    .withMessage('Message is required')
    .isLength({ min: 3, max: 1000 })
    .withMessage('Message must be between 3 and 1000 characters')
];

// POST /api/contact - Submit contact form
router.post('/', validateContact, async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  const { name, email, message } = req.body;

  try {
    // Save to database first (always)
    const stmt = db.prepare(`
      INSERT INTO contacts (name, email, message)
      VALUES (?, ?, ?)
    `);
    const result = stmt.run(name, email, message);

    // Send email notification only if configured (optional)
    if (transporter) {
      try {
        const mailOptions = {
          from: process.env.EMAIL_USER,
          to: 'bavanikannan2412@gmail.com',
          subject: `Portfolio Contact: New message from ${name}`,
          html: `
            <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
              <h2 style="color: #6c63ff;">New Contact Form Submission</h2>
              <div style="background: #f5f5f5; padding: 20px; border-radius: 8px;">
                <p><strong>Name:</strong> ${name}</p>
                <p><strong>Email:</strong> ${email}</p>
                <p><strong>Message:</strong></p>
                <p style="background: white; padding: 15px; border-radius: 5px;">${message}</p>
              </div>
              <p style="color: #888; font-size: 12px; margin-top: 20px;">
                This email was sent from your portfolio contact form.
              </p>
            </div>
          `
        };
        await transporter.sendMail(mailOptions);
      } catch (emailError) {
        console.error('Email send failed (message was saved):', emailError.message);
      }
    }

    res.status(201).json({
      success: true,
      message: 'Thank you for your message! I will get back to you soon.',
      id: result.lastInsertRowid
    });
  } catch (error) {
    console.error('Error:', error);
    res.status(500).json({ error: 'Failed to send message. Please try again.' });
  }
});

module.exports = router;

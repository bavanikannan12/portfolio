const express = require('express');
const { db } = require('../database/init');

const router = express.Router();

// GET /api/profile - Get profile information
router.get('/', (req, res) => {
  try {
    const profile = db.prepare('SELECT * FROM profile WHERE id = 1').get();
    const skills = db.prepare('SELECT * FROM skills ORDER BY category, name').all();
    const projects = db.prepare('SELECT * FROM projects ORDER BY created_at DESC').all();
    const experience = db.prepare('SELECT * FROM experience ORDER BY created_at DESC').all();

    // Group skills by category
    const groupedSkills = skills.reduce((acc, skill) => {
      if (!acc[skill.category]) {
        acc[skill.category] = [];
      }
      acc[skill.category].push({
        name: skill.name,
        proficiency: skill.proficiency
      });
      return acc;
    }, {});

    // Parse experience responsibilities
    const parsedExperience = experience.map(exp => ({
      ...exp,
      responsibilities: JSON.parse(exp.responsibilities || '[]')
    }));

    // Parse project tech stacks
    const parsedProjects = projects.map(proj => ({
      ...proj,
      tech_stack: proj.tech_stack ? proj.tech_stack.split(',') : []
    }));

    res.json({
      profile,
      skills: groupedSkills,
      projects: parsedProjects,
      experience: parsedExperience
    });
  } catch (error) {
    console.error('Error fetching profile:', error);
    res.status(500).json({ error: 'Failed to fetch profile data' });
  }
});

// PUT /api/profile - Update profile information
router.put('/', (req, res) => {
  const { name, title, email, phone, linkedin, summary } = req.body;

  try {
    db.prepare(`
      UPDATE profile
      SET name = ?, title = ?, email = ?, phone = ?, linkedin = ?, summary = ?, updated_at = CURRENT_TIMESTAMP
      WHERE id = 1
    `).run(name, title, email, phone, linkedin, summary);

    res.json({ success: true, message: 'Profile updated successfully' });
  } catch (error) {
    console.error('Error updating profile:', error);
    res.status(500).json({ error: 'Failed to update profile' });
  }
});

module.exports = router;

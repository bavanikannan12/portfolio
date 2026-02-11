import { useState } from 'react'
import { motion } from 'framer-motion'
import { FaEnvelope, FaPhone, FaLinkedinIn } from 'react-icons/fa'
import axios from 'axios'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })
  const [status, setStatus] = useState({ type: '', message: '' })
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    setStatus({ type: '', message: '' })

    try {
      const response = await axios.post('/api/contact', formData)
      setStatus({ type: 'success', message: 'Message sent successfully!' })
      setFormData({ name: '', email: '', message: '' })
    } catch (error) {
      const is404 = error.response?.status === 404
      const data = error.response?.data
      let message
      if (is404) {
        message = 'Backend not reachable. Start the server: run "npm run dev" from the project root.'
      } else if (data?.errors?.length) {
        message = data.errors.map((e) => e.msg).join('. ')
      } else {
        message = data?.error || 'Failed to send message. Please try again.'
      }
      setStatus({ type: 'error', message })
    } finally {
      setIsSubmitting(false)
    }
  }

  const contactInfo = [
    {
      icon: <FaEnvelope />,
      title: 'Email',
      value: 'bavanikannan2412@gmail.com',
      href: 'mailto:bavanikannan2412@gmail.com'
    },
    {
      icon: <FaPhone />,
      title: 'Phone',
      value: '6380040658',
      href: 'tel:6380040658'
    },
    {
      icon: <FaLinkedinIn />,
      title: 'LinkedIn',
      value: 'Connect with me',
      href: 'https://www.linkedin.com/in/bavani-kannan-b15938287/'
    }
  ]

  return (
    <section id="contact" className="contact">
      <div className="container">
        <motion.h2
          className="section-title"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Get In Touch
        </motion.h2>

        <motion.p
          className="contact-intro"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
          I'm currently looking for new opportunities. Whether you have a question or just want to say hi, I'll try my best to get back to you!
        </motion.p>

        <div className="contact-grid">
          <motion.div
            className="contact-info"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            {contactInfo.map((item) => (
              <div key={item.title} className="contact-item">
                <div className="contact-icon">{item.icon}</div>
                <div className="contact-details">
                  <h4>{item.title}</h4>
                  <a href={item.href} target={item.title === 'LinkedIn' ? '_blank' : undefined} rel="noopener noreferrer">
                    {item.value}
                  </a>
                </div>
              </div>
            ))}
          </motion.div>

          <motion.form
            className="contact-form"
            onSubmit={handleSubmit}
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
          >
            <div className="form-group">
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <textarea
                name="message"
                placeholder="Your Message"
                rows="5"
                value={formData.message}
                onChange={handleChange}
                required
              />
            </div>
            {status.message && (
              <div className={`status-message ${status.type}`}>
                {status.message}
              </div>
            )}
            <button type="submit" className="btn btn-primary" disabled={isSubmitting}>
              {isSubmitting ? 'Sending...' : 'Send Message'}
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  )
}

export default Contact

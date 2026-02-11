import { useState } from 'react'
import { motion } from 'framer-motion'
import { FaUser } from 'react-icons/fa'
import profileImg from '../assets/bavani.jpeg'

const About = () => {
  const [imageError, setImageError] = useState(false)
  const stats = [
    { number: '7+', label: 'Months Experience' },
    { number: '5+', label: 'Projects Completed' },
    { number: '8.5', label: 'GPA Score' }
  ]

  return (
    <section id="about" className="about">
      <div className="container">
        <motion.h2
          className="section-title"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          About Me
        </motion.h2>

        <div className="about-content">
          <motion.div
            className="about-text"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <p className="lead">
              Mobile App Full Stack Intern with a passion for creating beautiful, functional mobile and web applications.
            </p>
            <p>
              I specialize in building mobile apps with React Native and Flutter, web applications with React.js, and robust backends using Node.js and Django with SQL databases.
            </p>
            <p>
              I also bring design skills with Figma, Canva, and Webflow to create user-focused solutions that make a real impact.
            </p>

            <div className="about-stats">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  className="stat"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 + index * 0.1 }}
                >
                  <span className="stat-number">{stat.number}</span>
                  <span className="stat-label">{stat.label}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            className="about-image"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
          >
            <div className="image-frame">
              {!imageError ? (
                <img
                  className="profile-image"
                  src={profileImg}
                  alt="Bavani Kannan"
                  onError={() => setImageError(true)}
                />
              ) : (
                <div className="placeholder-avatar" aria-label="Profile placeholder">
                  <FaUser />
                </div>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default About

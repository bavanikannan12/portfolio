import { motion } from 'framer-motion'
import { FaUniversity } from 'react-icons/fa'

const Education = () => {
  return (
    <section id="education" className="education">
      <div className="container">
        <motion.h2
          className="section-title"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Education
        </motion.h2>

        <motion.div
          className="education-card"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
          <div className="education-icon">
            <FaUniversity />
          </div>
          <div className="education-content">
            <h3>B.E - Computer Science Engineering</h3>
            <p className="institution">SSM Institute of Engineering and Technology</p>
            <p className="gpa">GPA: <span>8.5</span></p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Education

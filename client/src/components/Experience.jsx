import { motion } from 'framer-motion'

const Experience = () => {
  const experiences = [
    {
      title: 'Mobile App Developer Intern',
      company: 'Techjays',
      duration: '8 Months',
      responsibilities: [
        'Developed mobile applications using Flutter and React Native',
        'Implemented Firebase Authentication and Firestore',
        'Applied Riverpod for state management',
        'Fixed UI issues related to fonts, alignment, and responsiveness',
        'Collaborated with designers and followed Agile practices'
      ]
    }
  ]

  return (
    <section id="experience" className="experience">
      <div className="container">
        <motion.h2
          className="section-title"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Work Experience
        </motion.h2>

        <div className="timeline">
          {experiences.map((exp, index) => (
            <motion.div
              key={exp.title}
              className="timeline-item"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
            >
              <div className="timeline-dot"></div>
              <div className="timeline-content">
                <div className="timeline-header">
                  <h3>{exp.title}</h3>
                  <span className="company">{exp.company}</span>
                </div>
                <span className="duration">{exp.duration}</span>
                <ul className="responsibilities">
                  {exp.responsibilities.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Experience

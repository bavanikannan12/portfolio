import { motion } from 'framer-motion'

const Experience = () => {
  const experiences = [
    {
      title: 'Software Developer Intern',
      company: 'KGS Techway Services',
      duration: 'March 2026 - June 2026',
      responsibilities: [
        'Assisted in frontend and backend development of web applications.',
        'Wrote clean, maintainable, and efficient code in React.js and Node.js.',
        'Participated in code reviews and collaborated with team members.',
        'Designed and optimized database schemas and queries.'
      ]
    },
    {
      title: 'Mobile App Developer Intern',
      company: 'Techjays',
      duration: 'July 2025 - February 2026',
      responsibilities: [
        'Developed cross-platform mobile apps for Android and iOS using React Native and Flutter.',
        'Implemented state management and local storage solutions.',
        'Collaborated on version control using Git and agile workflows.',
        'Conducted testing and debugging to ensure smooth app performance.'
      ]
    },
    {
      title: 'React Native Developer Intern',
      company: 'Mentor Bridge',
      duration: 'July 2024 - May 2025',
      responsibilities: [
        'Built and maintained mobile applications using React Native.',
        'Collaborated with UI/UX designers to implement pixel-perfect user interfaces.',
        'Integrated RESTful APIs and managed application state.',
        'Optimized application performance and resolved cross-platform bugs.'
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

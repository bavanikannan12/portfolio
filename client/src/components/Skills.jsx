import { motion } from 'framer-motion'
import { FaCode, FaMobileAlt, FaLayerGroup, FaDatabase, FaTools, FaRobot, FaCloud } from 'react-icons/fa'

const Skills = () => {
  const skillCategories = [
    {
      icon: <FaMobileAlt />,
      title: 'Mobile App',
      skills: ['React Native', 'Flutter']
    },
    {
      icon: <FaCode />,
      title: 'Frontend',
      skills: ['React.js', 'JavaScript', 'HTML', 'CSS']
    },
    {
      icon: <FaLayerGroup />,
      title: 'Backend',
      skills: ['Node.js', 'Django', 'Python']
    },
    {
      icon: <FaDatabase />,
      title: 'Database',
      skills: ['SQL', 'Firebase Firestore', 'AWS']
    },
    {
      icon: <FaRobot />,
      title: 'AI Tools',
      skills: ['Claude', 'Cursor', 'OpenAI']
    },
    {
      icon: <FaTools />,
      title: 'Design Tools',
      skills: ['Figma', 'Canva', 'Webflow']
    }
  ]

  return (
    <section id="skills" className="skills">
      <div className="container">
        <motion.h2
          className="section-title"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          My Skills
        </motion.h2>

        <div className="skills-grid">
          {skillCategories.map((category, index) => (
            <motion.div
              key={category.title}
              className="skill-category"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <div className="category-icon">{category.icon}</div>
              <h3>{category.title}</h3>
              <div className="skill-tags">
                {category.skills.map((skill) => (
                  <span key={skill} className="skill-tag">{skill}</span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills

import { motion } from 'framer-motion'
import { FaBriefcase, FaGraduationCap, FaExternalLinkAlt, FaUsers, FaComments, FaCalendarCheck } from 'react-icons/fa'

const Projects = () => {
  const projects = [
    {
      icon: <FaComments />,
      title: 'JaySim',
      subtitle: 'Client Simulation Platform',
      description: 'AI-powered platform for practicing client communication with Google Gemini. Features 7 scenarios, timed sessions, and structured feedback.',
      techStack: ['React.js', 'Node.js', 'MySQL'],
      link: 'https://jaysim-ai.vercel.app/'
    },
    {
      icon: <FaUsers />,
      title: 'UniStand',
      subtitle: 'Unified Agile Collaboration Platform',
      description: 'AI-powered web platform integrating Task Management, Communication, Documentation, and Automated Standups into one unified tool.',
      techStack: ['React.js', 'Node.js', 'SQL'],
      link: 'https://unistand.vercel.app'
    },
    {
      icon: <FaCalendarCheck />,
      title: 'Interview Slot Booking',
      subtitle: 'Real-time Scheduling System',
      description: 'Real-time slot booking system with automatic availability updates. Built for HR and training institutes.',
      techStack: ['Webflow'],
      link: 'https://creative-bold-studio-0ec6e1.design.webflow.com/'
    },
    {
      icon: <FaBriefcase />,
      title: 'E-Commerce App',
      subtitle: 'Online Shopping Platform',
      description: 'Full-featured e-commerce mobile app with product catalog, cart, checkout, and payment integration.',
      techStack: ['Flutter', 'Dart', 'Firebase'],
      link: 'https://github.com/bavanikannan12/ecomerce.git'
    },
    {
      icon: <FaGraduationCap />,
      title: 'StuPro',
      subtitle: 'Peer-Based Learning Platform',
      description: 'Peer-based learning platform for students with article sharing and discussion features.',
      techStack: ['React Native', 'TypeScript'],
      link: 'https://github.com/mentorbridgeorg/stupro-india.git'
    }
  ]

  return (
    <section id="projects" className="projects">
      <div className="container">
        <motion.h2
          className="section-title"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Featured Projects
        </motion.h2>

        <div className="projects-grid">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              className="project-card"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              whileHover={{ y: -10 }}
            >
              <div className="project-image">
                <div className="project-placeholder">
                  {project.icon}
                </div>
                <div className="project-overlay">
                  <a href={project.link} target="_blank" rel="noopener noreferrer" className="project-link">
                    <FaExternalLinkAlt />
                  </a>
                </div>
              </div>
              <div className="project-content">
                <h3>{project.title}</h3>
                <p className="project-subtitle">{project.subtitle}</p>
                <p>{project.description}</p>
                <div className="tech-stack">
                  {project.techStack.map((tech) => (
                    <span key={tech}>{tech}</span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects

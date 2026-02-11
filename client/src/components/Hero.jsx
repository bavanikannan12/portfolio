import { motion } from 'framer-motion'
import { FaLinkedinIn, FaEnvelope, FaPhone, FaChevronDown } from 'react-icons/fa'

const Hero = () => {
  return (
    <section id="home" className="hero">
      <div className="hero-container">
        <motion.div
          className="hero-content"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <p className="greeting">Hello, I'm</p>
          <h1 className="name">Bavani Kannan</h1>
          <h2 className="title">Mobile App Full Stack Developer </h2>
          <p className="tagline">
            Building mobile & web apps with{' '}
            <span className="highlight">React Native</span>,{' '}
            <span className="highlight">Flutter</span> &{' '}
            <span className="highlight">React.js</span>
          </p>

          <div className="hero-buttons">
            <a href="#projects" className="btn btn-primary">View My Work</a>
            <a href="#contact" className="btn btn-secondary">Get In Touch</a>
          </div>

          <div className="social-links">
            <a href="https://www.linkedin.com/in/bavani-kannan-b15938287/" target="_blank" rel="noopener noreferrer">
              <FaLinkedinIn />
            </a>
            <a href="mailto:bavanikannan2412@gmail.com">
              <FaEnvelope />
            </a>
            <a href="tel:6380040658">
              <FaPhone />
            </a>
          </div>
        </motion.div>

        <motion.div
          className="hero-visual"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div className="code-block">
            <div className="code-header">
              <span className="dot red"></span>
              <span className="dot yellow"></span>
              <span className="dot green"></span>
            </div>
            <pre>
              <code>
{`class Developer {
  name: "Bavani Kannan";
  role: "Mobile App Full Stack Developer";
  skills: [
    "React Native",
    "Flutter",
    "React.js",
    "Django"
    "Node.js"
  ];

  buildApp() {
    return "Amazing UX";
  }
}`}
              </code>
            </pre>
          </div>
        </motion.div>
      </div>

      <motion.div
        className="scroll-indicator"
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 1.5 }}
      >
        <span>Scroll Down</span>
        <FaChevronDown />
      </motion.div>
    </section>
  )
}

export default Hero

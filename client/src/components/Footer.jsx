import { FaLinkedinIn, FaEnvelope } from 'react-icons/fa'

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <p>&copy; {new Date().getFullYear()} Bavani Kannan. All rights reserved.</p>
          <div className="footer-links">
            <a href="https://www.linkedin.com/in/bavani-kannan-b15938287/" target="_blank" rel="noopener noreferrer">
              <FaLinkedinIn />
            </a>
            <a href="mailto:bavanikannan2412@gmail.com">
              <FaEnvelope />
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer

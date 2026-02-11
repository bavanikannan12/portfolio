import { motion } from 'framer-motion'
import { FaExternalLinkAlt, FaMobileAlt, FaLink, FaBell, FaCode, FaCreditCard, FaEnvelope } from 'react-icons/fa'

const Blog = () => {
  const blogs = [
    {
      icon: <FaMobileAlt />,
      title: 'MediaQuery in Flutter',
      subtitle: 'Build Responsive Apps Like a Pro',
      description: 'Learn how to build adaptive layouts for any screen size using MediaQuery, with real-world examples and tips.',
      tags: ['Flutter', 'Responsive Design', 'UI/UX'],
      link: 'https://lnkd.in/eZwevnD2'
    },
    {
      icon: <FaLink />,
      title: 'Deep Linking in Flutter',
      subtitle: 'A Complete Guide',
      description: 'How to implement deep links in Flutter using go_router, custom schemes, and universal links.',
      tags: ['Flutter', 'Deep Linking', 'GoRouter'],
      link: 'https://lnkd.in/efkQ-vvQ'
    },
    {
      icon: <FaBell />,
      title: 'Firebase Cloud Messaging',
      subtitle: 'Push Notifications in Flutter',
      description: 'Step-by-step guide to implementing push notifications using Firebase Cloud Messaging with clean architecture.',
      tags: ['Flutter', 'Firebase', 'FCM'],
      link: 'https://lnkd.in/gqcgvmBD'
    },
    {
      icon: <FaCode />,
      title: 'Micro Frontends in React',
      subtitle: 'Scalable Frontend Architecture',
      description: 'A systematic and expandable approach to building large-scale, sustainable React applications.',
      tags: ['React', 'Micro Frontend', 'Architecture'],
      link: 'https://lnkd.in/gCfcNsUp'
    },
    {
      icon: <FaCreditCard />,
      title: 'Behind the Pay Button',
      subtitle: 'How Payment Gateways Work',
      description: 'What happens after you click "Pay" - understanding payment gateways and Razorpay integration in Flutter.',
      tags: ['Flutter', 'Razorpay', 'Payments'],
      link: 'https://lnkd.in/gUNvczXe'
    },
    {
      icon: <FaEnvelope />,
      title: 'The Art of Email Writing',
      subtitle: 'A Must-Know Professional Skill',
      description: 'Crafting effective emails - from subject lines to structure - tips for professional communication.',
      tags: ['Professional Skills', 'Communication'],
      link: 'https://lnkd.in/eVtC5NWX'
    }
  ]

  return (
    <section id="blog" className="blog">
      <div className="container">
        <motion.h2
          className="section-title"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          My Blogs
        </motion.h2>

        <div className="blog-grid">
          {blogs.map((blog, index) => (
            <motion.a
              key={blog.title}
              href={blog.link}
              target="_blank"
              rel="noopener noreferrer"
              className="blog-card"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -10 }}
            >
              <div className="blog-icon">{blog.icon}</div>
              <div className="blog-content">
                <h3>{blog.title}</h3>
                <p className="blog-subtitle">{blog.subtitle}</p>
                <p className="blog-description">{blog.description}</p>
                <div className="blog-tags">
                  {blog.tags.map((tag) => (
                    <span key={tag}>{tag}</span>
                  ))}
                </div>
                <span className="read-more">
                  Read on Medium <FaExternalLinkAlt />
                </span>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Blog

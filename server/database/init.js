const Database = require('better-sqlite3');
const path = require('path');

const dbPath = path.join(__dirname, 'portfolio.db');
const db = new Database(dbPath);

function initDatabase() {
  // Create contacts table to store contact form submissions
  db.exec(`
    CREATE TABLE IF NOT EXISTS contacts (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      name TEXT NOT NULL,
      email TEXT NOT NULL,
      message TEXT NOT NULL,
      read INTEGER DEFAULT 0,
      created_at DATETIME DEFAULT CURRENT_TIMESTAMP
    )
  `);

  // Create profile table to store portfolio owner info (can be updated via admin)
  db.exec(`
    CREATE TABLE IF NOT EXISTS profile (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      name TEXT NOT NULL,
      title TEXT NOT NULL,
      email TEXT NOT NULL,
      phone TEXT,
      linkedin TEXT,
      summary TEXT,
      updated_at DATETIME DEFAULT CURRENT_TIMESTAMP
    )
  `);

  // Create skills table
  db.exec(`
    CREATE TABLE IF NOT EXISTS skills (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      category TEXT NOT NULL,
      name TEXT NOT NULL,
      proficiency INTEGER DEFAULT 80
    )
  `);

  // Create projects table
  db.exec(`
    CREATE TABLE IF NOT EXISTS projects (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      title TEXT NOT NULL,
      subtitle TEXT,
      description TEXT,
      tech_stack TEXT,
      image_url TEXT,
      project_url TEXT,
      created_at DATETIME DEFAULT CURRENT_TIMESTAMP
    )
  `);

  // Create experience table
  db.exec(`
    CREATE TABLE IF NOT EXISTS experience (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      title TEXT NOT NULL,
      company TEXT NOT NULL,
      duration TEXT,
      responsibilities TEXT,
      created_at DATETIME DEFAULT CURRENT_TIMESTAMP
    )
  `);

  // Insert default profile if not exists
  const profile = db.prepare('SELECT * FROM profile WHERE id = 1').get();
  if (!profile) {
    db.prepare(`
      INSERT INTO profile (name, title, email, phone, linkedin, summary)
      VALUES (?, ?, ?, ?, ?, ?)
    `).run(
      'Bavani Kannan',
      'Mobile App Full Stack Intern',
      'bavanikannan2412@gmail.com',
      '6380040658',
      'https://www.linkedin.com/in/bavani-kannan-b15938287/',
      'Full Stack Developer with experience in mobile and web development using React Native, Flutter, React.js, Node.js, Django, and SQL databases.'
    );
  }

  // Insert default skills if table is empty
  const skillCount = db.prepare('SELECT COUNT(*) as count FROM skills').get();
  if (skillCount.count === 0) {
    const insertSkill = db.prepare('INSERT INTO skills (category, name, proficiency) VALUES (?, ?, ?)');

    const skills = [
      ['Mobile App', 'React Native', 90],
      ['Mobile App', 'Flutter', 85],
      ['Frontend', 'React.js', 85],
      ['Frontend', 'JavaScript', 85],
      ['Frontend', 'HTML', 90],
      ['Frontend', 'CSS', 85],
      ['Backend', 'Node.js', 80],
      ['Backend', 'Django', 75],
      ['Backend', 'Python', 80],
      ['Database', 'SQL', 85],
      ['Database', 'Firebase Firestore', 80],
      ['Database', 'AWS', 75],
      ['AI Tools', 'Claude', 85],
      ['AI Tools', 'Cursor', 90],
      ['AI Tools', 'OpenAI', 80],
      ['Design Tools', 'Figma', 80],
      ['Design Tools', 'Canva', 85],
      ['Design Tools', 'Webflow', 75]
    ];

    skills.forEach(skill => insertSkill.run(...skill));
  }

  // Insert default projects if table is empty
  const projectCount = db.prepare('SELECT COUNT(*) as count FROM projects').get();
  if (projectCount.count === 0) {
    const insertProject = db.prepare(`
      INSERT INTO projects (title, subtitle, description, tech_stack)
      VALUES (?, ?, ?, ?)
    `);

    insertProject.run(
      'E-Commerce App',
      'Online Shopping Platform',
      'Full-featured e-commerce mobile app with product catalog, cart, checkout, and payment integration.',
      'Flutter,Dart,Firebase'
    );

    insertProject.run(
      'StuPro',
      'Peer-Based Learning Platform',
      'Peer-based learning platform for students with article sharing and discussion features.',
      'React Native,TypeScript'
    );

    insertProject.run(
      'UniStand',
      'Unified Agile Collaboration Platform',
      'AI-powered web platform integrating Task Management, Communication, Documentation, and Automated Standups into one unified tool.',
      'React.js,Node.js,SQL'
    );

    insertProject.run(
      'JaySim',
      'Client Simulation Platform',
      'AI-powered platform for practicing client communication with Google Gemini. Features 7 scenarios, timed sessions, and structured feedback.',
      'React.js,Node.js,MySQL'
    );

    insertProject.run(
      'Interview Slot Booking',
      'Real-time Scheduling System',
      'Real-time slot booking system with automatic availability updates. Built for HR and training institutes.',
      'Webflow'
    );
  }

  // Insert default experience if table is empty
  const expCount = db.prepare('SELECT COUNT(*) as count FROM experience').get();
  if (expCount.count === 0) {
    db.prepare(`
      INSERT INTO experience (title, company, duration, responsibilities)
      VALUES (?, ?, ?, ?)
    `).run(
      'Frontend Developer Intern',
      'Techjays',
      'Present | 7 Months',
      JSON.stringify([
        'Developed mobile applications using Flutter and React Native',
        'Implemented Firebase Authentication and Firestore',
        'Applied Riverpod for state management',
        'Fixed UI issues related to fonts, alignment, and responsiveness',
        'Collaborated with designers and followed Agile practices'
      ])
    );
  }

  console.log('Database initialized successfully');
}

module.exports = { db, initDatabase };

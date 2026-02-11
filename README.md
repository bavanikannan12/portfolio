# Bavani Kannan - Portfolio Website

A full-stack portfolio website built with React, Node.js, Express, and SQLite.

## Running the app

**From the project root** (so both frontend and API run):

```bash
npm run dev
```

This starts the API on http://localhost:5000 and the site on http://localhost:3000.  
If you only run the client (`cd client && npm run dev`), the contact form will fail because the API won’t be running.

First-time setup: `npm run install-all` then `npm run dev`.

## Tech Stack

**Frontend:**
- React 18
- Vite
- Framer Motion (animations)
- React Icons
- Axios

**Backend:**
- Node.js
- Express.js
- better-sqlite3 (SQLite database)
- express-validator

## Project Structure

```
portfolio/
├── client/                 # React frontend
│   ├── src/
│   │   ├── components/     # React components
│   │   ├── styles/         # CSS styles
│   │   ├── App.jsx
│   │   └── main.jsx
│   ├── index.html
│   ├── package.json
│   └── vite.config.js
├── server/                 # Node.js backend
│   ├── database/
│   │   └── init.js         # Database initialization
│   ├── routes/
│   │   ├── contact.js      # Contact form API
│   │   ├── messages.js     # Messages management API
│   │   └── profile.js      # Profile data API
│   ├── index.js
│   ├── package.json
│   └── .env
├── package.json            # Root package.json
└── README.md
```

## Getting Started

### Prerequisites

- Node.js (v18 or higher)
- npm

### Installation

1. Install all dependencies:
   ```bash
   npm run install-all
   ```

   Or install separately:
   ```bash
   # Root dependencies
   npm install

   # Client dependencies
   cd client && npm install

   # Server dependencies
   cd ../server && npm install
   ```

### Running the Application

**Development mode (runs both client and server):**
```bash
npm run dev
```

**Run client only:**
```bash
npm run client
```

**Run server only:**
```bash
npm run server
```

### Access the Application

- Frontend: http://localhost:3000
- Backend API: http://localhost:5000

## API Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| POST | `/api/contact` | Submit contact form |
| GET | `/api/messages` | Get all messages |
| GET | `/api/messages/:id` | Get single message |
| DELETE | `/api/messages/:id` | Delete a message |
| GET | `/api/profile` | Get portfolio data |
| PUT | `/api/profile` | Update profile |
| GET | `/api/health` | Health check |

## Database

The application uses SQLite with the following tables:
- `contacts` - Stores contact form submissions
- `profile` - Portfolio owner information
- `skills` - Skills with categories
- `projects` - Portfolio projects
- `experience` - Work experience

## Building for Production

```bash
npm run build
```

This will create a production build in `client/dist/`.

## Author

**Bavani Kannan**
- Email: bavanikannan2412@gmail.com
- LinkedIn: [Bavani Kannan](https://www.linkedin.com/in/bavani-kannan-b15938287/)

const express = require('express');
const { db } = require('../database/init');

const router = express.Router();

// GET /api/messages - Get all contact messages (for admin)
router.get('/', (req, res) => {
  try {
    const messages = db.prepare(`
      SELECT * FROM contacts
      ORDER BY created_at DESC
    `).all();

    res.json(messages);
  } catch (error) {
    console.error('Error fetching messages:', error);
    res.status(500).json({ error: 'Failed to fetch messages' });
  }
});

// GET /api/messages/:id - Get single message
router.get('/:id', (req, res) => {
  const { id } = req.params;

  try {
    const message = db.prepare('SELECT * FROM contacts WHERE id = ?').get(id);

    if (!message) {
      return res.status(404).json({ error: 'Message not found' });
    }

    // Mark as read
    db.prepare('UPDATE contacts SET read = 1 WHERE id = ?').run(id);

    res.json(message);
  } catch (error) {
    console.error('Error fetching message:', error);
    res.status(500).json({ error: 'Failed to fetch message' });
  }
});

// DELETE /api/messages/:id - Delete a message
router.delete('/:id', (req, res) => {
  const { id } = req.params;

  try {
    const result = db.prepare('DELETE FROM contacts WHERE id = ?').run(id);

    if (result.changes === 0) {
      return res.status(404).json({ error: 'Message not found' });
    }

    res.json({ success: true, message: 'Message deleted successfully' });
  } catch (error) {
    console.error('Error deleting message:', error);
    res.status(500).json({ error: 'Failed to delete message' });
  }
});

// GET /api/messages/stats - Get message statistics
router.get('/stats/summary', (req, res) => {
  try {
    const total = db.prepare('SELECT COUNT(*) as count FROM contacts').get();
    const unread = db.prepare('SELECT COUNT(*) as count FROM contacts WHERE read = 0').get();

    res.json({
      total: total.count,
      unread: unread.count,
      read: total.count - unread.count
    });
  } catch (error) {
    console.error('Error fetching stats:', error);
    res.status(500).json({ error: 'Failed to fetch statistics' });
  }
});

module.exports = router;

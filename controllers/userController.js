const db = require('../models/db');

// Insert user
exports.insertUser = async (req, res) => {
  const { name, email, phone } = req.body;
  try {
    await db.execute('INSERT INTO Users (name, email, phone) VALUES (?, ?, ?)', [name, email, phone]);
    res.json({ message: 'User added successfully' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Get all users
exports.getUsers = async (req, res) => {
  try {
    const [rows] = await db.execute('SELECT * FROM Users');
    res.json(rows);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Delete user
exports.deleteUser = async (req, res) => {
  const userId = req.params.id;
  try {
    await db.execute('DELETE FROM Users WHERE id = ?', [userId]);
    res.json({ message: 'User deleted successfully' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

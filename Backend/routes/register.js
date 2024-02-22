const express = require('express');
const bcrypt = require('bcrypt');
const { queryDb } = require('../utils/querryDb');
const router = express.Router();

router.post('/', async (req, res) => {
  const { username, password, email } = req.body;

  const checkUserQuery = 'SELECT * FROM users WHERE username = ? OR email = ?';
  const existingUser = await queryDb(checkUserQuery, [username, email]);

  if (existingUser.length > 0) {
    return res.status(400).json({ message: 'Username or email already exists.' });
  }

  const hashedPassword = bcrypt.hashSync(password, 10);

  const insertUserQuery = 'INSERT INTO users (username, password, email) VALUES (?, ?, ?)';
  await queryDb(insertUserQuery, [username, hashedPassword, email]);

  res.json({ message: 'User registered successfully.' });
});

module.exports = router;

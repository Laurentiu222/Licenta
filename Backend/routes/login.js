const express = require('express');
const passport = require('passport');
const router = express.Router();

router.post('/', passport.authenticate('local'), (req, res) => {
  res.status(200).json({
    success: true,
    message: 'Login successful',
    user: req.user
  });
});

module.exports = router;

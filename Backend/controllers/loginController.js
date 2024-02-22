const passport = require('passport');

// Controller function for handling user login
function loginUser(req, res, next) {
  passport.authenticate('local', (err, user, info) => {
    if (err) {
      return res.status(500).json({ success: false, message: 'Internal server error' });
    }
    if (!user) {
      return res.status(401).json({ success: false, message: 'Incorrect username or password' });
    }

    req.logIn(user, (err) => {
      if (err) {
        return res.status(500).json({ success: false, message: 'Error during login' });
      }

      return res.status(200).json({
        success: true,
        message: 'Login successful',
        user: req.user
      });
    });
  })(req, res, next);
}

module.exports = { loginUser };

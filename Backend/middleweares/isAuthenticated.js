// Middleware to check if user is authenticated
function isAuthenticated(req, res, next) {
  // Passport adds user object to request if authenticated
  if (req.isAuthenticated()) {
    // User is authenticated, proceed to next middleware or route handler
    return next();
  } else {
    // User is not authenticated, return unauthorized status
    return res.status(401).json({ message: 'Unauthorized access' });
  }
}

module.exports = isAuthenticated;

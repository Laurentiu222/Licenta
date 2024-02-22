const express = require('express');
const cors = require('cors');
const passport = require('passport');
const session = require('express-session');
const isAuthenticated = require('./middleweares/isAuthenticated'); // Assuming middleware location
const { db } = require('./db'); // Assuming db.js exports the database connection
const routes = require('./routes'); // Assuming routes are defined in a separate file

const app = express();

// Middleware
app.use(cors());
app.use(express.json());
app.use(session({ secret: 'your-secret-key', resave: false, saveUninitialized: true }));
app.use(passport.initialize());
app.use(passport.session());
require('./passport-config');
// Routes
app.use('/api', routes); // Apply routes defined in separate file under /api

// Public route
app.get('/', (req, res) => {
  res.send('Welcome to the Tongue Twister backend server!');
});

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Something broke!');
});

// Start the server
const PORT = process.env.PORT || 8081;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

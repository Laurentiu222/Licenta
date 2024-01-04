const express = require('express');
const mysql = require('mysql');
const cors = require('cors');
const bcrypt = require('bcrypt');
const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const session = require('express-session');

const app = express();
app.use(cors());

const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'toungetwister'
});

app.use(express.json());
app.use(session({ secret: 'your-secret-key', resave: false, saveUninitialized: true }));
app.use(passport.initialize());
app.use(passport.session());

passport.use(new LocalStrategy(
  (username, password, done) => {
    db.query('SELECT * FROM users WHERE username = ?', [username], (err, results) => {
      if (err) {
        return done(err);
      }

      if (results.length === 0) {
        return done(null, false, { message: 'Incorrect username.' });
      }

      const user = results[0];

      if (!bcrypt.compareSync(password, user.password)) {
        return done(null, false, { message: 'Incorrect password.' });
      }

      return done(null, user);
    });
  }
));

passport.serializeUser((user, done) => {
  done(null, user.id);
});

passport.deserializeUser((id, done) => {
  db.query('SELECT * FROM users WHERE id = ?', [id], (err, results) => {
    if (err) {
      return done(err);
    }
    const user = results[0];
    done(null, user);
  });
});
app.get('/', (req, res) => {
  res.send('Welcome to the Tongue Twister backend server!');
});
app.post('/api/register', async (req, res) => {
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

app.post('/api/login', passport.authenticate('local'), (req, res) => {
  // Authentication successful, return user information
  res.json(req.user);
});

app.listen(8081, () => {
  console.log('Server is running on port 8081');
});

function queryDb(sql, values) {
  return new Promise((resolve, reject) => {
    db.query(sql, values, (err, results) => {
      if (err) {
        reject(err);
      } else {
        resolve(results);
      }
    });
  });
}

const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const bcrypt = require('bcrypt');
const { getUserByUsername } = require('./modules/user'); 

passport.use(new LocalStrategy(
  async (username, password, done) => {
    try {
      const user = await getUserByUsername(username);
      if (!user) {
        return done(null, false, { message: 'Incorrect username.' });
      }

      if (!bcrypt.compareSync(password, user.password)) {
        return done(null, false, { message: 'Incorrect password.' });
      }
      
      return done(null, user);
    } catch (error) {
      return done(error);
    }
  }
));

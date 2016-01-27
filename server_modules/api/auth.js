var passport = require('passport');
var TokenStrategy = require('passport-http-oauth').TokenStrategy;

passport.use('token', new TokenStrategy(
  function (consumerKey, done) {
      Consumer.findOne({ key: consumerKey }, function (err, consumer) {
          if (err) { return done(err); }
          if (!consumer) { return done(null, false); }
          return done(null, consumer, consumer.secret);
      });
  },
  function (accessToken, done) {
      AccessToken.findOne({ token: accessToken }, function (err, token) {
          if (err) { return done(err); }
          if (!token) { return done(null, false); }
          
          return done(null, user, token.secret, { scope: token.scope });
      });
  },
  function (timestamp, nonce, done) {
      // validate the timestamp and nonce as necessary
      done(null, true)
  }
));

passport.serializeUser(function (user, done) {
    done(null, user);
});

passport.deserializeUser(function (user, done) {
    done(null, user);
});

exports.isAuthenticate = function () {
    return passport.authenticate('token', { session: false });
}
/** @format */

const User = require("../models/User");
const GoogleStratergy = require("passport-google-oauth20").Strategy;
const { v4: uuidv4 } = require("uuid");

const googleAuth = (passport) => {
  passport.use(
    new GoogleStratergy(
      {
        clientID:
          "771166917642-nqa9t9tvrmvkm65dpgrdt6qddrgpcfbe.apps.googleusercontent.com",
        clientSecret: "Y8d-NyMAhG7ejNmbz9kTcqAr",
        callbackURL: "https://ezyable.herokuapp.com/google/auth/main",
      },
      async function (accessToken, refreshToken, profile, cb) {
        try {
          const userExists = await User.findOne({
            email: profile.emails[0].value,
          });

          if (userExists) return cb(null, userExists);

          if (!userExists) {
            const userId = uuidv4();
            const user = new User({
              username: profile.displayName,
              email: profile.emails[0].value,
              googleId: profile.id,
              userId: userId,
              profileUrl: profile.photos[0].value,
            });
            await user.save();
            return cb(null, user);
          }
        } catch (error) {
          console.log(error);
        }
      }
    )
  );
  passport.serializeUser(function (user, done) {
    done(null, user.id);
  });

  passport.deserializeUser(function (id, done) {
    User.findById(id, function (err, user) {
      done(err, user);
    });
  });
};
module.exports = googleAuth;

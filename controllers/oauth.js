const User = require('../models/user');

module.exports.googleController = (
  accessToken,
  refreshToken,
  profile,
  done
) => {
  // console.log(profile);
  User.findOne(
    {
      email: profile.emails[0].value,
    },
    function (err, user) {
      if (err) {
        return done(err);
      }
      //No user was found... so create a new user with values from Google (all the profile. stuff)
      if (!user) {
        user = new User({
          email: profile.emails[0].value,
          username: profile.emails[0].value.split('@')[0],
        });
        user.save(function (err) {
          if (err) console.log(err);
          return done(err, user);
        });
      } else {
        //found user. Return
        return done(err, user);
      }
    }
  );
};

module.exports.facebookController = (
  accessToken,
  refreshToken,
  profile,
  done
) => {
  // console.log(profile);
  User.findOne(
    {
      email: profile.emails[0].value,
    },
    function (err, user) {
      if (err) {
        return done(err);
      }
      //No user was found... so create a new user with values from Google (all the profile. stuff)
      if (!user) {
        user = new User({
          email: profile.emails[0].value,
          username: profile.emails[0].value.split('@')[0],
        });
        user.save(function (err) {
          if (err) console.log(err);
          return done(err, user);
        });
      } else {
        //found user. Return
        return done(err, user);
      }
    }
  );
};

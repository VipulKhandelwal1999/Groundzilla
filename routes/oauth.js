const express = require('express');
const router = express.Router();
const passport = require('passport');

router
  .route('/google')
  .get(passport.authenticate('google', { scope: ['profile', 'email'] }));

router
  .route('/google/callback')
  .get(
    passport.authenticate('google', { failureRedirect: '/login' }),
    (req, res) => {
      // Successful authentication, redirect home.
      req.flash('success', 'Welcome Back!');
      res.redirect('/campgrounds');
    }
  );

router
  .route('/facebook')
  .get(passport.authenticate('facebook', { scope: ['email'] }));

router
  .route('/facebook/callback')
  .get(
    passport.authenticate('facebook', { failureRedirect: '/login' }),
    (req, res) => {
      // Successful authentication, redirect home.
      req.flash('success', 'Welcome Back!');
      res.redirect('/campgrounds');
    }
  );

module.exports = router;

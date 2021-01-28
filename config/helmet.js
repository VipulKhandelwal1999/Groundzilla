const {
  scriptSrcUrls,
  styleSrcUrls,
  connectSrcUrls,
  fontSrcUrls,
} = require('../contentSecurityPolicy');

module.exports.helmetConfig = {
  directives: {
    defaultSrc: [],
    connectSrc: ["'self'", ...connectSrcUrls],
    scriptSrc: ["'unsafe-inline'", "'self'", ...scriptSrcUrls],
    styleSrc: ["'self'", "'unsafe-inline'", ...styleSrcUrls],
    workerSrc: ["'self'", 'blob:'],
    objectSrc: [],
    imgSrc: [
      "'self'",
      'blob:',
      'data:',
      'https://res.cloudinary.com/vipulk/', //SHOULD MATCH YOUR CLOUDINARY ACCOUNT!
      'https://images.unsplash.com/',
    ],
    fontSrc: ["'self'", ...fontSrcUrls],
  },
};
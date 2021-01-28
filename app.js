if (process.env.NODE_ENV !== 'production') {
  require('dotenv').config();
}

const express = require('express');
const path = require('path');
const ejsMate = require('ejs-mate');
const session = require('express-session');
const flash = require('connect-flash');
const methodOverride = require('method-override');
const passport = require('passport');
const LocalStrategy = require('passport-local');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const FacebookStrategy = require('passport-facebook').Strategy;
const User = require('./models/user');
const helmet = require('helmet');
const connectDB = require('./config/db');
const mongoSanitize = require('express-mongo-sanitize');
const homeRoutes = require('./routes/home');
const userRoutes = require('./routes/users');
const campgroundRoutes = require('./routes/campgrounds');
const reviewRoutes = require('./routes/reviews');
const authRoutes = require('./routes/oauth');
// To use mongo store to increase performance
const MongoDBStore = require('connect-mongo')(session);
const {
  errorMiddleware,
  nonExistentRoutesMiddleware,
  localsMiddleware,
} = require('./middleware');
const { googleConfig, facebookConfig } = require('./config/oauth');
const { sessionStoreConfig } = require('./config/session');
const { googleController, facebookController } = require('./controllers/oauth');
const { helmetConfig } = require('./config/helmet');

connectDB();

const app = express();

app.engine('ejs', ejsMate);
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.use(express.urlencoded({ extended: true }));
app.use(methodOverride('_method'));
app.use(express.static(path.join(__dirname, 'public')));
app.use(mongoSanitize({ replaceWith: '_' }));

const store = new MongoDBStore({
  url: process.env.DB_URL,
  secret: process.env.SECRET,
  touchAfter: 24 * 60 * 60,
});

store.on('error', function (e) {
  console.log('SESSION STORE ERROR', e);
});

// SESSIONS AND HELMET
app.use(session({ store, ...sessionStoreConfig }));
app.use(flash());
app.use(helmet());
app.use(helmet.contentSecurityPolicy(helmetConfig));

// PASSPORT AUTH
app.use(passport.initialize());
app.use(passport.session());
passport.use(new LocalStrategy(User.authenticate()));
passport.use(new GoogleStrategy(googleConfig, googleController));
passport.use(new FacebookStrategy(facebookConfig, facebookController));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

// FLASH MESSAGES STORED IN LOCAL VARIABLE SO THAT IT CAN BE ACCESSED BY FILES PRESENT IN VIEWS FOLDER
app.use(localsMiddleware);

//Routes
app.use('/', homeRoutes);
app.use('/', userRoutes);
app.use('/campgrounds', campgroundRoutes);
app.use('/campgrounds/:id/reviews', reviewRoutes);
app.use('/auth', authRoutes);

// FOR NON EXISTENT ROUTES
app.all('*', nonExistentRoutesMiddleware);

// ERROR MIDDLEWARE
app.use(errorMiddleware);

// SERVER CONNECTION
const PORT = process.env.PORT || 3000;

app.listen(
  PORT,
  console.log(
    `Server running in ${process.env.NODE_ENV} mode on port ${PORT}`.yellow.bold
  )
);

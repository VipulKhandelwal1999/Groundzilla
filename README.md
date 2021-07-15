# Groundzilla

Groundzilla is a website where users can create and review campgrounds. In order to review or create a campground, you must have an account.
This project was created using Node.js, Express, MongoDB, and Bootstrap. Passport.js was used to handle authentication and also supports Google and Facebook OAuth. <br>

### [Live Demo](https://dry-shelf-66779.herokuapp.com/)

![screenshot](https://github.com/VipulKhandelwal1999/Groundzilla/blob/main/images/home_screen.png)

![screenshot](https://github.com/VipulKhandelwal1999/Groundzilla/blob/main/images/home_screen_1.png)

![screenshot](https://github.com/VipulKhandelwal1999/Groundzilla/blob/main/images/campgrounds.png)

---

## Features

- User Authentication
  - Handles user login with username and password
  - Admin has unique username to manage the database

- User Authentication Using OAuth
  - Supports Google and Facebook OAuth.

- Managing Campgrounds
  - Create, edit and delete campgrounds
  - Can create or edit comments
  - Each user has a personal profile

- Authorization
  - User can also add comments to a webpage
  - User can only edit or delete their campgrounds or comments

- Flash Messages 
  - Flash Messages for different user inteactions

- Responsive web design

---

## Tech Stack Used

- [Visual Studio Code](https://code.visualstudio.com/) - A source code editor developed by Microsoft for Windows, Linux and macOS.
- [Git](https://git-scm.com/) - Git is software for tracking changes in any set of files.
- [Github](https://github.com/) - GitHub, Inc. is a provider of Internet hosting for software development and version control using Git.
- [CSS3](https://en.wikipedia.org/wiki/CSS) - CSS3 is the latest evolution of the Cascading Style Sheets language and aims at extending CSS2.
- [Bootstrap](https://getbootstrap.com/) - Bootstrap is a free and open-source CSS framework directed at responsive, mobile-first front-end web development.
- [Heroku](https://dashboard.heroku.com/) - Heroku is a platform as a service (PaaS) that enables developers to build, run, and operate applications entirely in the cloud.
- [MongoDB](https://www.mongodb.com/) - MongoDB is a source-available cross-platform document-oriented database program.
- [EJS](https://ejs.co/) - EJS is a simple templating language that lets you generate HTML markup with plain JavaScript.
- [Express.js](https://expressjs.com/) - Express.js, or simply Express, is a back end web application framework for Node.js.
- [Mongoose](https://mongoosejs.com/) - Mongoose provides a straight-forward, schema-based solution to model your application data.
- [Passport](http://www.passportjs.org/) - Passport is authentication middleware for Node.js.

---
## Usage

### Prerequisites

The following software is required to be installed on your system:

- Node 14.x
- Npm 6.x

Type the following commands in the terminal to verify your node and npm versions

```bash
node -v
npm -v
```
---

### Installation

Enter the following commands on your terminal:

```
git clone https://github.com/VipulKhandelwal1999/Groundzilla.git
cd Groundzilla
npm install
```

---

### Env Variables

Create a .env file in then root and add the following:

```
CLOUDINARY_CLOUD_NAME = cloudinary_user_name
CLOUDINARY_KEY = cloudinary_key
CLOUDINARY_SECRET = cloudinary_secret
DB_URL = mongodb_url
FACEBOOK_CALLBACK_URL = facebook_callback_url
FACEBOOK_CLIENT_ID = facebook_client_id
FACEBOOK_CLIENT_SECRET = facebook_client_secret
GOOGLE_CALLBACK_URL = google_callback_url
GOOGLE_CLIENT_ID = google_client_id
GOOGLE_CLIENT_SECRET = google_client_secret
MAPBOX_TOKEN = mapbox_token
SECRET = secret_key
```

---

### Run

Enter the following commands on your terminal to run it locally:

```
npm start

```

---

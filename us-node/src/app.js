const express = require('express');
const cors = require('cors');
const router = require('./router');
const bodyParser = require('body-parser');
const passport = require('passport');
const config = require('./config');
const DocusignStrategy = require('passport-docusign');
const moment = require('moment');

class App {

  constructor() {
    this.hostUrl = `http://${config.APP.host}:${config.APP.port}`;
    this.app = express();
    this.init();
  }

  init() {
    this.configureMiddleware();
    this.handleRoutes();
    this.initiateAppStart();
    // this.configureDocusignStrategy();
    this.handleExceptions();
  }

  configureMiddleware() {
    this.app.use(cors());
    this.app.use(bodyParser.json());
    this.app.use(bodyParser.urlencoded({ extended: true }));
    // this.app.use(passport.initialize());
    // this.app.use(passport.session())
    this.app.options('*', cors());
  }

  handleRoutes() {
    new router(this.app);
  }

  initiateAppStart() {
    if (!config.DOCU_SIGN.clientId || 
      !config.DOCU_SIGN.clientSecret) {
        console.log(`
          You need to setup following information in the configuration file (config.js),
          before running the app.

            - DOCU_SIGN.clientId
            - DOCU_SIGN.clientSecret 
        `);
        process.exit();
    } else {
      this.start();
    }
  }

  start() {

    this.app.listen(config.APP.port, (err) => {
      if (err) {
        console.log(`Error - ${err}`);
        process.exit(10);
      }
      console.log(`App is listening on ${this.hostUrl}`);
    });
  }

  // configureDocusignStrategy() {
  //   passport.serializeUser(function (user, done) { done(null, user) });
  //   passport.deserializeUser(function (obj, done) { done(null, obj) });

  //   const docusignResponse = (accessToken, refreshToken, params, profile, done) => {
  //     const user = profile;
  //     user.accessToken = accessToken;
  //     user.refreshToken = refreshToken;
  //     user.expiresIn = params.expires_in;
  //     user.tokenExpirationTimestamp = moment().add(user.expiresIn, 's');
  //     return done(null, user);
  //   };

  //   const docusignStrategy = new DocusignStrategy({
  //     production: config.APP.isProduction,
  //     clientID: config.DOCU_SIGN.clientId,
  //     scope: config.DOCU_SIGN.scopes.join(','),
  //     callbackUrl: `${this.hostUrl}${config.APP.apiUrl}/docusign/auth/callback`,
  //     state: true
  //   }, docusignResponse);

  //   passport.use(docusignStrategy);
  // }

  handleExceptions() {
    process.on('uncaughtException', (err) => {
      try {
        console.log(err);
      } catch(e) {
        console.log(e);
      }

      process.exit(1);
    });
  }
}

new App();
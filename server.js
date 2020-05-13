// Testing
require("dotenv").config();
var express = require("express");
var exphbs = require("express-handlebars");
var basicAuth = require("express-basic-auth");
var session = require("express-session");
var cookieParser = require("cookie-parser");
// Test
var db = require("./models");

var app = express();
var PORT = process.env.PORT || 3000;

// Middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(express.static("public"));
app.use(cookieParser());
app.use(session({ secret: "It's only a model" }));

//Authentication
app.use(function(req, res, next) {
  if (!req.session.authStatus || "loggedOut" === req.session.authStatus) {
    req.session.authStatus = "loggingIn";
    req.user = false;
    req.remoteUser = false;
    if (req.headers && req.headers.authorization) {
      delete req.headers.authorization;
    }
  }
  next();
});

app.use(
  basicAuth({
    users: {
      admin: "guest",
      JDeer: "12345",
      MRose: "Password123",
      LMan: "TurtlesAllTheWayDown"
    },
    challenge: true
  })
);

//Alternate Authentication
/*
app.use(basicAuth({ authorizer: myAuthorizer, challenge: true }));

function myAuthorizer(username, password) {
  var userMatches = basicAuth.safeCompare(username, "admin");
  var passwordMatches = basicAuth.safeCompare(password, "guest");
  return userMatches & passwordMatches;
}
*/
app.use(function(req, res, next) {
  req.session.authStatus = "loggedIn";
  next();
});

// Handlebars
app.engine(
  "handlebars",
  exphbs({
    defaultLayout: "main"
  })
);
app.set("view engine", "handlebars");

// Routes
require("./routes/apiRoutes")(app);
require("./routes/htmlRoutes")(app);

var syncOptions = { force: false };

// If running a test, set syncOptions.force to true
// clearing the `testdb`
if (process.env.NODE_ENV === "test") {
  syncOptions.force = true;
}

// Starting the server, syncing our models ------------------------------------/
db.sequelize.sync(syncOptions).then(function() {
  app.listen(PORT, function() {
    console.log(
      "==> 🌎  Listening on port %s. Visit http://localhost:%s/ in your browser.",
      PORT,
      PORT
    );
  });
});

module.exports = app;

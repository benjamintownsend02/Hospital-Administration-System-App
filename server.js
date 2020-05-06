// Testing
require("dotenv").config();
var express = require("express");
var exphbs = require("express-handlebars");
var basicAuth = require("express-basic-auth");
// Test
var db = require("./models");

var app = express();
var PORT = process.env.PORT || 3000;
//TODO: Fix? or Remove after Testing
/*
var credentials = { admin: "guest" };

var currentUserID="";
*/
// Middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(express.static("public"));

//TODO: Remove when done testing
//TODO: FIX?
/*
app.use(basicAuth({ authorizer: myAuthorizer, challenge: true }));
function myAuthorizer(username, password) {
  console.log(credentials[username]);
  var userMatches = credentials[username];
  var passwordMatches = basicAuth.safeCompare(password, credentials[username]);
  if (userMatches && passwordMatches) {
    return true;
  }
  return false;
}
*/

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

//TODO: Remove when done testing
/*
function getUnauthorizedResponse(req) {
  //TODO: Remove console log after testing
  console.log(req);
  return req.auth
    ? "Credentials " + req.auth.user + ":" + req.auth.password + " rejected"
    : "No credentials provided";
}
*/
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

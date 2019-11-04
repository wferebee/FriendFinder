// Dependencies
var express = require("express");
var bodyParser = require("body-parser");
var path = require("path"); // is this part even necessary? just included it because it was in the HW instructions

var app = express();

var PORT = process.env.PORT || 3000; // was 31415 but didnt know if it would work once deployed to Heroku


app.use(express.static(__dirname + "/app/css")); // learned this from class, needed this to use a .css doc

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));

// API and HTML routes
require("./app/routing/apiRoutes.js")(app);
require("./app/routing/htmlRoutes.js")(app);

app.listen(PORT, function() {
	console.log("App listening on PORT: " + PORT);
});
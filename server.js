const express = require("express");
const exphbs = require("express-handlebars");

var PORT = process.env.PORT || 8080;

var app = express();

// Serves static content from the public directory
app.use(express.static("public"));

// Parse application body
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Set up handlebars
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// Reads routes from controller
var routes = require("./controllers/burgers_controller");
app.use(routes);

app.listen(PORT, () => console.log("Server listening on: http://localhost:" + PORT));

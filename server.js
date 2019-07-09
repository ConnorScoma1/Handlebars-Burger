var express = require("express");
var bodyParser = require("body-parser");
var exphbs = require("express-handlebars");
const PORT = process.env.PORT || 8080;

var app = express();

app.use(express.static("public"));

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

var routes = require("./controller/burger_controller.js");
app.use(routes);

app.listen(PORT, () => {
  console.log("server is live on http://localhost:" + PORT);
});

var express = require("express");
var app = express();

var port = process.env.PORT|8080;
var path = require("path");
var index = require("./controllers/index");
app.set("view engine", "ejs");
app.set("views",path.join(__dirname, "views"));
app.use("/", index);
app.use(express.static("public"));
app.listen(port);
console.log("Server listening on port "+port);

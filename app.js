var bodyParser = require("body-parser");
// var mongoose = require("mongoose");
var express = require("express");
var app = express();

app.use(bodyParser.urlencoded({ extended: true }));
express.static("public");

app.get("/", function (req, res) {
	res.render("index.ejs");
});

app.get("/party", function (req, res) {
	res.redirect("https://meet.jit.si/xyz");
});

app.listen(process.env.PORT || 3000, function () {
	console.log("SERVER 3000 HAS STARTED");
});
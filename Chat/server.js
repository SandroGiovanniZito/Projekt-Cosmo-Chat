// Create express app and database
var express = require("express")
var app = express()
var db = require("./data/database.js")
var md5 = require("md5")

const fs = require ('fs')

var bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

const routes = require('./routes/routes.js')(app, fs);

// Server port
var PORT = 8000 
// Start server
app.listen(PORT, () => {
    console.log("Run")
});
// Root endpoint
app.get("/", (req, res, next) => {
    res.json("Server is running on port 8000")
});

// Default response
app.use(function(req, res){
    res.status(404);
});
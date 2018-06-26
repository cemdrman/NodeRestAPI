var express = require("express");
var app = express();
var db = require("./util/db");

var UserController = require('./controller/UserController');
app.use('/users', UserController);

var ProductController = require("./controller/ProductController");
app.use("/product",ProductController);

module.exports = app;
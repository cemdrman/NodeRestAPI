var express = require("express");
var app = express();
var db = require("./util/db");

var UserController = require('./user/UserController');
app.use('/users', UserController);

var ProductController = require("./product/ProductController");
app.use("/product",ProductController);

module.exports = app;
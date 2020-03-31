var express = require('express');
var db = express();
var mongoose = require('mongoose');
var Schema = mongoose.Schema;
mongoose.connect("mongodb://localhost:27017/bookstore",{useNewUrlParser: true});
var connection = mongoose.connection;
connection.on('errors',console.error.bind(console, 'connection error:'));
module.exports = db;
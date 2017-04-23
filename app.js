var express = require('express');
var app = express();
var morgan = require('morgan');
var path = require('path');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

var mongo = require ('mongodb');
var mongoose = require('mongoose');

app.use(express.static(__dirname + '/app'));
app.use(morgan('dev'));
app.use(bodyParser.urlencoded({'extended' : 'true'}));
app.use(bodyParser.json());

app.listen(process.env.PORT || 3000);
console.log("App listening on port 3000");

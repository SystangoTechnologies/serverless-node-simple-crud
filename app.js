'use strict';
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var bodyParser = require('body-parser')
var fs = require('fs')

var sls = require('serverless-http')
var routePath = './src/routes/';
var app = express();
// parse application/json
app.use(bodyParser.json())

let loggerOption = (process.env.NODE_ENV === 'production') ? 'common' : 'dev';
app.use(logger(loggerOption));
app.use(express.json());
app.use(express.urlencoded({
	extended: false
}));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

fs.readdirSync(routePath).forEach((file) => {
	let route = routePath + file;
	require(route)(app);
});

// app.listen(3000);
// module.exports = app;

module.exports.handler = sls(app);
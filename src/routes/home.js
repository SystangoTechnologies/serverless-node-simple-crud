'use strict';
var express = require('express');
var router = express.Router();
var controller =  require('../controller/home');

router.get('/', controller.homePage);

module.exports = (app) => {
	app.use('/', router);
}

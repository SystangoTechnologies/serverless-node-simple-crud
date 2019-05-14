'use strict';
var express = require('express');
var router = express.Router();
var userController = require('../controller/user');

router.post('/', userController.createUser);

router.get('/', userController.getUsers);

router.put('/:userId', userController.updateUser);

router.get('/:userId', userController.getUserDetails);

router.delete('/:userId', userController.deleteUser);


module.exports = (app) => {
	app.use('/users', router);
}
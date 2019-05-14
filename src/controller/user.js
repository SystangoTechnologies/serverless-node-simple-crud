'use strict';
var User = require('../database/user');

/**
 * Get Users details from database.
 * @param  {Object} req request object
 * @param  {Object} res response object
 */
exports.getUsers = async (req, res) => {
	try {
		let results = await User.getAllUsers();
		if (results && results.length) {
			return res.status(200).json(results);
		} else {
			return res.status(204).json();
		}
	} catch (error) {
		console.log('Error while getting users', error);
		return res.status(500).json({
			message: error.message
		});
	}
}

/**
 * Create user and save data in database.
 * @param  {Object} req request object
 * @param  {Object} res response object
 */
exports.createUser = async (req, res) => {
	try {
		await User.saveUser(req.body);
		return res.status(201).json();
	} catch (error) {
		console.log('Error while creating user', error);
		return res.status(500).json({
			message: error.message
		});
	}
}

/**
 * Update user details
 * @param  {Object} req request object
 * @param  {Object} res response object
 */
exports.updateUser = async (req, res) => {
	try {
		let data = req.body;
		let filter = {
			id: req.params.userId
		}
		let result = await User.updateUserDetails(filter, data);
		if (result && result.length && result[0]) {
			return res.status(201).json();
		} else {
			return res.status(204).json();
		}
	} catch (error) {
		console.log('Error while updating user', error);
		return res.status(500).json({
			message: error.message
		});
	}
}

/**
 * Controller get user details based on userid.
 * @param  {Object} req request object
 * @param  {Object} res response object
 */
exports.getUserDetails = async (req, res) => {
	try {
		let filter = {
			id: req.params.userId
		}
		let details = await User.getUser(filter);
		if (details) {
			return res.status(200).json(details);
		} else {
			return res.status(204).json();
		}
	} catch (error) {
		console.log('Error while getting user details', error);
		return res.status(500).json({
			message: error.message
		});
	}
}

/**
 * Delete user information.
 * @param  {Object} req request object
 * @param  {Object} res response object
 */
exports.deleteUser = async (req, res) => {
	try {
		let filter = {
			id: req.params.userId
		}
		let result = await User.deleteUser(filter);
		if (result) {
			return res.status(204).json();
		} else {
			return res.status(404).json();
		}
	} catch (error) {
		console.log('Error while deleting user', error);
		return res.status(500).json({
			message: error.message
		});
	}
}
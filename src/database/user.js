'use-strict'

var User = require('../../models').User;

/**
 * Function get all the users from database based on the filter.
 * @param  {Object} filter={} Json object contains filter data.
 */
exports.getAllUsers = async (filter = {}) => {
	try {
		let result = await User.findAll({
			where: filter
		});
		return Promise.resolve(result);
	} catch (error) {
		console.log('Error while getting users from database', error);
		return Promise.reject(error);
	}
}

/**
 * Function get user details from database based on the filter provided.
 * @param  {Object} filter Json object contains filter data.
 */
exports.getUser = async (filter = {}) => {
	try {
		let details = await User.findOne({
			where: filter
		});
		return Promise.resolve(details);
	} catch (error) {
		console.log('Error while getting user details from database', error);
		return Promise.reject(error);
	}
}

/**
 * Function save user information in database.
 * @param  {Object} bodyData Json object contains user data.
 */
exports.saveUser = async (bodyData) => {
	try {
		await User.create(bodyData);
		return Promise.resolve();
	} catch (error) {
		console.log('Error while saving user in database', error);
		return Promise.reject(error);
	}
}

/**
 * Function update user based on the filter provided.
 * @param  {Object} filter Json object contains filter data.
 * @param  {Object} bodyData Json object contains data which need to update.
 */
exports.updateUserDetails = async (filter, bodyData) => {
	try {
		let result = await User.update(bodyData, {
			where: filter
		});
		return Promise.resolve(result);
	} catch (error) {
		console.log('Error while updating user information in database', error);
		return Promise.reject(error);
	}
}

/**
 * Function delete user from database based on filter.
 * @param  {} filter Json object contains filter data.
 */
exports.deleteUser = async (filter) => {
	try {
		let result = await User.destroy({
			where: filter
		});
		return Promise.resolve(result);
	} catch (error) {
		console.log('Error while updating user information in database', error);
		return Promise.reject(error);
	}
}
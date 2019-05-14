'use strict';
module.exports = (sequelize, DataTypes) => {
	var User = sequelize.define('User', {
		firstName: DataTypes.STRING,
		lastName: DataTypes.STRING,
		address: DataTypes.STRING,
		contact: DataTypes.BIGINT
	});

	User.associate = function (models) {};
	User.sync({});

	return User;
};
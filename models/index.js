'use strict';

const fs = require('fs');
const path = require('path');
const Sequelize = require('sequelize');
const basename = path.basename(__filename);
const env = process.env.NODE_ENV || 'development';
const config = require(__dirname + '/../config/config.json')[env];
const db = {};
let database = process.env.DATABASE || config.database;
let username = process.env.DB_USERNAME || config.username;
let password = process.env.DB_PASSWORD || config.password;
let dbHost = process.env.DB_HOST || config.host;
let dialect = config.dialect;
let dbPort = process.env.DB_PORT || config.port;

let sequelize;

sequelize = new Sequelize(database, username, password, {
	host: dbHost,
	port: dbPort,
	dialect: dialect,
	pool: {
		max: 5,
		min: 0,
		idle: 10000
	}
});

fs
	.readdirSync(__dirname)
	.filter(file => {
		return (file.indexOf('.') !== 0) && (file !== basename) && (file.slice(-3) === '.js');
	})
	.forEach(file => {
		const model = sequelize['import'](path.join(__dirname, file));
		db[model.name] = model;
	});

Object.keys(db).forEach(modelName => {
	if (db[modelName].associate) {
		db[modelName].associate(db);
	}
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;
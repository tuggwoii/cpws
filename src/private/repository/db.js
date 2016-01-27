'use strict';
var Sequelize = require('sequelize');
var sequelize = require('./sequelize');
var User = require('./user');
var Role = require('./role');

exports.sync = function () {
	return sequelize.sync();
};
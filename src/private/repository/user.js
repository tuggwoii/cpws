var Sequelize = require('sequelize');
var sequelize = require('./sequelize');
var User = sequelize.define('User', {
  username: Sequelize.STRING,
  password: Sequelize.STRING
});

module.exports = User;
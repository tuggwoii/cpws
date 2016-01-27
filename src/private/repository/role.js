var Sequelize = require('sequelize');
var sequelize = require('./sequelize');
var Role = sequelize.define('Role', {
  name: Sequelize.STRING,
});

module.exports = Role;
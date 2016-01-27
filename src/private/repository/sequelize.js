'use strict';
var Sequelize = require('sequelize');
var sequelize = new Sequelize('d5o6hhmnfe7mt7', 'fkewbhwwmwksks', '1Ua5pDIA9I0CLqJ4HFcDsSzpKs', {
  host: 'ec2-54-83-202-218.compute-1.amazonaws.com',
  dialect: 'postgres', //'mysql'|'mariadb'|'sqlite'|'postgres'|'mssql',
  dialectOptions: {
	ssl: true
  },
  ssl: true,
  pool: {
    max: 5,
    min: 0,
    idle: 10000
  }
});

module.exports = sequelize;
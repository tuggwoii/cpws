﻿'use strict';
var knex = require('knex')({
    client: 'pg',
    connection: process.env.DATABASE_URL || {
        host: "ec2-54-225-223-40.compute-1.amazonaws.com",
        port: 5432,
        user: "uvevopketrcogl",
        password: "ifzYVY7zaNGUBDO81GEFZAHYWz",
        database: "d321hdjl38ar33",
        ssl: true
    }
});
var bookshelf = require('bookshelf')(knex);

var Role = bookshelf.Model.extend({
    tableName: 'roles',
    users: function () {
        return this.hasMany(User);
    }
});

var UserApp = bookshelf.Model.extend({
    tableName: 'apps_users'
});

var User = bookshelf.Model.extend({
    tableName: 'users',
    role: function () {
        return this.belongsTo(Role);
    },
	apps: function () {
        return this.belongsToMany(App);
    }
});

var App = bookshelf.Model.extend({
    tableName: 'apps',
    users: function () {
        return this.belongsToMany(User);
    }
});

exports.Knex = knex;
exports.User = User;
exports.Role = Role;
exports.App = App;
exports.UserApp = UserApp;
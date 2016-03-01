'use strict';
var shortid = require('shortid');
var Log = require('../../helpers/log');
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

exports.up = function () {
    knex.schema.createTable('apps', function (table) {
        table.increments('id');
        table.string('name');
        table.string('public_key').unique();
        table.string('group_key');
        table.integer('create_by')
            .references('id')
            .inTable('users');
        table.timestamp('created_datetime').defaultTo(knex.fn.now());
        table.timestamp('updated_datetime');
        console.log(table);
    }).createTableIfNotExists('users', function (table) {
        table.string('email').unique();
        Log.write('migration success');
        process.exit();
    }).catch(function (err) {
        Log.write(err);
        process.exit();
    });
};

exports.down = function () {
    knex.schema.dropTable('apps').then(function () {
        Log.write('migration reverse success');
        process.exit();
    }).catch(function (err) {
        Log.write(err);
        process.exit();
    });
};

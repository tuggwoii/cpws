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
    knex.schema.createTable('roles', function (table) {
        table.increments('id');
        table.string('name');
    }).createTable('users', function (table) {
        table.increments('id');
        table.string('first_name');
        table.string('last_name');
        table.string('email');
        table.string('password');
        table.integer('role_id')
            .references('id')
            .inTable('roles');
        table.timestamp('created_datetime').defaultTo(knex.fn.now());
        table.timestamp('updated_datetime');
    }).then(function (a) {
        return knex.insert({ name: 'admin' }).into('roles').returning('*');
    }).then(function (roles) {
        if (roles.length) {
            return knex.insert({
                first_name: 'Tak',
                last_name: '-',
                email: 'tugg.solo@gmail.com',
                password: '$2a$10$yFC9HCzPrqfASfUpnA9I5utE8qCCAEC..LhSWJfw3We/fzKnVScS2',
                role_id: roles[0].id,
                created_datetime: new Date(),
                updated_datetime: new Date()
            }).into('users').returning('*');
        }
        else {
            console.log('role not found')
            process.exit();
        }
    }).then(function (user) {
        console.log(user);
        return knex.insert({ name: 'user' }).into('roles').returning('*');
    }).then(function () {
        console.log('migration success');
        process.exit();
    }).catch(function (e) {
        console.error(e);
    });
};

exports.down = function () {
    knex.schema.dropTable('users').then(function () {
        knex.schema.dropTable('roles').then(function () {
            console.log('migration reverse success');
            process.exit();
        }).catch(function (e) {
            console.error(e);
        });
    }).catch(function (e) {
        console.error(e);
    });
};

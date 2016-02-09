'use strict';
var fs = require('fs');
var Base = require('./base');
var bcrypt = require('bcrypt-nodejs');

class Account extends Base {

    comparePassword (password, hash) {
        return bcrypt.compareSync(password, hash);
    }

    find (email) {
        var users = JSON.parse(fs.readFileSync('src/db/users/users.json', 'utf8'));
        for (var i = 0; i < users.length; i++) {
            if (users[i].email === email) {
                return users[i];
            }
        }
        return null;
    }

    serialize (data) {
        return {
            email: data.email,
            token: data.token
        };
    }

    serializeLogin(data) {
        return {
            id: data.id,
            email: data.email,
            name: data.name,
            role: data.role
        };
    }

    isValid (data) {
        if (!data.email) {
            return false;
        }
        else if (!data.password) {
            return false;
        }
        var user = this.find(data.email);
        if (!user) {
            return false;
        }
        return this.comparePassword(data.password, user.password);
    }
}

module.exports = new Account();

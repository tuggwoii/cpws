'use strict';
var fs = require('fs');
var Log = require('../helpers/log');
var Base = require('./base');
var App = require('../db/objects').App;
var UserApp = require('../db/objects').UserApp;
var Knex = require('../db/objects').Knex;
var Date = require('../helpers/date');

class Apps extends Base {

    isExist (appName) {
        
    }

    create (data) {
        var promise = new Promise(function (resolve, reject) {
            new App(data).save().then(function (response) {
				var app = response.attributes;
				console.log(app);
				var userApp = {
					user_id: app.owner,
					app_id: app.id
				}
				Knex.insert(userApp).into('users_apps')
				.returning('*')
				.then(function(res){
					console.log(res);
					resolve(app);
				}).catch(reject);
            }).catch(reject);
        });
        return promise;
    }

    get (id) {
       
        
    }

    getAll () {
       
        
    }

    save (data) {
        
    }

    isValid (data) {
		var promise = new Promise(function (resolve, reject){
			if(!data.name) {
				reject('name is required.');
			}
			else {
				resolve(true);
			}
		});
		return promise;
    }

    serialize (data) {
        return data;
    }

    serializeList (data) {
        return data;
    }
}

module.exports = new Apps();

'use strict';
var fs = require('fs');
var BaseApi = require('./base');
//var log = require('../helpers/log');

class StaticApi extends BaseApi {

    nav (context, request, response) {
        fs.readFile('./src/db/routes/apis.json', 'utf-8', function (err, content) {
            if (err) {
                context.error(response, 'Internal server error', 500);
            }
            else {
                context.success(response, JSON.parse(content), function (data) {
                    return data;
                });
            }
        });
    }

    endpoints() {
        return [
			{ url: '/backend/navigations', method: 'get', roles: ['admin','user'], response: this.nav },
        ];
    }
}

module.exports = new StaticApi();

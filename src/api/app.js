'use strict';
var BaseApi = require('./base');
var Apps = require('../models/app');
var Log = require('../helpers/log');

class AppApi extends BaseApi {

    create (context, request, response) {
        context.success(response, { r: 'create' });
    }

    getAll (context, request, response) {
        context.success(response, { r: 'get all' });
    }

    get (context, request, response) {
        context.success(response, { r: 'get one' });
    }

    endpoints () {
        return [
			{ url: '/apps', method: 'post', roles: ['admin', 'user'], response: this.create },
            { url: '/apps', method: 'get', roles: ['admin', 'user'], response: this.getAll },
            { url: '/apps', method: 'get', roles: ['admin', 'user'], response: this.get, params: ['id'] }
        ];
    }
}

module.exports = new AppApi(Apps.serialize);
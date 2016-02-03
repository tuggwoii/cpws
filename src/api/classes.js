'use strict';
var BaseApi = require('./base');
var Classes = require('../models/classes');
var log = require('../helpers/log');

class ClassesApi extends BaseApi {

    create (context, request, response) {
        var data = request.body;
        if (Classes.isValid(data)) {
            Classes.create(data).then(function (obj) {
                context.success(response, obj);
            }).catch(function (err) {
                if (err === 'exist') {
                    context.error(response, 'Model exist', 400);
                }
                else {
                    context.error(response, 'Internal server error', 500);
                    log.file(err.message);
                }
            });
        }
        else {
            context.error(response, 'Class is invalid model', 400);
        }
    }

    get (context, request, response) {
        Classes.get().then(function (obj) {
            console.log('line 29', obj)
            context.success(response, obj, Classes.serializeList);
        }).catch(function (err) {
            context.error(response, 'Internal server error', 500);
            log.file(err.message);
        });
    }

    endpoints () {
        return [
			{ url: '/classes', method: 'post', roles: ['admin'], response: this.create },
            { url: '/classes', method: 'get', roles: ['admin'], response: this.get }
        ];
    }
}

module.exports = new ClassesApi(Classes.serialize);
'use strict';
var BaseApi = require('./base');
var Pages = require('../models/pages');
var log = require('../helpers/log');

class PagesApi extends BaseApi {

    create(context, request, response) {
        var data = request.body;
        if (Pages.isValid(data)) {
            console.log(data);
            Pages.add(data).then(function () {
                context.success(response, data);
            }).catch(function (err) {
                context.error(response, 'Internal server error', 500);
                log.file(err.message);
            });
        }
        else {
            context.error(response, 'account is invalid', 400);
        }
    }

    endpoints () {
        return [
			{ url: '/pages', method: 'post', roles: ['admin'], response: this.create }
        ];
    }
}

module.exports = new PagesApi(Pages.serialize);
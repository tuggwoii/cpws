'use strict';
var accountApi = require('../api/account');
var routes = [accountApi];
module.exports = function (request, response, next) {
    var isFound = false;
    for (var i = 0; i < routes.length; i++) {
        var context = routes[i];
        var endpoints = context.endpoints();
        for (var j = 0; j < endpoints.length; j++) {
            var route = endpoints[j];
            if (route.url === request.url && route.method === request.method.toLowerCase()) {
                isFound = true;
                route.response(context, request, response)
                break;
            }
        }
    }
    if (!isFound) {
        response.status(404).json({
            data: [],
            error: {
                message: 'resource not found.'
            }
        });
    }
}

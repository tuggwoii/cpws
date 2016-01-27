'use strict';
var fs = require('fs');
var routes = JSON.parse(fs.readFileSync('src/db/routes/views.json', 'utf8'));
module.exports = function (request, response, next) {
	var route = request.url;
	var isFound = false;
	for(var i = 0; i < routes.views.length; i++) {
		var currentRoute = routes.views[i];
		if(currentRoute.url === route) {
			isFound = true;
			response.status(200).render(currentRoute.view);
			break;
		}
	}
	if(!isFound) {
		next();
	}
}

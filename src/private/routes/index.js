var express = require('express');
var app = express();
module.exports = function (request, response, next) {
    
    var route = request.url;
	var isFound = false;
	var routes = [
		{url: '/', view: 'pages/index.html'}, 
		{url: '/login', view: 'pages/login.html'}, 
		{url: '/dashboard', view: 'pages/dashboard.html'}
	];
	
	for(var index = 0; index < routes.length; index++) {
		if(routes[index].url === route) {
			response.status(200).render(routes[index].view);
			isFound = true;
			break;
		}
	}
	
	if(!isFound) {
		response.status(404).render('pages/404.html');	
	}
}
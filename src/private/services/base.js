'use strict'
var BaseService = function () {
		
};

BaseService.prototype.responseData = function (request, response, data) {
	response.json(data);
};

BaseService.prototype.responseError = function (request, response, error) {
	 response.json({data:[], errors:{ message: error }});
};

module.exports = BaseService;

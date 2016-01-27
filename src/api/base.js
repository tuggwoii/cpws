'use strict';
class BaseApi {
	
	constructor(serializer) {
		this.serializer = serializer;
	}
	
	success (response, model) {
		var serializer = this.serializer;
		response.json(serializer(model));
	}
	
	error (response, err, status) {
		var status = status || 400;
		
		response.status(status).json({
			error: err
		});
	}
	
	endpoints () {
		return {
			
		}
	}
}

module.exports = BaseApi;
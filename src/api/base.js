'use strict';
class BaseApi {

	constructor (serializer) {
		this.serializer = serializer;
	}

    success(response, model, customSerializer) {
        var serializer = customSerializer || this.serializer;
		response.json({ data: serializer(model) });
	}

	error (response, error, status) {
		var code = status || 400;
		response.status(code).json({
            data: [],
            error: {
                message: error
            }
		});
	}

	endpoints () {
        return {};
	}
}

module.exports = BaseApi;

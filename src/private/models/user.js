module.exports = function (model) {
	
	var User = function (model) {
		this.username = model.username;
	}
	
	User.prototype.serialize = function () {
		return {
			username: this.username
		};
	}
	
	User.prototype.isValid = function () {
		var isValid = true;
		if(!this.username) {
			return false;
		}
	}
	
	return User;
}
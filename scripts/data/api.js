//ajax calls go here
var Q = require("q");
var Api = function(url) {
	this.url = url || "";
};

Api.prototype.getItems = function() {
	return fakeAsync([{title:"myTitle1ab"}, {title:"myTitle2"}]);
};

var fakeAsync = function(data) {
	// fake async with mock data
	var deferred = Q.defer();
	console.log("HERE2");

	setTimeout(function() {
	console.log("HERE2.1");
		deferred.resolve(data);
	},1);
	return deferred.promise;
}; 

module.exports = Api;
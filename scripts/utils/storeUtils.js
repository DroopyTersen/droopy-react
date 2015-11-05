var EventEmitter = require("events").EventEmitter;
var CHANGE_EVENT = "change";
var dispatcher = require("./dispatcher.js");

var storeUtils = {};

storeUtils.createStore = function() {
	var store = new EventEmitter();
	store.subscribe = function(cb) {
		store.on(CHANGE_EVENT, cb);
	};
	store.unsubscribe = function(cb) {
		store.removeListener(CHANGE_EVENT, cb);
	};
	store.broadcast = function() {
		store.emit(CHANGE_EVENT);
	}
	return store;
};

storeUtils.register = function(actionHandlers) {
	return dispatcher.register(function(action) {
		console.log("HERE I AM" + action.type);
		console.log(actionHandlers);
		if (actionHandlers[action.type]) {
			actionHandlers[action.type].apply(null, action.payload);
		}
	});
};

module.exports = storeUtils;


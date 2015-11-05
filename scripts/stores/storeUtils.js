var EventEmitter = require("events").EventEmitter;
var CHANGE_EVENT = "change";
var dispatcher = require("../dispatcher.js");

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

storeUtils.checkAction = function(action) {
	
};

storeUtils.register = function(actionHandlers) {
	return dispatcher.register(function(action) {
		if (actionHandlers[action.type]) {
			actionHandlers[action.type](action);
		}
	});
};

module.exports = storeUtils;


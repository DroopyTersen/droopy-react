var dispatcher = require("../dispatcher.js");
var EventEmitter = require("events").EventEmitter;
var uiActions = require("../actions/uiActions");
var apiActions = require("../actions/apiActions");
var Api = require("../data/api");

var api = new Api();
var CHANGE_EVENT = "change";
var _items = [];

var store = new EventEmitter();
store.subscribe = function(cb) {
	store.on(CHANGE_EVENT, cb);
};
store.unsubscribe = function(cb) {
	store.removeListener(CHANGE_EVENT, cb);
};
store.getItems = function() {
	return _items;
};

var loadItems = function() {
	console.log("HERE");
	api.getItems().then(apiActions.itemsLoaded);
};
var setItems = function(items) {
	_items = items;
	store.emit(CHANGE_EVENT);
};

var selectItem = function(item) {
	alert("An item was selected: " + item.title);
};

dispatcher.register(function(action) {
	switch(action.type) {
		case apiActions.types.LOAD_ITEMS:
			loadItems();
			break;
		case apiActions.types.ITEMS_LOADED:
			setItems(action.items);
			break;
			
		case uiActions.types.SELECT_ITEM:
			selectItem(action.item);
			break;
		
		default:
	}
});

loadItems();
module.exports = store;
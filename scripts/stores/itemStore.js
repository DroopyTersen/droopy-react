var actions = require("../actions");
var Api = require("../data/api");
var storeUtils = require("../utils/storeUtils");

var api = new Api();
var _items = [];

var store = storeUtils.createStore();

store.getItems = function() {
	return _items;
};

var actionHandlers = {};

actionHandlers[actions.api.loadItems.type] = function() {
	api.getItems().then(actions.api.itemsLoaded);
};

actionHandlers[actions.api.itemsLoaded.type] = function(items) {
	_items = items;
	store.broadcast();	
};

actionHandlers[actions.ui.selectItem.type] = function(item) {
	alert("An item was selected: " + item.title);
};

storeUtils.register(actionHandlers);
actions.api.loadItems();
module.exports = store;
var actions = require("../actions");
var Api = require("../data/api");
var storeUtils = require("./storeUtils");

var api = new Api();
var _items = [];

var store = storeUtils.createStore();

store.getItems = function() {
	return _items;
};

var actionHandlers = {};

actionHandlers[actions.api.types.LOAD_ITEMS] =  function(action) {
	api.getItems().then(actions.api.itemsLoaded);
};

actionHandlers[actions.api.types.ITEMS_LOADED] = function(action) {
	_items = action.items;
	store.broadcast();	
};

actionHandlers[actions.ui.types.SELECT_ITEM] = function(action) {
	alert("An item was selected: " + action.item.title);
};

storeUtils.register(actionHandlers);

actions.api.loadItems();
module.exports = store;
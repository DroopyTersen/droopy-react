var uiActions = require("../actions/uiActions");
var apiActions = require("../actions/apiActions");
var Api = require("../data/api");
var storeUtils = require("./storeUtils");

var api = new Api();
var _items = [];

var store = storeUtils.createStore();

store.getItems = function() {
	return _items;
};

var actionHandlers = {};

actionHandlers[apiActions.types.LOAD_ITEMS] =  function(action) {
	api.getItems().then(apiActions.itemsLoaded);
};

actionHandlers[apiActions.types.ITEMS_LOADED] = function(action) {
	_items = action.items;
	store.broadcast();	
};

actionHandlers[uiActions.types.SELECT_ITEM] = function(action) {
	alert("An item was selected: " + action.item.title);
};

storeUtils.register(actionHandlers);

apiActions.loadItems();
module.exports = store;
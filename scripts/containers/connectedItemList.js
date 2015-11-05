var utils = require("../utils/componentUtils.jsx");
var itemStore = require("../stores/itemStore");
var ItemList = require("../components/itemList.jsx");

var ItemListWithStore = utils.storify(ItemList, [itemStore], function() {
	return { items: itemStore.getItems() };
});

module.exports = ItemListWithStore;
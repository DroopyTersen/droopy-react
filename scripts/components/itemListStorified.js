var storify = require("./storify.jsx");
var itemStore = require("../stores/itemStore");
var ItemList = require("./itemList.jsx");

var ItemListWithStore = storify(ItemList, [itemStore], function() {
	return { items: itemStore.getItems() };
});

module.exports = ItemListWithStore;
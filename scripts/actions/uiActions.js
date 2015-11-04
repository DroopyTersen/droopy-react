var dispatcher = require("../dispatcher.js");

// Define action type keys
var actions = {
	types: {
		SELECT_ITEM: "select-item",
	}
};

actions.selectItem = function(item) {
	dispatcher.dispatch({
		type: actions.types.SELECT_ITEM,
		item: item
	});
};

module.exports = actions;
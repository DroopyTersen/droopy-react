var actionUtils = require("./utils/actionUtils");
var createAction = actionUtils.createAction;

var actions = {
	api: {
		loadItems: createAction("load-items"),
		itemsLoaded: createAction("items-loaded"),
		ajaxFailed: createAction("ajax-failed")
	},
	ui: {
		selectItem: createAction("select-item")
	}
};

module.exports = actions;
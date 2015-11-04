var dispatcher = require("../dispatcher.js");

// Define action type keys
var actions = {
	types: {
		LOAD_ITEMS: "load-items",
		ITEMS_LOADED: "items-loaded",
		AJAX_FAILED: "ajax-failed"
	}
};

actions.loadItems = function() {
	dispatcher.dispatch({
		type: actions.types.LOAD_ITEMS,
	});
};

actions.itemsLoaded = function(items) {
	console.log("HERE 3");
	dispatcher.dispatch({
		type: actions.types.ITEMS_LOADED,
		items: items
	});
};

actions.ajaxFailed = function(xhr, textStatus, error) {
	var details = "";
	if (xhr.responseText && xhr.responseJSON.error) {
		details = JSON.stringify(xhr.responseJSON.error);
	}
	dispatcher.dispatch({
		type: actions.types.AJAX_FAILED,
		error: error,
		code: xhr.status,
		details: details
	});
};

module.exports = actions;
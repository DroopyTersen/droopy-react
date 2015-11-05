var dispatcher = require("./dispatcher");

var createAction = (type) => {
    var actionFunc = function(...payload) { 
        console.log(type);
        dispatcher.dispatch({type, payload}); 
    }
    actionFunc.type = type;
    return actionFunc;
}

module.exports = {
    createAction: createAction
};
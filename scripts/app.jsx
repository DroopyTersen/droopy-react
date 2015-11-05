require("../styles/app.css");

var React = require("react");
var ItemListWithStore = require("./containers/connectedItemList");

var App = React.createClass({
	render: function() {
		return (
			<div className='list-container'>
				<ItemListWithStore />
			</div>
		)
	}
});

var ReactDOM = require("react-dom");
ReactDOM.render(<App />, document.getElementById("app"));
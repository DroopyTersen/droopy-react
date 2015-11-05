require("../styles/app.css");

var React = require("react");
var ItemListWithStore = require("./components/itemListStorified");

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
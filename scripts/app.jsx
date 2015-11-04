require("../styles/app.css");

var React = require("react");
var ItemList = require("./components/itemList.jsx");
var itemStore = require("./stores/itemStore");

var App = React.createClass({
	getStateFromStore: function() {
		return {
			items: itemStore.getItems()
		}
	},
	setStateFromStore: function() {
		this.setState(this.getStateFromStore());
	},
	componentDidMount: function() {
		itemStore.subscribe(this.setStateFromStore);
	},
	componentWillUnmount: function() {
		itemStore.unsubscribe(this.setStateFromStore);
	},
	getInitialState: function() {
		return this.getStateFromStore();
	},
	render: function() {
		return (
			<div className='list-container'>
				<ItemList items={this.state.items} />
			</div>
		)
	}
});

var ReactDOM = require("react-dom");
ReactDOM.render(<App />, document.getElementById("app"));
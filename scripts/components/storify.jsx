var React = require("react");

var storify = function(Component, stores, getStateFromStores) {
	console.log(stores);
	var StoreConnectedComponent = React.createClass({
		getInitialState: function() {
			return getStateFromStores(this.props);
		},
		componentDidMount: function() {
			stores.forEach(store => store.subscribe(this.handleStoreChange) );
		}, 
		componentWillUnmount: function() {
			stores.forEach(store => store.unsubscribe(this.handleStoreChange) );
		},
		handleStoreChange: function() {
			this.setState(getStateFromStores(this.props));
		},
		render: function() {
			return <Component {...this.props} {...this.state} />
		}
	});
	
	return StoreConnectedComponent;
};

module.exports = storify;
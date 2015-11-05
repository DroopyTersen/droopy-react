var React = require("react");
var actions = require("../actions");

var Item = React.createClass({
	handleClick: function(e) {
		e.preventDefault();
		actions.ui.selectItem(this.props.item);
	},
	render: function() {
		return (
			<li>
				<a href='#' onClick={this.handleClick}>
					<h3>{this.props.item.title}</h3>
				</a>
			</li>
		) 
	}
});

module.exports = Item;
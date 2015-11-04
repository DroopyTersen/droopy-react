var React = require("react");
var Item = require("./item.jsx");

var ItemList = React.createClass({
	render: function() {
		var itemElements = this.props.items.map(function(item) {
			return <Item item={item} />
		});
		return (
			<ul className='items'>
				{itemElements}
			</ul>
		);
	}
});

module.exports = ItemList;
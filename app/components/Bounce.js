var React = require('react');

var Bounce = React.createClass({
	render: function() {				
		return (
			<h1>{this.props.bounce}</h1>
		);
	}
});

module.exports = Bounce;
var React = require('react');

var Input = React.createClass({
	render: function() {
		return (
			<input name={this.props.name} onChange={this.props.onChange} placeholder={this.props.time} />
		);
	}
});

module.exports = Input;
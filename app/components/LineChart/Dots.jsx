var React = require('react');
var d3 = require('d3');

var Dots = React.createClass({
	propTypes: {
		data: React.PropTypes.array,
		x: React.PropTypes.func,
		y: React.PropTypes.func
	},
	onMouseOver: function(e) {
		e.target.style.r = 12;
		this.props.showToolTip(e);
	},
	onMouseLeave: function(e) {
		e.target.style.r = 7;
		this.props.hideToolTip(e);
	},
	render: function() {
		var _self = this;

		// remove last & first point
		var dataIn = this.props.data;
		var data = $.extend([], dataIn);
		var data = data.splice(1);
		data.pop();

		var circles = data.map(function(d, i) {
			return (
				<circle
					className="dot"
					r="7"
					cx={_self.props.x(d.date)}
					cy={_self.props.y(d.count)}
					fill="#7dc7f4"
					stroke="#3f5175"
					strokeWidth="5px"
					key={i}
					onMouseOver={_self.onMouseOver}
					onMouseLeave={_self.onMouseLeave}
					data-key={d3.timeFormat('%b %e')(d.date)}
					data-value={d.count}
				>

				</circle>
			);
		})
		return (
			<g className="dots-group">
				{circles}
			</g>
		);
	}
});

module.exports = Dots;

var React = require('react');
var d3 = require('d3');

var DonutChartLegend = React.createClass({
	propTypes: {
		width: React.PropTypes.number,
		height: React.PropTypes.number,
		data: React.PropTypes.array,
		pie: React.PropTypes.func,
		color: React.PropTypes.func
	},
	createChart: function(_self) {
		var texts = (this.props.pie(this.props.data)).map(function(d, i) {
			var transform = `translate(10, ${i*30})`;
			var rectStyle = {
				fill: _self.props.color(i),
				stroke: _self.props.color(i)
			};
			var textStyle = {
				fill: _self.props.color(i)
			};
			return (
				<g transform={transform} key={i}>
					<rect
						width="20"
						height="20"
						style={rectStyle}
						rx="2"
						rx="2"
					/>
					<text
						x="30"
						y="15"
						className="browser-legend"
						style={textStyle}>
						{d.data.name}
					</text>
				</g>
			);
		});
		return texts;
	},
	render: function() {
		var style = {
			visibility: 'visible'
		};

		if(this.props.width < this.props.height + 70) {
			style.visibility = 'hidden';
		}
		var texts = this.createChart(this)
		var transform = `translate(${this.props.width/2 + 80}, 55)`
		return (
			<g is transform={transform} style={style}>
				{texts}
			</g>
		);
	}
});

module.exports = DonutChartLegend;

var React = require('react');
var d3 = require('d3');

var DonutChartPath = React.createClass({
	propTypes: {
		width: React.PropTypes.number,
		height: React.PropTypes.number,
		data: React.PropTypes.array,
		pie: React.PropTypes.func,
		color: React.PropTypes.func
	},
	componentWillMount: function() {
		var radius = this.props.height;
		var outerRadius = radius/2;
		var innerRadius = radius/3.3;
		this.arc = d3.arc()
			.outerRadius(outerRadius)
			.innerRadius(innerRadius);
		this.transform = `translate( ${radius/2}, ${radius/2} )`;
	},
	createChart:function(_self){
		var paths = (this.props.pie(this.props.data)).map(function(d, i) {
				return (
					<path fill={_self.props.color(i)} d={_self.arc(d)} key={i}/>
				)
			});
		return paths;
	},
	render: function() {
		var paths = this.createChart(this);
		return (
			<g transform={this.transform}>
				{paths}
			</g>
		);
	}
});

module.exports = DonutChartPath;

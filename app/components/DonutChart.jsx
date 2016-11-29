var React = require('react');
var d3 = require('d3');
var DonutChartPath = require('DonutChartPath');
var DonutChartLegend = require('DonutChartLegend');

// LineChart styles
require('style!css!sass!DonutChartStyles');

var DonutChart = React.createClass({
	propTypes: {
		width: React.PropTypes.number,
		height: React.PropTypes.number,
		padAngle: React.PropTypes.number,
		id: React.PropTypes.string.isRequired
	},
	getDefaultProps: function() {
		return {
			width: 450,
			height: 250,
			padAngle: 0
		};
	},
	getinitialState: function() {
		return {
			data: [],
			width: 0
		};
	},
	componentWillMount: function() {
		this.pie = d3.pie()
			.value(function(d) { return d.count; })
			.padAngle(this.props.padAngle)
			.sort(null);
		this.color = d3.scaleOrdinal()
			.range(['#68c8d7','#eccd63','#bb8cdd','#de6942','#52b36e','#bbc7d9']);

		var data = [
			{ name: 'IE', count: 4 },
			{ name: 'Chrome', count: 84 },
			{ name: 'Safari', count: 14 },
			{ name: 'Firefox', count: 9 },
			{ name: 'Opera', count: 3 },
			{ name: 'Others', count: 6 }
		];

		this.setState({
			data: data,
			width: this.props.width
		});
	},
	updateData:function(){
		var data = [
			{ name: 'IE', count: Math.random() },
			{ name: 'Chrome', count: Math.random() },
			{ name: 'Safari', count: Math.random() },
			{ name: 'Firefox', count: Math.random() },
			{ name: 'Opera', count: Math.random() },
			{ name: 'Others', count: Math.random() }
		];
		this.setState({'data':data });
	},
	render: function() {
		return (
			<div>
				<svg
					id={this.props.id}
					width={this.state.width}
					height={this.props.height}
					className="shadow"
					onClick={this.updateData}
				>
						<DonutChartPath
							width={this.state.width}
							height={this.props.height}
							pie={this.pie}
							color={this.color}
							data={this.state.data}
						/>
						<DonutChartLegend
							pie={this.pie}
							color={this.color}
							data={this.state.data}
							width={this.state.width}
							height={this.props.height}
						/>
				</svg>
			</div>
		);
	}
});

module.exports = DonutChart;

var React = require('react');
var d3 = require('d3');
var Dots = require('Dots');
var AxisAndGrid = require('AxisAndGrid');

console.log(`d3. version ${d3.version}`);
// LineChart styles
require('style!css!sass!LineChartStyles');

var LineChart = React.createClass({
	propTypes: {
		width: React.PropTypes.number,
		height: React.PropTypes.number,
		chartId: React.PropTypes.string,
	},
	getDefaultProps: function() {
		return {
			width: 800,
			height: 300,
			chartId: 'v1_chart'
		};
	},
	getInitialState: function() {
		return {
			width: this.props.width,
			height: this.props.height
		};
	},
	render: function() {
		var data = [
			{day: '02-11-2016', count: 180},
			{day: '02-12-2016', count: 250},
			{day: '02-13-2016', count: 150},
			{day: '02-14-2016', count: 496},
			{day: '02-15-2016', count: 140},
			{day: '02-16-2016', count: 380},
			{day: '02-17-2016', count: 100},
			{day: '02-18-2016', count: 150}
		];

		var margin = {top: 5, right: 50, bottom: 50, left: 50};
		var w = this.state.width - (margin.left + margin.right);
		var h = this.props.height - (margin.top + margin.bottom);

		var parseDate = d3.timeParse('%m-%d-%Y');

		data.forEach(function(d) {
			d.date = parseDate(d.day);
		});

		// d3.extent = compute the minimum and maximum value in an array.
		var x = d3.scaleTime()
			.domain(d3.extent(data, function(d) {
				return d.date;
			}))
			.rangeRound([0, w]);
		var y = d3.scaleLinear()
			.domain([0, d3.max(data, function(d) {
				return d.count + 100;
			})])
			.range([h, 0]);

		var line = d3.line()
			.x(function(d) {
				return x(d.date);
			})
			.y(function(d) {
				return y(d.count)
			})
			.curve(d3.curveCatmullRom.alpha(0.5));

		var transform = `translate(${margin.left}, ${margin.top})`;

		return(
			<div>
				<h6>Line Chart</h6>
				<svg
					id={this.props.chartId}
					width={this.state.width}
					height={this.state.height}
				>
					<g transform={transform}>
						<AxisAndGrid
							data={data}
							x={x}
							y={y}
							w={w}
							h={h}
						/>
						<path className="line" d={line(data)} strokeLinecap="round"></path>
						<Dots data={data} x={x} y={y} />
					</g>

				</svg>

			</div>
		);
	}
});

module.exports = LineChart;

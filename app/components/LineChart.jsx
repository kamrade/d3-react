var React = require('react');
var ReactDOM = require('react-dom');
var d3 = require('d3');
var Dots = require('Dots');
var Tooltip = require('Tooltip');
var AxisAndGrid = require('AxisAndGrid');

console.log(`d3. version ${d3.version}`);
// LineChart styles
require('style!css!sass!LineChartStyles');

var LineChart = React.createClass({
	propTypes: {
		data: React.PropTypes.array,
		width: React.PropTypes.number,
		height: React.PropTypes.number,
		chartId: React.PropTypes.string
	},
	componentWillMount: function() {
		var _self = this;
		$(window).on('resize', function(e) {
			_self.updateSize();
		});
		this.setState({
			width: this.props.width
		});
	},
	componentDidMount: function() {
		this.updateSize();
	},
	componentWillUnmount: function() {
		$(window).off('resize');
	},
	updateSize: function() {
		var node = ReactDOM.findDOMNode(this);
		var parentWidth = $(node).width();

		if(parentWidth< this.props.width) {
			this.setState({
				width: parentWidth - 20
			});
		} else {
			this.setState({
				width: this.props.width
			});
		}
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
			width:  this.props.width,
			height: this.props.height,
			data:   this.props.data,
			margin: this.props.margin,
			tooltip: {
				display: false,
				data: {
					key: '',
					value: ''
				},
			}
		};
	},
	showToolTip: function(e) {
		e.target.setAttribute('fill', '#fff');
		this.setState({
			tooltip: {
				display: true,
				data: {
					key: e.target.getAttribute('data-key'),
					value: e.target.getAttribute('data-value')
				},
				pos: {
					x: e.target.getAttribute('cx'),
					y: e.target.getAttribute('cy')
				}
			}
		});
	},
	hideToolTip: function(e) {
		e.target.setAttribute('fill', '#7dc7f4');
		this.setState({
			tooltip: {
				display: false,
				data: {
					key: '',
					value: ''
				}
			}
		});
	},
	render: function() {

		var data = this.state.data;
		var margin = this.state.margin;
		var w = this.state.width - (margin.left + margin.right);
		var h = this.props.height - (margin.top + margin.bottom);
		var title = this.props.title;

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
				<h6 className="chart-title">{title}</h6>
				<svg
					id={this.props.chartId}
					width={this.state.width}
					height={this.state.height}
				>
					<g className="chart-group" transform={transform}>

						<AxisAndGrid
							data={data}
							x={x}
							y={y}
							w={w}
							h={h}
						/>
						<g className="line-group">
							<path
								className="line"
								d={line(data)}
								strokeLinecap="round"
							></path>
						</g>
						<Dots
							data={data}
							x={x}
							y={y}
							showToolTip={this.showToolTip}
							hideToolTip={this.hideToolTip}
						/>
						<Tooltip
							tooltip={this.state.tooltip}
						/>
					</g>
				</svg>
			</div>
		);
	}
});

module.exports = LineChart;

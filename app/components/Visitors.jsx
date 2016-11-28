var React = require('react');
var LineChart = require('LineChart');

var data = [
	{day: '02-11-2016', count: 180},
	{day: '02-12-2016', count: 250},
	{day: '02-13-2016', count: 150},
	{day: '02-14-2016', count: 496},
	{day: '02-15-2016', count: 140},
	{day: '02-16-2016', count: 380},
	{day: '02-17-2016', count: 100},
	{day: '02-18-2016', count: 150},
	{day: '02-19-2016', count: 180},
	{day: '02-20-2016', count: 105},
	{day: '02-21-2016', count: 100},
	{day: '02-22-2016', count: 496},
	{day: '02-23-2016', count: 140},
	{day: '02-24-2016', count: 32}
];

var data1 = [
	{day: '02-11-2016', count: 210},
	{day: '02-12-2016', count: 20},
	{day: '02-13-2016', count: 350},
	{day: '02-14-2016', count: 887},
	{day: '02-15-2016', count: 453},
	{day: '02-16-2016', count: 12},
	{day: '02-17-2016', count: 10},
	{day: '02-18-2016', count: 250}
];

var margin = {
	top: 5,
	right: 50,
	bottom: 50,
	left: 50
};

var width = 1600;
var height = 400;

var Visitors = React.createClass({
	render: function() {
		return(
			<div className="visitors container">
				<h3>Visitors to site</h3>
				<div className="line-chart row">
					<div className="col-lg-6 line-chart-in">
						<div className="graph">
							<LineChart
								data={data}
								margin={margin}
								width={width}
								height={height}
								title="Title 1"
							/>
						</div>
					</div>
					<div className="col-lg-6 line-chart-in">
						<div className="graph">
							<LineChart
								data={data1}
								margin={margin}
								width={width}
								height={height}
								title="Title 2"
							/>
						</div>
					</div>
				</div>
			</div>
		);
	}
});

module.exports = Visitors;

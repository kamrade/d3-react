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
	{day: '02-18-2016', count: 150}
];

var margin = {
	top: 5,
	right: 50,
	bottom: 50,
	left: 50
};

var width = 800;
var height = 300;

var Visitors = React.createClass({
	render: function() {
		return(
			<div className="visitors">
				<h3>Visitors to site</h3>
				<div className="visitors-svg">
					<div className="line-chart">
						<LineChart
							data={data}
							margin={margin}
							width={width}
							height={height}
						/>
					</div>
				</div>
			</div>
		);
	}
});

module.exports = Visitors;

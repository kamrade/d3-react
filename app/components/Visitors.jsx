var React = require('react');
var LineChart = require('LineChart');

var Visitors = React.createClass({
	render: function() {
		return(
			<div className="visitors">
				<h3>Visitors to site</h3>
				<div className="visitors-svg">
					<div className="line-chart">
						<LineChart/>
					</div>
				</div>
			</div>
		);
	}
});

module.exports = Visitors;

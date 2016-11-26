var React = require('react');
var Link  = require('react-router').Link;
var IndexLink = require('react-router').IndexLink;

var Nav = React.createClass({
	render: function() {
		return (
			<div className="navbar container">
				<ul className="nav navbar-nav clearfix">
					<li>
						<IndexLink to='/'>Home</IndexLink>
					</li>
					<li>
						<Link to="/about">About</Link>
					</li>
				</ul>
			</div>
		);
	}
});

module.exports = Nav;

var React = require('react');
var Nav   = require('Nav');

var Main = (props) => {
	return (
		<div className="container-fluid">
					<Nav />
					<h1 className="message-text">React vs D3 Trainings</h1>
					{props.children}
		</div>
	);
};

module.exports = Main;

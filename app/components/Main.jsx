var React = require('react');
var Nav   = require('Nav');
var Footer   = require('Footer');

var Main = (props) => {
	return (
		<div>
					<Nav />
					<div className="container">
						<h1 className="message-text">React vs D3 Trainings</h1>
					</div>
					{props.children}
					<Footer />
		</div>
	);
};

module.exports = Main;

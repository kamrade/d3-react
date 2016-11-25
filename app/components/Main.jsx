var React = require('react');

var Main = (props) => {
	return (
		<div>
			<div>
				<div>
					<h1 className="message-text">React vs D3 Trainings</h1>
					<h3>It can be filter here</h3>
					{props.children}
				</div>
			</div>
		</div>
	);
};

module.exports = Main;

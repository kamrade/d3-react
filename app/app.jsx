var React = require('react');
var ReactDOM = require('react-dom');
// var Route = require('react-router').Route;
var { Router, Route, IndexRoute, Link, Navigation, browserHistory, hashHistory } = require('react-router');
var Main = require('Main');
var Visitors = require('Visitors');
var About = require('About');

// Load foundation
// require('style!css!foundation-sites/dist/foundation.min.css');
// $(document).foundation();

// App css
require('style!css!sass!applicationStyles');
// normalize css
require('style!css!normalizeCss');

ReactDOM.render(
	<Router history={hashHistory}>
		<Route path='/' component={Main}>
			<IndexRoute component={Visitors} />
			<Route path="about" component={About} />
		</Route>
	</Router>,
	document.getElementById('app')
);

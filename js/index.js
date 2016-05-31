'use strict';

import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, Link, IndexRoute, Redirect, browserHistory, hashHistory } from 'react-router';

import App from './component/App';
import Dashboard from './component/Dashboard';
import About from './component/About';
import Inbox from './component/Inbox';
import Message from './component/Message';

ReactDOM.render((
	<Router history={hashHistory}>
		<Route path="/" component={App} onEnter={App.onEnter} onLeave={App.onLeave}>
			<IndexRoute component={Dashboard} onEnter={Dashboard.onEnter} onLeave={Dashboard.onLeave} />
			<Route path="about" component={About} onEnter={About.onEnter} onLeave={About.onLeave} />
			<Route path="inbox" component={Inbox} onEnter={Inbox.onEnter} onLeave={Inbox.onLeave}>
				<Route path="/messages/:id" component={Message} onEnter={Message.onEnter} onLeave={Message.onLeave} />
				<Redirect from="messages/:id" to="/messages/:id" />
			</Route>
		</Route>
	</Router>
), document.getElementById('container'));
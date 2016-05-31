'use strict';

import React, { Component } from 'react';
import { Link } from 'react-router';

class App extends Component {
    render() {
        return (
            <div>
                <h1>App</h1>
                <ul>
                    <li><Link to="/about">About</Link></li>
                    <li><Link to="/inbox">Inbox</Link></li>
                </ul>
                {this.props.children}
            </div>
        );
    }
}

App.onEnter = function(){
    console.log('App_onEnter');
};

App.onLeave = function(){
    console.log('App_onLeave');
};

export default App;
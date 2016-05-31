'use strict';

import React, { Component } from 'react';
import { Link } from 'react-router';

class Dashboard extends Component {
    render() {
        return <div>Welcome to the app!</div>
    }
}

Dashboard.onEnter = function(){
    console.log('Dashboard_onEnter');
};

Dashboard.onLeave = function(){
    console.log('Dashboard_onLeave');
};

export default Dashboard;
'use strict';

import React, { Component } from 'react';
import { Link } from 'react-router';

class Inbox extends Component {
    render() {
        return (
            <div>
                <h2>Inbox</h2>
                {this.props.children || "Welcome to your Inbox"}
            </div>
        )
    }
}

Inbox.onEnter = function(){
    console.log('Inbox_onEnter');
};

Inbox.onLeave = function(){
    console.log('Inbox_onLeave');
};

export default Inbox;
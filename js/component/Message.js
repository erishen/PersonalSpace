'use strict';

import React, { Component } from 'react';
import { Link } from 'react-router';

class Message extends Component {
    render() {
        return <h3>Message {this.props.params.id}</h3>
    }
}

Message.onEnter = function(){
    console.log('Message_onEnter');
};

Message.onLeave = function(){
    console.log('Message_onLeave');
};

export default Message;
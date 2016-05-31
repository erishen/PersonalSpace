'use strict';

import React, { Component } from 'react';
import { Link } from 'react-router';

class About extends Component {

    render(){
        return (
            <h3>About</h3>
        );
    }
}

About.onEnter = function(){
    console.log('About_onEnter');
};

About.onLeave = function(){
    console.log('About_onLeave');
};

export default About;
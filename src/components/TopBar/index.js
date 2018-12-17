import React, { Component } from 'react';
import { Link as Links } from 'react-router-dom';

import { Navbar, Link, Paragraph } from './style.js';

class TopBar extends Component {
    render() {
        return (
            <Navbar>
                <Links to="/home">  <Link>Home</Link> </Links>
                <Links to="/contact">  <Link>Contact</Link> </Links>
                <Links to="/about">  <Link>About me</Link> </Links>
                <Paragraph>Ajay</Paragraph>
            </Navbar>
        );
    }
}


export default TopBar;

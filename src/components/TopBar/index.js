import React, { Component } from 'react';
import { Navbar, Link, Paragraph } from './style.js';

class TopBar extends Component {
    render() {
        return (
            <Navbar>
                <Link href="#home">Home</Link>
                <Link href="#news">News</Link>
                <Link href="#contact">Contact</Link>
                <Paragraph>Ajay</Paragraph>
            </Navbar>
        );
    }
}


export default TopBar;
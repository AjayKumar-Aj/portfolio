import React, { Component } from 'react';
import { Link as Links } from 'react-router-dom';

import { Navbar, Link, Paragraph } from './style.js';

class TopBar extends Component {
    render() {
        return (
            <div>    
                <Navbar >
                    <Links to="/contact">  <Link>Contact</Link></Links>
                    <Links to="/about">  <Link>About me</Link></Links>
                    <Links to="/home">  <Link>Home</Link> </Links>       
                </Navbar>
                
                <Paragraph>Ajay</Paragraph> 
            </div>

            
        );
    }
}


export default TopBar;

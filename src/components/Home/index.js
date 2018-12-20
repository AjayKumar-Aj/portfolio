import React, { Component } from 'react';
import { Heading, Image, Text } from './style.js';

class Home extends Component {
    render() {
        return (
            <div>    
                <Heading><h1>This is My Porfolio</h1></Heading>
            <div width="100%">
                <div width="200px">
                    <Image>
                        <img src={require('./Ajay.jpg')} height="400" width="450"/>
                    </Image>
                </div>
                <div width="600px">
                    <Text>
                        <h1>Technical Skills</h1>
                        <ul>
                            <li>Programing Languages      : PHP</li>
                            <li>Database 				  : My SQL</li>
                            <li>Operating system		  : Windows</li>
                            <li>Web designing   		  :  Html 5, CSS 3</li>
                            <li>Client Side Scripting     :  Java script, JQuery</li>
                            <li>Responsive                :  Bootstrap</li>
                            <li>Content Management System :  Sitecore, Wordpress</li>
                            <li>Framework                 :  Codeigniter</li>
                            
                        </ul>
                    </Text>
                </div>
            </div>     
            </div>

            
        );
    }
}


export default Home;

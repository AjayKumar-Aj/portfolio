import React, { Component } from 'react';
import { Text1, Text, Heading } from './style.js';

class About extends Component {
    render() {
        return (
            <div>
                <Heading><h1>Personal Details</h1></Heading>
                    <div width="100%">
                        <div width="400px">
                            <Text1>
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
                            </Text1>
                        </div>

                        <div width="400px">
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


export default About;

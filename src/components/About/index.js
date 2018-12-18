import React, { Component } from 'react';
import { Leftimg, Text } from './style.js';

class About extends Component {
    render() {
        return (
            <div display="inline-block" width="100%">
                <div width="300px" float="left" height="500px" >
                    <Leftimg>
                    <img src={require('./Insta.png')} height="200" width="200"/>
                    </Leftimg>
                </div>
                <div width="300px" float="right" height="500px">
                    <Text>Ajay</Text>
                </div>
            </div>
        );
    }
}


export default About;

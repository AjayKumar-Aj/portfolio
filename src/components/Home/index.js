import React, { Component } from 'react';
import { Heading, Image, Text } from './style.js';
import ReactDOM from 'react-dom';


class Home extends Component {

   /* constructor(props) {
        super(props);
        this.state = { name: '' };
        console.log('constructor', this.state.name);
    }

    componentWillMount() {
        this.setState(
            { name: 'componentWillMount'});
        console.log('componentWillMount', this.state.name);

    }

    componentDidMount() {
        this.setState({ name: 'componentDidMount'});
        console.log('componentDidMount', this.state.name);
    }

    shouldComponentUpdate() {
        console.log('shouldComponentUpdate');
        if ( this.state.name == 'Ajay') {
            return false;
        } else {
            return true;
        }
    }

    componentWillUpdate() {
        this.setState({ name: 'Ajay'});
        console.log('componentWillUpdate', this.state.name);
    }


    componentWillUnmount() {
        console.log('componentUnMount', this.state.name);
    }

    click(value) {

        console.log('handleclick', value);
        this.setState({name: 'Ajay'})
    }

    */

    render() {
        const text = "This is my portfolio"; 
        return (
            <div>    
                <Heading text={this.props.text} />

                
                <div width="100%">
                    <div width="200px">
                        <Image>
                            <img /* onClick={ () => this.click('test')} */ src={require('./Ajay.jpg')} height="400" width="450"/>
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


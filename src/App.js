import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
      <div className="Header"> 
      <div className="First-text">Ajay</div> 
      <div className="Second-text">Topic</div>
      <div className="Third-text">Browser Version</div>
      <div className="Fourth-text">Unsubscribe</div>
      </div>
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            hello world
          </p>
          <div> test</div>
        </header>
      </div>
    );
  }
}

export default App;

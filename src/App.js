import React, { Component } from 'react';
import {Route, BrowserRouter as Router } from 'react-router-dom';
import TopBar from './components/TopBar';
import Body from './components/Body';
import About from './components/About';
import Home from './components/Home';
// import { Bar } from './style.js';
// import logo from './logo.svg';
import './App.css';

export const Routing = (
  <Router>
    <div>
      <Route path="/" component={TopBar} />
      <Route path="/contact" component={Body} />
      <Route path="/about" component={About} />
      <Route path="/home" component={Home} />
    </div>
  </Router>
)

class App extends Component {
  render() {
    return (
      <div>
        <TopBar />
        <Body />
      </div>
    );
  }
}

export default App;
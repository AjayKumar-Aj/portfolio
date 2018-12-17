import React, { Component } from 'react';
import {Switch, Link, Route, BrowserRouter as Router } from 'react-router-dom';
import TopBar from './components/TopBar';
import Body from './components/Body';
import { Bar } from './style.js';
import logo from './logo.svg';
import './App.css';


const Routing = (
  <Router>
    <Switch>
      <Route path="/body" component={Body} />
      <Route path="/topBar" component={TopBar} />
    </Switch>
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

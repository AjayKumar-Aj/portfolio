import React, { Component } from 'react';
import {Switch, Link, Route, BrowserRouter as Router } from 'react-router-dom';

export const Routing = (
    <Router>
      <Switch>
        <Route path="/body" component={Body} />
        <Route path="/topBar" component={TopBar} />
      </Switch>
    </Router>
  )
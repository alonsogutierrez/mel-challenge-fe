import React from 'react';
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom';

import Header from './layout/Header';
import HomePage from './component/home';

import './App.css';

const Routes = () => {
  return (
    <>
      <Router>
        <Header />
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route exact path='/items' component={HomePage} />
          <Route exact path='/items/:id' component={HomePage} />
        </Switch>
      </Router>
    </>
  );
};

export default Routes;

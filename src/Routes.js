import React from 'react';
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom';

import Header from './layout/Header';
import HomePage from './component/pages/home';
import ProdutListPage from './component/pages/product-list';
import ProductDetailPage from './component/pages/product-detail';

import './App.css';

const Routes = () => {
  return (
    <>
      <Router>
        <Header />
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route exact path='/items' component={ProdutListPage} />
          <Route exact path='/items/:id' component={ProductDetailPage} />
        </Switch>
      </Router>
    </>
  );
};

export default Routes;

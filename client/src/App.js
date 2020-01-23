import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css'

import { Switch, Route } from 'react-router-dom';

import Landing from './pages/landing/landing';
import NavbarCustom from './components/navbar/navbar';
import HoodiesPage from './pages/hoodies/hoodies'
import HatsPage from './pages/hats/hats'
import BeaniesPage from './pages/beanies/beanies';
import ShirtsPage from './pages/shirts/shirts'

function App() {
  return (
    <React.Fragment>
      <div className='top-nav'>
        <div className='item-wrapper'>
          <div className='top-nav-item'></div>
          <div className='top-nav-item'></div>
          <div className='top-nav-item'></div>
          <div className='top-nav-item'></div>
        </div>
      </div>
      <NavbarCustom />

      <Switch>
        <Route exact path='/' component={Landing} />
        <Route path='/shirts' component={ShirtsPage} />
        <Route path='/hoodies' component={HoodiesPage} />
        <Route path='/beanies' component={BeaniesPage} />
        <Route path='/hats' component={HatsPage} />
      </Switch>
      
    </React.Fragment>
    
  );
}

export default App;

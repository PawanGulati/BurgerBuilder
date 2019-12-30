import React from 'react';
import './App.css';

import Layout from './hoc/Layouts/layout'
import BurgerBuilder from './containers/BurgerBuilder/burgerBuilder.components'
import Checkout from './containers/Checkout/Checkout';
import Orders from './containers/OrderPage/orders'

import {Route,Switch} from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <Layout>
        <Switch>
          <Route path='/checkout' component={Checkout}/>
          <Route path='/orders' component={Orders}/>   
          <Route path='/' component={BurgerBuilder}/>     
        </Switch>
      </Layout>
    </div>
  );
}

export default App;

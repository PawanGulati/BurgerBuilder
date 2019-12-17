import React from 'react';
import './App.css';

import Layout from './components/Layouts/layout'
import BurgerBuilder from './containers/BurgerBuilder/burgerBuilder.components'

function App() {
  return (
    <div className="App">
      <Layout>
        <BurgerBuilder/>  
      </Layout>
    </div>
  );
}

export default App;

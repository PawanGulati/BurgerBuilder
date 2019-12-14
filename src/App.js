import React from 'react';
import './App.css';

import Layout from './components/Layouts/layout'
import BurgerBuilder from './components/BurgerBuilder/burgerBuilder.components'

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

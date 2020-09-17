import React from 'react';
import './App.css';

// Pages:

import HomePage from "./pages/homepage/homepage.component"
import ShopPage from  "./pages/shop/shop.component"

// Header

import Header from './components/header/header.component'

// Route:

import {Switch,Route} from 'react-router-dom'







function App() {
  return (
    <div>
      <Header />   {/* We put Header so it is always rendered no matter the page */}

      <Switch>
        <Route exact path= '/' component= {HomePage} />
        <Route path ='/shop' component ={ShopPage} />
      </Switch>
        
        {/* <HomePage /> */}
    </div>
  );
}

export default App;

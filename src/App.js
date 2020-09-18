import React, { Component } from 'react';
import './App.css';

// Pages:

import HomePage from "./pages/homepage/homepage.component";
import ShopPage from  "./pages/shop/shop.component";
import SignInAndSignUpPage  from "./pages/sign-in-and-sign-up/sign-in-and-sign-up.component"

// Header

import Header from './components/header/header.component'

// firebase stuff

import {auth} from './firebase/firebase.utils'

// Route:

import {Switch,Route} from 'react-router-dom'



class App extends Component  {

  // Adding State for auth users: We add it here to make sure every other component get's it
 
  constructor(){
    super();

    this.state= {
      currentUser: null
    }
  }

  // Fore closing Subscription
  unsubscribeFromAuth = null;

  componentDidMount() {   // Know when user sign-Ins or Sign-out[user state]:
    this.unsubscribeFromAuth =auth.onAuthStateChanged(user => { // opened Subscription
      this.setState({currentUser: user})
      console.log(user)
    })
  }

  componentWillUnmount(){   // Closes Subscription
    this.unsubscribeFromAuth();
  }
 
 
  render(){
    return (
      <div>
        <Header />   {/* We put Header so it is always rendered no matter the page */}
  
        <Switch>
          <Route exact path= '/' component= {HomePage} />
          <Route path ='/shop' component ={ShopPage} />
          <Route path ='/signin' component ={SignInAndSignUpPage} />
  
        </Switch>
          
          {/* <HomePage /> */}
      </div>
    );
  }
  
}

export default App;

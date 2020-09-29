import React, { Component } from 'react';
import './App.css';

// Pages:

import HomePage from "./pages/homepage/homepage.component";
import ShopPage from  "./pages/shop/shop.component";
import SignInAndSignUpPage  from "./pages/sign-in-and-sign-up/sign-in-and-sign-up.component"
import CheckoutPage from './pages/checkout/checkout.component'

// reselect:

import {selectCurrentUser} from './redux/user/user.selectors'

import {createStructuredSelector} from 'reselect'
// Header

import Header from './components/header/header.component'

// firebase stuff

import {auth, createUserProfileDocument} from './firebase/firebase.utils'

// Route:

import {Switch,Route, Redirect} from 'react-router-dom'

// Redux

import {connect} from 'react-redux';
import { setCurrentUser } from './redux/user/user.actions';






class App extends Component  {

  // Adding State for auth users: We add it here to make sure every other component get's it
 

  // For closing Subscription
  unsubscribeFromAuth = null;

  componentDidMount() {   // Know when user sign-Ins or Sign-out[user state]:

    const {setCurrentUser} =this.props;

    this.unsubscribeFromAuth =auth.onAuthStateChanged(async userAuth => { // opened Subscription
      
      // Storing data in our App state:

      if(userAuth){   // If user exists(Signs in): Get userRef;
        const userRef = await createUserProfileDocument(userAuth);
      
        userRef.onSnapshot(snapShot =>{ // Storing snapShot data in our state
          setCurrentUser({  // from this.setState to this
              id: snapShot.id,
              ...snapShot.data()    //  Get data of the user such as email, name etcc           
          })
        });
      
      }
      else{  // Set State to null when user logsOut, bascially userAuth will be Null if the user had logged out so that is why we set it to userAuth value
        setCurrentUser(userAuth)
      }
      // createUserProfileDocument(user);
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
          <Route exact path ='/checkout' component ={CheckoutPage} />

          <Route exact path ='/signin' render ={ ()=>this.props.currentUser ? (<Redirect to = '/' />) : (<SignInAndSignUpPage />) }  />

        </Switch>
          
          {/* <HomePage /> */}
      </div>
    );
  }
  
}


// Updating the state


const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser
})

const mapDispatchToProps = dispatch =>({
  setCurrentUser: user => dispatch(setCurrentUser(user))
})


export default connect(mapStateToProps, mapDispatchToProps)(App);
 
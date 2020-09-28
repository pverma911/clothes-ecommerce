import React from 'react';
import './header.styles.scss'

import {Link} from "react-router-dom"

// Exclusive code to import .svg files:

import { ReactComponent as Logo } from '../../assets/crown.svg'

// auth Library

import {auth} from '../../firebase/firebase.utils'; 

// React redux

import {connect} from 'react-redux';



const Header = ({ currentUser }) => (
    <div className="header">
        <Link className ='logo-container' to ="/">
            <Logo className ='logo' />
        </Link>

        <div className = 'options'>
            <Link className ='option' to ="/shop">
                SHOP
            </Link>
            
            <Link className ='option' to ="/shop">
                CONTACT
            </Link>

            {
                currentUser ? (
                    <div className = 'option' onClick = {() => auth.signOut()}>
                        SIGN OUT
                    </div> ) :(
                    <Link className ="option" to='/signin'>
                        SIGN IN 
                    </Link>
            )}
        </div>
    </div>

)

// Using Redux state:


const mapStateToProps = state =>({      // Using state as props
    currentUser: state.user.currentUser
})



export default connect(mapStateToProps)(Header);
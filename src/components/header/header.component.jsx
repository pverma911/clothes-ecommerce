import React from 'react';
import './header.styles.scss'
import CartIcon from '../cart-icon/cart-icon.component'
import CartDropdown from '../cart/cart-dropdown.component';

import {Link} from "react-router-dom"

// Exclusive code to import .svg files:

import { ReactComponent as Logo } from '../../assets/crown.svg'

// auth Library

import {auth} from '../../firebase/firebase.utils'; 

// React redux

import {connect} from 'react-redux';



const Header = ({ currentUser, hidden }) => (
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
            <CartIcon />
        </div>

        {
            hidden ? null : <CartDropdown />
        }
    </div>

)

// Using Redux state:


const mapStateToProps = ({user: {currentUser}, cart: {hidden}}) =>({      // Using state as props
    currentUser,
    hidden
})



export default connect(mapStateToProps)(Header);

import React from 'react';

import './checkout.styles.scss';
import CheckoutItem from '../../components/checkout-item/checkout-item.component';
import StripeCheckoutButton from '../../components/stripe-button/stripe-button.component'


// Redux

import {connect} from 'react-redux'

// reselect

import {createStructuredSelector} from 'reselect'

import {selectCartItems, selectCartTotal} from '../../redux/cart/cart.selectors';

const CheckoutPage = ({cartItems, total}) =>(

    <div className = "checkout-page">
        <div className = 'checkout-header'>
            <div className ='header-block'>
                <span>Product</span>
            </div>

            <div className ='header-block'>
                <span>Description</span>
            </div>

            <div className ='header-block'>
                <span>Quantity</span>
            </div>

            <div className ='header-block'>
                <span>Price</span>
            </div>

            <div className ='header-block'>
                <span>Remove</span>
            </div>

        </div>
        {
            cartItems.map(cartItem =>
               <CheckoutItem key ={cartItem.id} cartItem= {cartItem} /> 
            )
        }
        <div className= 'total'>
            <span> TOTAL: ${total} </span>

            <div className ='test-warning'>
                *Test credit card* 4242 4242 4242 4242	Any 3 digits Any future date
                <br />

            </div>
            <StripeCheckoutButton price = {total} />
        </div>
    </div>
)





const mapStateToProps = createStructuredSelector({
    cartItems: selectCartItems,
    total: selectCartTotal
})

export default connect(mapStateToProps)(CheckoutPage);
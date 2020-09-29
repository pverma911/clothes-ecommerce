 
 import React from 'react';
 import StripeCheckout from 'react-stripe-checkout';




 const StripeCheckoutButton = ({price}) =>{
    const priceForStripe = price * 100;     // As price is in cents we * 100 to convert dollars to cents

    const publishableKey = 'pk_test_51HWFCZIkWp3f7RHPomj2H7DsSEOo0O88gyLS6aNDRh2XzBKw5OhHi7qvtVmOwq4TCDSugZkYQ51iTPL6q9FaLA2000PaYDrlyi';
 
    const onToken = token =>{
        alert("Payment successful");
    }


    return (
        <StripeCheckout
            label = 'Pay now'
            name = "King's Clothing co."
            shippingAddress
            billingAddress
            image = "https://sendeyo.com/up/d/f3eb2117da"
            description = {`Your total amout is $${price}`}
            amount ={priceForStripe}
            panelLabel= 'Pay now'
            token = {onToken}  
            // For BackEnd purposes only, but we are not using it now so just pass a random function
            // This method fires off when the payment is successful
            stripeKey = {publishableKey}
        />
    )
}





export default StripeCheckoutButton;

 
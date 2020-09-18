
import React, { Component } from 'react';

import './sign-in.styles.scss';

import FormInput from "../form-input/form-input.component"
import CustomButton from "../custom-button/custom-button.component"

// Firebase Auth:
import {signInWithGoogle} from '../../firebase/firebase.utils'




// We have to store what the user is typing in

class SignIn extends Component{
    constructor(props){
        super();

        this.state = {
            email: '',
            password: ''
        }
    }



    handleSubmit = (event) =>{  // empty values on Submit
        event.preventDefault();

        this.setState({email:'', password:''});
    }

    handleChange = (event) =>{
        const {value, name} = event.target;

        this.setState({ [name]: value})   //[Dynamic] This means if the name is password 
        //then it will store it's value E.G.:
        // this.state={ password:'jammin1234'}
    }

    render(){
        return(
            <div className = 'sign-in'>
                <h2> Already have an account? Sign In </h2>
                <span> Sign In with your Email and Password </span>


                <form onSubmit = {this.handleSubmit}>

                    <FormInput
                        name="email" 
                        type ="email" 
                        value ={this.state.email}
                        handleChange={this.handleChange}
                        label= "email"
                        required />


                    <FormInput
                        name="password" 
                        type = "password" 
                        value ={this.state.password} 
                        label= "password" 
                        handleChange={this.handleChange}
                        required />

                    

                    <CustomButton type="submit" >Sign In</CustomButton>
                    <CustomButton onClick= {signInWithGoogle}>Sign in with Google</CustomButton>

                </form>
            </div>
        )
    }
}



export default SignIn;
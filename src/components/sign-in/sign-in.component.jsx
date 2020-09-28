
import React, { Component } from 'react';

import './sign-in.styles.scss';

import FormInput from "../form-input/form-input.component"
import CustomButton from "../custom-button/custom-button.component"

// Firebase Auth:
import {auth, signInWithGoogle} from '../../firebase/firebase.utils'




// We have to store what the user is typing in

class SignIn extends Component{
    constructor(props){
        super();

        this.state = {
            email: '',
            password: ''
        }
    }



    handleSubmit = async (event) =>{  // empty values on Submit
        event.preventDefault();

        const {email,password} = this.state;

        try{ // Similar method like SignUpWithEmail and ......
            await auth.signInWithEmailAndPassword(email, password);

            this.setState({email:'', password:''});

        } catch(err){
            console.log(err)

        }
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

                    
                    <div className ="buttons">
                        <CustomButton type="submit" >Sign In</CustomButton>
                        <CustomButton onClick= {signInWithGoogle} isGoogleSignIn>Sign in with Google</CustomButton>
                    </div>
                    
                </form>
            </div>
        )
    }
}



export default SignIn;
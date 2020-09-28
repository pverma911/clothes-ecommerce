 
 // Create store and middleware
 import {createStore, applyMiddleware} from 'redux';
 // Logger Middleware

import logger from 'redux-logger'
import rootReducer from './root-reducer';



const middlewares = [logger] // array values;

const store = createStore(rootReducer, applyMiddleware(...middlewares));

// We will spread in all of the methods or values in this logger array.
// you can also put in [logger] inside applyMiddleware



export default store;
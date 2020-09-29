 
 // Create store and middleware
 import {createStore, applyMiddleware} from 'redux';
 import { persistStore } from 'redux-persist';

 // Logger Middleware

import logger from 'redux-logger'
import rootReducer from './root-reducer';



const middlewares = [logger] // array values;

export const store = createStore(rootReducer, applyMiddleware(...middlewares));

// We will spread in all of the methods or values in this logger array.
// you can also put in [logger] inside applyMiddleware



export const persistor = persistStore(store); // Store is persisted

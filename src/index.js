import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

// React router

import {BrowserRouter} from 'react-router-dom'

// Persist
import { PersistGate } from 'redux-persist/integration/react';

import { store, persistor } from './redux/store';

// React Redux:

import {Provider} from 'react-redux'

ReactDOM.render(  // Wrap App in <BrowserRouter> to add router
  <Provider store ={store}>
    <BrowserRouter>     
      <PersistGate persistor={persistor}>
        <App />
      </PersistGate>
    </BrowserRouter>
  </Provider>,
  
  document.getElementById('root')
);

 
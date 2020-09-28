import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

// React router

import {BrowserRouter} from 'react-router-dom'

// React Redux:

import {Provider} from 'react-redux'
import store from './redux/store'

ReactDOM.render(  // Wrap App in <BrowserRouter> to add router
  <Provider store ={store}>
    <BrowserRouter>     
      <App />
    </BrowserRouter>
  </Provider>,
  
  document.getElementById('root')
);


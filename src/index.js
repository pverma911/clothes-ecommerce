import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

// React router

import {BrowserRouter} from 'react-router-dom'


ReactDOM.render(  // Wrap App in <BrowserRouter> to add router
  <BrowserRouter>     
    <App />
  </BrowserRouter>,
  document.getElementById('root')
);


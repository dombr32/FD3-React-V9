import React from 'react';
import ReactDOM from 'react-dom';

import MobileCompany from './components/MobileCompany';
// import clients from './clients.json'

import { Provider } from 'react-redux';
import { store } from './redux/store'


ReactDOM.render(
  <Provider store={store}>
    <MobileCompany/>
  </Provider>
  , document.getElementById('container') 
);
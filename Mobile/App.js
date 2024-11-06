import React from 'react';
import ReactDOM from 'react-dom';

import MobileCompany from './components/MobileCompany';
import clients from './clients.json'


let companyName='A1';

ReactDOM.render(
  <MobileCompany 
    name={companyName}
    clients={clients}
  />
  , document.getElementById('container') 
);
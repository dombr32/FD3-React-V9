import React from 'react';
import ReactDOM from 'react-dom';

import Filter from './components/Filter';


// const catalogText='Каталог товаров';

import words from './words.json';


ReactDOM.render(
  <div>
    <Filter words={words}/>
  </div>,
  

  document.getElementById('container') 
);


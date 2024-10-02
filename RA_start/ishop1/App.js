import React from 'react';
import ReactDOM from 'react-dom';

import Shop from './components/ishopHead';


// const catalogText='Каталог товаров';

import catalogArr from './catalog.json';


ReactDOM.render(
  <div>
    <Shop description="Интернет-магазин с доставкой по всей Беларуси" address="г. Минск, ул. Столичная 19" catalog={catalogArr}/>
  </div>,
  

  document.getElementById('container') 
);


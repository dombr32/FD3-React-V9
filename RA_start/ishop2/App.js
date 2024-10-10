import React from 'react';
import ReactDOM from 'react-dom';

import Shop from './components/Shop';


// const catalogText='Каталог товаров';

import catalogArr from './catalog.json';


ReactDOM.render(
  <div>
    <Shop description="Интернет-магазин с доставкой по всей Беларуси" address="г. Минск, ул. Столичная 19" defCatalog={catalogArr}/>
  </div>,
  

  document.getElementById('container') 
);


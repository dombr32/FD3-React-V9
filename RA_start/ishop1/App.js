import React from 'react';
import ReactDOM from 'react-dom';

import Shop from './components/ishopHead';

import CatalogBlock from './components/CatalogBlock';


// const catalogText='Каталог товаров';

import catalogArr from './catalog.json';

ReactDOM.render(
  <div>
    <Shop question="Интернет-магазин с доставкой по всей Беларуси" address="г. Минск, ул. Столичная 19"/>

    <CatalogBlock 
      // description={catalogText}
      catalog={catalogArr}
    />
  </div>,
  

  document.getElementById('container') 
);

// ReactDOM.render(
// <CatalogBlock 
//     description={catalogText}
//     catalog={catalogArr}
//   />,

//   document.getElementById('container') 
// )
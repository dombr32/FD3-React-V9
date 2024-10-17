import React from 'react';
import ReactDOM from 'react-dom';

import RainbowFrame from './components/RainbowFrame';



let colors = ['red','orange', 'yellow','green', '#00BFFF', 'blue', 'purple'];

ReactDOM.render(
  <div>
    <RainbowFrame colors={colors}>
      Hello!
    </RainbowFrame>
  </div>,
  

  document.getElementById('container') 
);


import React from 'react';
import ReactDOM from 'react-dom';

import DoubleButton from './components/DoubleButton';
import { withRainbowFrame } from './components/withRainbowFrame'



let colors = ['red','orange', 'yellow','green', '#00BFFF', 'blue', 'purple'];
let DoubleButtonWithFrame=withRainbowFrame(colors)(DoubleButton);

function cbPressed (num) {
  alert(num)
};

ReactDOM.render(
    <DoubleButtonWithFrame caption1 ="однажды" caption2="пору" cbPressed={cbPressed}>
      в студёную зимнюю
    </DoubleButtonWithFrame>
  ,
  

  document.getElementById('container') 
);


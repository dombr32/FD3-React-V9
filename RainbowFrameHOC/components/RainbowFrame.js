import React, { Fragment } from 'react';

import './RainbowFrame.css';


class RainbowFrame extends React.Component {



  render() {    
    let frame = this.props.children;
      
      for (let i=0; i<this.props.colors.length; i++) {
      
  
        frame = 
          <div key = {i} style={{border:"solid 3px "+this.props.colors[i],padding:"5px", textAlign:"center", width:"max-content"}}>
            {frame}          
          </div> 
 
      }       
      return frame
    
  }

}



export default RainbowFrame;

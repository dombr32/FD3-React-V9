import React from "react";

function withRainbowFrame (colors){
    return function(Comp) {
      return props => {
        // let frame = <Comp {...props} />;
        let frame = <Comp {...props} />
        
        for (let i=0; i<colors.length; i++) {
        
          frame = 
            <div key = {i} style={{border:"solid 3px "+colors[i],padding:"5px", textAlign:"center", width:"max-content"}}>
              {frame}          
            </div> 
        }       
        return frame
      } 
    };
  }

export { withRainbowFrame };
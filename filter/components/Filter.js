import React from 'react';

import './Filter.css';


class Filter extends React.Component {


  state = {
    wordsCopyArr : this.props.words,
    isSelected: "",
    }

  filterChange = (eo) =>{
    // this.setState ( {isSelected:eo.target.value} )

    const filterWords=this.state.wordsCopyArr.map( v =>
      { const i = this.state.wordsCopyArr.indexOf(v);
          if (!v.includes(eo.target.value))

          // console.log(v);
          delete this.state.wordsCopyArr[i];
          console.log(this.state.wordsCopyArr)
          this.setState ( {wordsCopyArr:this.state.wordsCopyArr} )
          // console.log(this.state.wordsCopyArr)
      }
    );

    
    // const filterWords = this.state.wordsCopyArr.filter(word => word !== eo.target.value);

    // console.log(this.state.wordsCopyArr)
    // this.setState ( {wordsCopyArr:filterWords} )
    
  }


  render() {

    

    return (
      <div>
        
        <input type='radio'></input>
        <input type="text" onChange={this.filterChange}></input>
        <button>сброс</button>
        <br></br>
        <textarea defaultValue={this.state.wordsCopyArr.join('\n')}></textarea>
        
      </div>
    );
  }

}

export default Filter;

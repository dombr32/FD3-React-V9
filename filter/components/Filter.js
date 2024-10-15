import React from 'react';

import './Filter.css';


class Filter extends React.Component {


  state = {
    words : this.props.words,
    filterWords: "",
    isSelected: false,
    }


  filterChange = (eo) =>{
    this.setState( {filterWords : eo.target.value}, this.wordsAfterFilter)
  }

  sortWords = (eo) => {
    this.setState( {isSelected : eo.target.checked}, this.wordsAfterFilter)
  }

  // функция для сортировки массива
  wordsAfterFilter = () => {

    let words = this.props.words;
    if (this.state.filterWords)
    words = words.filter ( v => v.includes(this.state.filterWords));
    // console.log(words)
    if (this.state.isSelected) {
      if (words === this.props.words)
        words = words.slice() //возвращаем новый массив
        // console.log(words)}
      words = words.sort()
    }
    this.setState({words})
  }

  //  функция для очистки массива
  clearField = () => {
    this.setState( {filterWords:"", isSelected:false, words:this.props.words} )
  }


  render() {

    return (

      
      <div>
        
        <input type='checkbox' checked={this.state.isSelected} onChange={this.sortWords}></input>
        <input type="text" value={this.state.filterWords} onChange={this.filterChange}></input>
        <input type="button" value="сброс" onClick={this.clearField}></input>
        <br></br>
        <textarea value={this.state.words.join('\n')}></textarea>
        
      </div>
    );
  }

}

export default Filter;

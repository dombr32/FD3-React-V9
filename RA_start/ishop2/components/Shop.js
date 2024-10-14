import React from 'react';

import './Shop.css';
import Catalog from './Catalog';
// import catalogArr from '../catalog.json';


class Shop extends React.Component {


  state = {
    catalogCopyArr : this.props.defCatalog,
    isSelected: "",
    }

  clicked = (i) =>{
    this.setState ({isSelected:i})
  }

  clickedDel = (i) =>{
    // код i равен порядковому номеру в json, отнимаем 1, учитывая, что массив начинается с 0
    if (confirm('вы хотите удалить товар?')) {
      let catalogCopy =  this.state.catalogCopyArr;
      delete catalogCopy[i-1];
      console.log(catalogCopy);
      this.setState ( {catalogCopyArr : catalogCopy} );
    }
  }

  render() {

    const goodsCode=this.state.catalogCopyArr.map( v =>
        <Catalog price={v.price} 
        type={v.type} 
        amount={v.amount} 
        key={v.code} 
        code={v.code}
        url={v.url} 
        isSelected={this.state.isSelected}
        cbClicked={this.clicked}
        cbClickedDel={this.clickedDel}/>
    );

    return (
      <div>
        <div className='Shop_Head'>
          <span className='Shop_Text'>
            {this.props.description}
          </span>
      
          <span className='Shop_Address'>
            {this.props.address}
          </span>
        </div>

        
        <div className='CatalogBlock_Goods'>{goodsCode}</div>
        
      </div>
    );
  }

}

export default Shop;

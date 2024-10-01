import React from 'react';

import './ishopHead.css';
import CatalogBlock from './CatalogBlock';
// const catalogBlock = <CatalogBlock/>

class Shop extends React.Component {

  render() {
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

        < CatalogBlock />
        
      </div>
    );
  }

}

export default Shop;

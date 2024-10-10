import React from 'react';

import './Shop.css';
import CatalogBlock from './CatalogBlock';
// import catalogArr from '../catalog.json';

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

        <CatalogBlock catalog={this.props.catalog}/>
        
      </div>
    );
  }

}

export default Shop;

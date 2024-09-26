import React from 'react';

import './ishopHead.css';

class Shop extends React.Component {

  render() {
    return (
      <div className='Shop'>
        <span className='Shop_Text'>
          {this.props.question}
        </span>
    
        <span className='Shop_Address'>
          {this.props.address}
        </span>
      </div>
    );
  }

}

export default Shop;

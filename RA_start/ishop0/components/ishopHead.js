import React from 'react';

import './ishopHead.css';

class IShopHead extends React.Component {

  render() {
    return (
      <div className='IShopHead'>
        <span className='IShopHead_Text'>
          {this.props.question}
        </span>
      </div>
    );
  }

}

export default IShopHead;

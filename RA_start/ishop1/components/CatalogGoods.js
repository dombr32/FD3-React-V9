import React from "react";

import './CatalogGoods.css';
class CatalogGoods extends React.Component {
    render(){

        return (
            <span className="CatalogGoods">
                <img src={this.props.url}></img>
                <span className='Type'>{this.props.type}</span>
                <span className='Price'>Цена: <b>{this.props.price}</b></span>
                <span className='Amount'>Осталось: {this.props.amount} шт.</span>
            </span>
        )
    }
}

export default CatalogGoods;
import React, { Fragment } from "react";

import './Catalog.css';
class Catalog extends React.Component {
   

    click = eo => {
        this.props.cbClicked( eo.currentTarget.getAttribute('code'));
        eo.stoppropagation()
      };
    
      clickDel = eo => {
        
        this.props.cbClickedDel( eo.target.getAttribute('code'));
      }

    render(){

       
    
        if  (this.props.isSelected==this.props.code){

            return (
                <Fragment>
                    <span className="CatalogGoodsisSelected" onClick={this.click} code={this.props.code}>
                        <img src={this.props.url}></img>
                        <span className='Type'>{this.props.type}</span>
                        <span className='Price' >Цена: <b>{this.props.price}</b></span>
                        <span className='Amount'>Осталось: {this.props.amount} шт.</span>
                        <button onClick={this.clickDel} code={this.props.code}>delete</button>
                    </span>
                </Fragment>
            )
        } else {
            return (
                <Fragment>
                    <span className="CatalogGoods" code={this.props.code} onClick={this.click}>
                        <img src={this.props.url}></img>
                        <span className='Type'>{this.props.type}</span>
                        <span className='Price'>Цена: <b>{this.props.price}</b></span>
                        <span className='Amount'>Осталось: {this.props.amount} шт.</span>
                        <button>delete</button>
                    </span>
                </Fragment>
            )
        }
    }
}

export default Catalog;
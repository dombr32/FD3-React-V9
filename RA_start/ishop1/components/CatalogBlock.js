import React from "react";

import CatalogGoods from "./CatalogGoods";
import "./CatalogBlock.css";


class CatalogBlock extends React.Component{
    render(){

        const goodsCode=this.props.catalog.map( v =>
            <CatalogGoods price={v.price} type={v.type} amount={v.amount} key={v.code} url={v.url}/>
        );

        return(
            <div>
                <h2>Каталог товаров</h2>
                <div className='CatalogBlock_Goods'>{goodsCode}</div>
            </div>
        );
    }
}




export default CatalogBlock;
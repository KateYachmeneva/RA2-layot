import './Store.css';
import React from 'react';
import products from '../../dumyData/products';
import IconSwitch from "../IconSwitch/IconSwitch";
import CardsView from "../CardsView/CardsView";
import ListView from "../ListView/ListView";


var ids = require('short-id');
const Store = () => {
    const INITIAL_STATE = 'view_module';
    const productsId = products.map((product) => ({...product,id: ids.generate()}));

    const [storeView, changeStoreView] = React.useState(INITIAL_STATE);

    const onSwitchClick = () => {
        changeStoreView((prev) => ((prev === 'view_module' ) ? 'view_list' : 'view_module' ));
    };
    const view = (storeView === 'view_module')?<CardsView products = {productsId}/>:<ListView products = {productsId}/>;



    return  (
        <div className = "container">
    <IconSwitch 
      icon = {storeView}
      onSwitch = {onSwitchClick}
             />
      {view}
       </div>);
  }  

export default Store;
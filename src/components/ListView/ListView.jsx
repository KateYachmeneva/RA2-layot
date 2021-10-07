import React from 'react';
import propTypes from 'prop-types';
import './ListView.css';
import ShopItem from './ShopItem/ShopItem';

const CardsView= (props) =>{
    CardsView.propTypes = {
        products: propTypes.arrayOf(
        propTypes.shape({
            id: propTypes.string.isRequired,
            img: propTypes.string.isRequired,
            name: propTypes.string.isRequired,
            price: propTypes.string.isRequired,
            color: propTypes.string.isRequired
          }).isRequired,
        ).isRequired,
    };
    return (
        <div className="Store-List-View" key = "Store-List-View">
          {props.products.map((product) => (<ShopItem product ={product} key = {props.products.id} />))}
    </div>
    )
}
export default CardsView;
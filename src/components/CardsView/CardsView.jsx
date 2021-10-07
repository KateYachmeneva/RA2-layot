import React from 'react';
import propTypes from 'prop-types';
import './CardsView.css';
import ShopCard from "./ShopCard/ShopCard";

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
        <div className="Store-Cards-View" key = "Store-Cards-View">
                  {props.products.map((product) => (<ShopCard product={product} key={product.id} />))}
    </div>
    )
}
export default CardsView;
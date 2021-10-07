import React from 'react';
import propTypes from 'prop-types';


const ShopItem = (props) =>{
    ShopItem.propTypes = {
        product: propTypes.shape({
            id: propTypes.string.isRequired,
            img: propTypes.string.isRequired,
            name: propTypes.string.isRequired,
            price: propTypes.string.isRequired,
            color: propTypes.string.isRequired
          }).isRequired,
      };
      const { product } = props;
    return (
        <div className="List-View-Shop-Item" key={`${product.id}-item`}>
           <img className="Card-Image" src={product.img} key={`${product.id}-image`} alt={product.name} />
      <div className="Card-Name" key={`${product.id}-name`}>{product.name}</div>
      <div className="Card-Color" key={`${product.id}-color`}>{product.color}</div>
      <div className="Card-Price" key={`${product.id}-price`}>{`$${product.price}`}</div>
      <button className="AddToCart-Button" key={`${product.id}-button`} type="button">Add to cart</button>
    </div>
    )
}
export default ShopItem;
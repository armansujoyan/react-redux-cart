import React from 'react';
import PropTypes from 'prop-types';

import AddBtn from './add-btn';
import RemoveBtn from './remove-btn';

export default function ProductItem(props) {
  const { product, addToCart, cartItem, removeFromCart  } = props;
  return (
    <div className="product-list-item">
      <h3> {product.name} </h3>
      <p> {product.description} </p>
      <div> Price: ${product.price} </div>
      <div>
        <AddBtn
          cartItem={cartItem}
          addToCart={addToCart}
          product={product}
        />

        {
          cartItem ?
            <RemoveBtn
              cartItem={cartItem}
              removeItem={removeFromCart}/> : null
        }
      </div>
    </div>
  )
}

ProductItem.propTypes = {
  product: PropTypes.object.isRequired,
  addToCart: PropTypes.func.isRequired,
  cartItem: PropTypes.object.isRequired,
  removeFromCart: PropTypes.func.isRequired
};

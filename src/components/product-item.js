import React from 'react';
import PropTypes from 'prop-types';


export default function ProductItem(props) {
  const { product, addToCart, cartItem  } = props;
  return (
    <div className="product-list-item">
      <h3> {product.name} </h3>
      <p> {product.description} </p>
      <div> Price: ${product.price} </div>
      <div>
        <button onClick={() => addToCart(product)}>
          Add to Cart (
            {( cartItem && cartItem.quantity) || 0}
          )
        </button>
      </div>
    </div>
  )
}

ProductItem.propTypes = {
  product: PropTypes.object.isRequired,
  addToCart: PropTypes.func.isRequired,
  cartItem: PropTypes.object.isRequired
};

import React from 'react';
import PropTypes from 'prop-types'


export default function AddBtn(props) {
  const { addToCart, product, cartItem } = props;
  return (
    <button onClick={() => addToCart(product)}>
        Add to Cart (
            {( cartItem && cartItem.quantity) || 0}
        )
    </button>
  )
}

AddBtn.propTypes = {
  addToCart: PropTypes.func.isRequired,
  product: PropTypes.object.isRequired,
  cartItem: PropTypes.object.isRequired
}

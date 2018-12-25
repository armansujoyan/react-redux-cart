import React from 'react';
import PropTypes from 'prop-types'


export default function RemoveBtn(props) {
  const { removeItem, cartItem } = props;
  return (
    <button onClick={() => removeItem(cartItem)}>
        Remove
    </button>
  )
}

RemoveBtn.propTypes = {
  addToCart: PropTypes.func.isRequired,
  cartItem: PropTypes.object.isRequired
}

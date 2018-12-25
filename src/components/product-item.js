import React from 'react';
import PropTypes from 'prop-types';


export default function ProductItem(props) {
  const { product } = props;
  return (
    <div>
      <h3> {product.name} </h3>
      <p> {product.description} </p>
      <div> Price: ${product.price} </div>
      <div>
        <button>Add to Cart</button>
      </div>
    </div>
  )
}

ProductItem.propTypes = {
  product: PropTypes.object.isRequired
};

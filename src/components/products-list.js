import React from 'react';
import PropTypes from 'prop-types';


import ProductItem from './product-item'

export default function ProductsList(props) {
  const { products } = props;
  return (
    <div className="product-list">
        {
            products.map(product => <ProductItem product={product}/>)
        }
    </div>
  )
}

ProductsList.propTypes = {
  products: PropTypes.object.isRequired
}

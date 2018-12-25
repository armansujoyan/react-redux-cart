import React from 'react';
import PropTypes from 'prop-types';


import ProductItem from './product-item'

export default function ProductsList(props) {
  return (
    <div>
        {
            props.products.map(product => <ProductItem product={product}/>)
        }
    </div>
  )
}

ProductsList.propTypes = {
  products: PropTypes.object.isRequired
}

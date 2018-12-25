import React from 'react'

import ProductItem from './prodcut-item'

export default function ProductsList(props) {
  return (
    <div>
        {
            props.products.map(product => <ProductItem product={product}/>)
        }
    </div>
  )
}

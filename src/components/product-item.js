import React from 'react'

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

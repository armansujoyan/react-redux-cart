import React from 'react';

import ProductList from '../components/products-list';
import ProductsData from '../data/products'

export default function HomePage () {
  return (
    <div>
      <h2> Our products </h2>
      <ProductList products={ProductsData}></ProductList>
    </div>
  )
}

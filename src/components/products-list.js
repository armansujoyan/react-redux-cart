import React from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { getCart } from '../redux/selectors';
import { addToCart, removeItem } from '../redux/actions';
import ProductItem from './product-item';

function ProductsList(props) {
  const {
    products,
    addToCart,
    removeFromCart,
    cart
  } = props;
  return (
    <div className="product-list">
        {
            products.map((product, index) =>
              <ProductItem
                product={product}
                addToCart={addToCart}
                removeFromCart={removeFromCart}
                key={index}
                cartItem={cart.filter(item => item.id === product.id)[0]}/>)
        }
    </div>
  )
}

const mapStateToProps = state => ({
  cart: getCart(state)
})

const mapDispatchToProps = dispatch => ({
  addToCart: bindActionCreators(addToCart, dispatch),
  removeFromCart: bindActionCreators(removeItem, dispatch)
})

export default connect(mapStateToProps, mapDispatchToProps)(ProductsList)

ProductsList.propTypes = {
  products: PropTypes.array.isRequired
}

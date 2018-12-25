import React from 'react';
import { connect } from 'react-redux';

import { getCart } from '../redux/selectors';
import { addToCart, removeItem, removeAll } from '../redux/actions'

function Cart(props) {
  const { cart, addToCart, removeItem, removeAll } = props;
  return (
    <table>
      <thead>
        <tr>
          <th>Item</th>
          <th>Quantity</th>
          <th></th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        {
          cart.map((cartItem, index) =>
            <tr key={index}>
              <td>{cartItem.name}</td>
              <td>{cartItem.quantity}</td>
              <td>
                <button onClick={(e) => addToCart(cartItem)}>
                  +
                </button>
                <button onClick={(e) => removeItem(cartItem)}>
                  -
                </button>
              </td>
              <td>
                <button onClick={(e) => removeAll(cartItem)}>
                  Remove all
                </button>
              </td>
            </tr>
          )
        }
      </tbody>
    </table>
  )
}

const mapStateToProps = state => ({
  cart: getCart(state)
})

const mapDispatchToProps = {
  addToCart,
  removeItem,
  removeAll
};

export default connect(mapStateToProps, mapDispatchToProps)(Cart);

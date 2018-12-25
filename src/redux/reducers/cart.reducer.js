import { cartConstants } from '../constants';
import { addToCart, removeItem, cartWithoutItem } from '../../utils'

export const cartReducer = (state=[], action) => {
  const { type, payload } = action;
  switch(type){
    case cartConstants.ADD_TO_CART:
      return addToCart(state, payload);
    case cartConstants.REMOVE_FROM_CART:
      return removeItem(state, payload);
    case cartConstants.REMOVE_ALL:
      return cartWithoutItem(state, payload)
    default:
      return state;
  }
}
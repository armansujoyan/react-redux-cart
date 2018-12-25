import { cartConstants } from '../constants'

export const cartReducer = (state=[], action) => {
  const { type, payload } = action;
  switch(type){
    case cartConstants.ADD_TO_CART:
      return [...state, payload];
    case cartConstants.REMOVE_FROM_CART:
      return state.filter(item => item.id !== payload.id);
    default:
      return state;
  }
}
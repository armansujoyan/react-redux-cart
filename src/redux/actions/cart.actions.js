import { cartConstants } from '../constants'

export const addToCart = (item) => ({ type: cartConstants.ADD_TO_CART, payload: item });
export const removeAll = (item) => ({ type: cartConstants.REMOVE_ALL, payload: item });
export const removeItem = (item) => ({ type: cartConstants.REMOVE_FROM_CART, payload: item });
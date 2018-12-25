import { cartConstants } from '../constants'

export const addToCart = (item) => ({ type: cartConstants.ADD_TO_CART, payload: item});

export const removeItem = (id) => ({ type: cartConstants.REMOVE_FROM_CART, payload: id});
export const cartWithoutItem = (cart, item) => cart.filter(cartItem => cartItem.id !== item.id);
export const isItemInCart = (cart, item) => cart.filter(cartItem => cartItem.id === item.id)[0];

export const addToCart = (cart, item) => {
  const withoutItem = cartWithoutItem(cart, item);
  const itemInCart = isItemInCart(cart, item);
  return itemInCart === undefined ?
    [...withoutItem, { ...item, quantity: 1}] :
    [...withoutItem, { ...item, quantity: itemInCart.quantity + 1}]
}

export const removeItem = (cart, item) => {
  const withoutItem = cartWithoutItem(cart, item);
  return item.quantity > 1 ?
    [...withoutItem, { ...item, quantity: item.quantity-1 }] :
    [...withoutItem]
}
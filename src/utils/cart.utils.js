export const getCartItemsCount = (cartItems) => {
  return cartItems.reduce((acc, item) => {
    const accItem = acc.filter(accItem => accItem.id === item.id)[0];
    accItem !== undefined ?
      accItem.quantity++ :
      acc.push({ ...item, quantity: 1 });
    return acc;
  }, [])
}
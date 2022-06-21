export const isIncart = (product, cartItems) => {
  return cartItems.find((item) => item.id === product.id);
};

export function getExistingCart() {
  const cart = localStorage.getItem("cart");

  if (cart === null) {
    return [];
  } else {
    return JSON.parse(cart);
  }
}

export function saveCart(items) {
  localStorage.setItem("cart", JSON.stringify(items));
}

export function getCartCount() {
  const cart = localStorage.getItem("cart")
    ? JSON.parse(localStorage.getItem("cart")).length
    : 0;

  return cart;
}

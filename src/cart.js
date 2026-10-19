function notImplemented() {
  throw new Error('Корзина ещё не реализована. Сначала прочитайте тесты.');
}

function addToCart(cart, product, quantity) {
  if (!Number.isInteger(quantity) || quantity <= 0) {
    throw new RangeError('Количество должно быть положительным целым числом.');
  }

  const existingItem = cart.find((item) => item.id === product.id);
  const nextQuantity = (existingItem ? existingItem.quantity : 0) + quantity;

  if (nextQuantity > product.stock) {
    throw new RangeError('Количество не может превышать остаток на складе.');
  }

  if (existingItem) {
    return cart.map((item) => (
      item.id === product.id ? { ...item, quantity: nextQuantity } : item
    ));
  }

  return [...cart, { ...product, quantity }];
}
function changeQuantity(cart, productId, quantity) {
  const existingItem = cart.find((item) => item.id === productId);
  if (!existingItem) return cart;

  if (!Number.isInteger(quantity) || quantity <= 0) {
    throw new RangeError('Количество должно быть положительным целым числом.');
  }

  if (quantity > existingItem.stock) {
    throw new RangeError('Количество не может превышать остаток на складе.');
  }

  return cart.map((item) => (
    item.id === productId ? { ...item, quantity } : item
  ));
}
function removeFromCart() { return notImplemented(); }
function calculateCartSubtotal() { return notImplemented(); }
function calculateOrderTotal() { return notImplemented(); }

const cartApi = { addToCart, changeQuantity, removeFromCart, calculateCartSubtotal, calculateOrderTotal };

if (typeof module !== 'undefined') module.exports = cartApi;
if (typeof window !== 'undefined') window.cartApi = cartApi;

const products = require('../../src/data/products');
const { sortProductsByPrice } = require('../../src/catalog');

describe('sortProductsByPrice', () => {
  test('sorts all products by ascending price', () => {
    expect(sortProductsByPrice(products, 'asc').map(({ id }) => id)).toEqual([3, 6, 5, 4, 2, 1]);
  });

  test('sorts all products by ascending price by default', () => {
    expect(sortProductsByPrice(products).map(({ id }) => id)).toEqual([3, 6, 5, 4, 2, 1]);
  });

  test('sorts selected products by ascending price', () => {
    const selectedProducts = products.filter(({ id }) => [1, 3, 4].includes(id));
    expect(sortProductsByPrice(selectedProducts, 'asc').map(({ id }) => id)).toEqual([3, 4, 1]);
  });

  test('sorts all products by descending price', () => {
    expect(sortProductsByPrice(products, 'desc').map(({ id }) => id)).toEqual([1, 2, 4, 5, 6, 3]);
  });

  test('sorts selected products by descending price', () => {
    const selectedProducts = [products[2], products[0], products[3]];
    expect(sortProductsByPrice(selectedProducts, 'desc').map(({ id }) => id)).toEqual([1, 4, 3]);
  });

  test('sorts another selected group by descending price', () => {
    const selectedProducts = [products[4], products[1], products[5]];
    expect(sortProductsByPrice(selectedProducts, 'desc').map(({ id }) => id)).toEqual([2, 5, 6]);
  });

  test('does not change the selected input array when sorting ascending', () => {
    const selectedProducts = products.filter(({ id }) => [1, 3, 4].includes(id));
    sortProductsByPrice(selectedProducts, 'asc');
    expect(selectedProducts.map(({ id }) => id)).toEqual([1, 3, 4]);
  });

  test('does not change the selected input array when sorting descending', () => {
    const selectedProducts = products.filter(({ id }) => [1, 3, 4].includes(id));
    sortProductsByPrice(selectedProducts, 'desc');
    expect(selectedProducts.map(({ id }) => id)).toEqual([1, 3, 4]);
  });

  test('does not change the full input array when using the default direction', () => {
    sortProductsByPrice(products);
    expect(products.map(({ id }) => id)).toEqual([1, 2, 3, 4, 5, 6]);
  });
});

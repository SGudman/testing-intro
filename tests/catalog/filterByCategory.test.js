const products = require('../../src/data/products');
const { filterByCategory } = require('../../src/catalog');

describe('filterByCategory', () => {
  test('returns all products for the all category', () => {
    expect(filterByCategory(products, 'all').map(({ id }) => id)).toEqual([1, 2, 3, 4, 5, 6]);
  });

  test('returns all products when category is undefined', () => {
    expect(filterByCategory(products, undefined).map(({ id }) => id)).toEqual([1, 2, 3, 4, 5, 6]);
  });

  test('returns all products for an empty category', () => {
    expect(filterByCategory(products, '').map(({ id }) => id)).toEqual([1, 2, 3, 4, 5, 6]);
  });

  test('returns products in the electronics category', () => {
    expect(filterByCategory(products, 'electronics').map(({ id }) => id)).toEqual([1, 2]);
  });

  test('returns products in the books category', () => {
    expect(filterByCategory(products, 'books').map(({ id }) => id)).toEqual([3, 6]);
  });

  test('returns products in the home category', () => {
    expect(filterByCategory(products, 'home').map(({ id }) => id)).toEqual([4, 5]);
  });

  test('returns no products for clothes', () => {
    expect(filterByCategory(products, 'clothes').map(({ id }) => id)).toEqual([]);
  });

  test('returns no products for toys', () => {
    expect(filterByCategory(products, 'toys').map(({ id }) => id)).toEqual([]);
  });

  test('returns no products for sports', () => {
    expect(filterByCategory(products, 'sports').map(({ id }) => id)).toEqual([]);
  });
});

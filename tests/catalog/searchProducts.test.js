const products = require('../../src/data/products');
const { searchProducts } = require('../../src/catalog');

describe('searchProducts', () => {
  test('finds an exact product name', () => {
    expect(searchProducts(products, 'Наушники').map(({ id }) => id)).toEqual([1]);
  });

  test('finds another exact product name', () => {
    expect(searchProducts(products, 'Чистый код').map(({ id }) => id)).toEqual([6]);
  });

  test('finds an exact product name with multiple words', () => {
    expect(searchProducts(products, 'Настольная лампа').map(({ id }) => id)).toEqual([4]);
  });

  test('search is case-insensitive for javascript', () => {
    expect(searchProducts(products, 'javascript').map(({ id }) => id)).toEqual([3]);
  });

  test('search is case-insensitive for ЧЕХОЛ', () => {
    expect(searchProducts(products, 'ЧЕХОЛ').map(({ id }) => id)).toEqual([5]);
  });

  test('search is case-insensitive for наушники', () => {
    expect(searchProducts(products, 'наушники').map(({ id }) => id)).toEqual([1]);
  });

  test('returns all products for an empty query', () => {
    expect(searchProducts(products, '').map(({ id }) => id)).toEqual([1, 2, 3, 4, 5, 6]);
  });

  test('returns all products for a whitespace query', () => {
    expect(searchProducts(products, '   ').map(({ id }) => id)).toEqual([1, 2, 3, 4, 5, 6]);
  });

  test('returns all products for a tab and newline query', () => {
    expect(searchProducts(products, '\t\n').map(({ id }) => id)).toEqual([1, 2, 3, 4, 5, 6]);
  });
});

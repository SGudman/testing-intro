const products = require('../../src/data/products');
const { getProductById } = require('../../src/catalog');

describe('getProductById', () => {
  test('returns the catalog product with ID 1', () => {
    expect(getProductById(products, 1)).toBe(products[0]);
  });

  test('returns the catalog product with ID 4', () => {
    expect(getProductById(products, 4)).toBe(products[3]);
  });

  test('returns the catalog product with ID 6', () => {
    expect(getProductById(products, 6)).toBe(products[5]);
  });

  test('returns null when numeric ID 0 is missing', () => {
    expect(getProductById(products, 0)).toBe(null);
  });

  test('returns null when numeric ID 999 is missing', () => {
    expect(getProductById(products, 999)).toBe(null);
  });

  test('returns null when numeric ID -1 is missing', () => {
    expect(getProductById(products, -1)).toBe(null);
  });

  test('returns null when ID is the string 1', () => {
    expect(getProductById(products, '1')).toBe(null);
  });

  test('returns null when ID is undefined', () => {
    expect(getProductById(products, undefined)).toBe(null);
  });

  test('returns null when ID is NaN', () => {
    expect(getProductById(products, NaN)).toBe(null);
  });
});

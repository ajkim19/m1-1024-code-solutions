'use strict';
const prices = [42.42, 10, 28.2234, 3.2, 5, 12];
const newPrices1 = prices.map((originalNumber) => ({
  price: originalNumber,
  salePrice: originalNumber / 2,
}));
console.log(newPrices1);
const newPrices2 = prices.map((originalNumber) =>
  parseFloat(originalNumber.toFixed(2))
);
console.log(newPrices2);

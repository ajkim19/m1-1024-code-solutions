'use strict';
const prices = [42.42, 10, 28.2234, 3.2, 5, 12];
const newPrices = prices.map((original_number) => ({
  price: original_number,
  salePrice: original_number / 2,
}));
console.log(newPrices);
console.log(prices);

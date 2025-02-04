interface Price {
  price: number;
  salePrice: number;
}

const prices = [42.42, 10, 28.2234, 3.2, 5, 12];

const newPrices: Price[] = prices.map((originalNumber) => ({
  price: originalNumber,
  salePrice: originalNumber / 2,
}));

console.log(newPrices);
console.log(prices);

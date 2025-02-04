'use strict';
const values = [10, 1, 22, 23, 41, 5, 18, 7, 80, 9];
console.log('In order:');
values.forEach((item) => console.log(item));
console.log('Reverse order:');
values.forEach((_, index, array) => {
  console.log(array[array.length - 1 - index]);
});

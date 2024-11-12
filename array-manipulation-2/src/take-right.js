'use strict';
/* exported takeRight */
function takeRight(array, count) {
  const newArray = [];
  let counter = array.length - count;
  for (const val of array) {
    if (counter <= 0) {
      newArray.push(val);
    }
    counter--;
  }
  return newArray;
}

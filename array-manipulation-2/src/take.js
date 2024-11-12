'use strict';
/* exported take */
function take(array, count) {
  const newArray = [];
  let counter = 0;
  for (const val of array) {
    newArray.push(val);
    counter++;
    if (counter === count) {
      break;
    }
  }
  return newArray;
}

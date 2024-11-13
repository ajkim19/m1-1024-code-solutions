'use strict';
/* exported drop */
function drop(array, count) {
  let counter = 0;
  const newArray = [];
  for (const val of array) {
    if (counter >= count) {
      newArray.push(val);
    }
    counter++;
  }
  return newArray;
}

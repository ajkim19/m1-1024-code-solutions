'use strict';
/* exported findIndex */
function findIndex(array, value) {
  let theIndex = -1;
  for (let i = 0; i < array.length; i++) {
    if (array[i] === value) {
      theIndex = i;
      break;
    }
  }
  return theIndex;
}

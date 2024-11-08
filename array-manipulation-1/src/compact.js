'use strict';
/* exported compact */
function compact(array) {
  const newArray = [];
  for (let i = 0; i < array.length; i++) {
    if (!!array[i] === true) {
      newArray.push(array[i]);
    }
  }
  return newArray;
}

'use strict';
/* exported dropRight */
function dropRight(array, count) {
  const newArray = [];
  const numItems = array.length - count;
  for (let i = 0; i < numItems; i++) {
    newArray.push(array[i]);
    console.log(newArray);
  }
  return newArray;
}

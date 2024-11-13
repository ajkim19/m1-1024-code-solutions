'use strict';
/* exported chunk */
function chunk(array, size) {
  const bigArray = [];
  let littleArray = [];
  let arrLength = 0;
  for (const val of array) {
    littleArray.push(val);
    arrLength++;
    if (arrLength === size) {
      bigArray.push(littleArray);
      arrLength = 0;
      littleArray = [];
    }
  }
  if (arrLength !== 0) {
    bigArray.push(littleArray);
  }
  return bigArray;
}

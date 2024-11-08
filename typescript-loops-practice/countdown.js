'use strict';
/* exported countdown */
function countdown(num) {
  const newArray = [];
  while (num >= 0) {
    newArray.push(num);
    num--;
  }
  return newArray;
}

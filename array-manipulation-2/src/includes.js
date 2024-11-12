'use strict';
/* exported includes */
function includes(array, value) {
  let newBool = false;
  for (const val of array) {
    if (val === value) {
      newBool = true;
    }
  }
  return newBool;
}

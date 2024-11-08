'use strict';
/* exported includesSeven */
function includesSeven(array) {
  let sevenBool = false;
  for (const val of array) {
    if (val === 7) {
      sevenBool = true;
      break;
    }
  }
  return sevenBool;
}

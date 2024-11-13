'use strict';
/* exported truncate */
function truncate(length, string) {
  let newString = '';
  for (let i = 0; i < length; i++) {
    if (string[i]) {
      newString += string[i];
    }
  }
  newString += '...';
  return newString;
}

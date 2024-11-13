'use strict';
/* exported firstChars */
function firstChars(length, string) {
  let newString = '';
  for (let i = 0; i < length; i++) {
    if (string[i]) {
      newString += string[i];
    }
  }
  return newString;
}

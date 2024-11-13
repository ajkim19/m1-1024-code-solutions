'use strict';
/* exported lastChars */
function lastChars(length, string) {
  let newString = '';
  for (let i = string.length - length; i < string.length; i++) {
    if (string[i]) {
      newString += string[i];
    }
  }
  return newString;
}

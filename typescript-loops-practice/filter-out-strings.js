'use strict';
/* exported filterOutStrings */
function filterOutStrings(values) {
  const newArray = [];
  for (const val of values) {
    if (typeof val !== 'string') {
      newArray.push(val);
    }
  }
  return newArray;
}

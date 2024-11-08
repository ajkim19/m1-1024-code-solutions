'use strict';
/* exported filterOutNulls */
function filterOutNulls(values) {
  const newArray = [];
  for (const val of values) {
    if (val != null) {
      newArray.push(val);
    }
  }
  return newArray;
}

'use strict';
/* exported getKeys */
function getKeys(object) {
  const newArray = [];
  for (const key in object) {
    newArray.push(key);
  }
  return newArray;
}

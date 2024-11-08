'use strict';
/* exported getValues */
function getValues(object) {
  const newArray1 = [];
  const newArray2 = [];
  for (const key1 in object) {
    newArray1.push(key1);
  }
  for (const key2 of newArray1) {
    newArray2.push(object[key2]);
  }
  return newArray2;
}

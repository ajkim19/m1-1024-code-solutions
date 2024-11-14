'use strict';
/* exported omit */
function omit(source, keys) {
  const newObject = {};
  for (const prop in source) {
    let inList = false;
    for (const key of keys) {
      if (key === prop) {
        inList = true;
      }
    }
    if (inList === false) {
      newObject[prop] = source[prop];
    }
  }
  return newObject;
}

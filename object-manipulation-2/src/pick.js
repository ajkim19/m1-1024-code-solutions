'use strict';
/* exported pick */
function pick(source, keys) {
  const newObject = {};
  for (const key of keys) {
    if (source[key] !== undefined) {
      newObject[key] = source[key];
    }
  }
  return newObject;
}

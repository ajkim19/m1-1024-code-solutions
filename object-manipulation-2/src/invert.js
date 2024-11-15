'use strict';
/* exported invert */
function invert(source) {
  const newObject = {};
  for (const prop in source) {
    newObject[source[prop]] = prop;
  }
  return newObject;
}

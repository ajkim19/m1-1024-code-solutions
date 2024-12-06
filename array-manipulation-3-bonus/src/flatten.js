/* exported flatten */
function flatten(array) {
  const newArray = [];
  for (const item1 of array) {
    if (Array.isArray(item1)) {
      for (const item2 of item1) {
        newArray.push(item2);
      }
    } else {
      newArray.push(item1);
    }
  }
  return newArray;
}

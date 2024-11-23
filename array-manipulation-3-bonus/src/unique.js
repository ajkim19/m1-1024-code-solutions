/* exported unique */
function unique(array) {
  const newArray = [];

  if (array.length !== 0) {
    for (const val1 of array) {
      let isUnique = true;

      for (const val2 of newArray) {
        if (val1 === val2) {
          isUnique = false;
        }
      }

      if (isUnique === true) {
        newArray.push(val1);
      }
      isUnique = true;
    }
  }
  return newArray;
}

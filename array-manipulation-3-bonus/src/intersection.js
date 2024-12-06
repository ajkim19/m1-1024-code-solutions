/* exported intersection */
function intersection(first, second) {
  const newArray = [];
  for (const val1 of first) {
    let isUnique = true;

    for (const val2 of second) {
      if (val1 === val2) {
        isUnique = false;
      }
    }

    if (isUnique === false) {
      newArray.push(val1);
    }
  }

  return newArray;
}

/* exported union */
function union(first, second) {
  const newArray = unique(first);
  const newSecond = unique(second);

  for (const val2 of newSecond) {
    let isUnique = true;

    for (const val1 of newArray) {
      if (val1 === val2) {
        isUnique = false;
      }
    }

    if (isUnique === true) {
      newArray.push(val2);
    }
  }

  return newArray;
}

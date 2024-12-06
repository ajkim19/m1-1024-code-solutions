/* exported difference */
function difference(first, second) {
  const newArray = [];
  for (const val1 of first) {
    let isUnique = true;

    for (const val2 of second) {
      if (val1 === val2) {
        isUnique = false;
      }
    }

    if (isUnique === true) {
      newArray.push(val1);
    }
  }

  for (const val2 of second) {
    let isUnique = true;

    for (const val1 of first) {
      if (val2 === val1) {
        isUnique = false;
      }
    }

    if (isUnique === true) {
      newArray.push(val2);
    }
  }
  return newArray;
}

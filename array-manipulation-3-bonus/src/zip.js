/* exported zip */
function zip(first, second) {
  const newArray = [];
  let arrayLength = 0;

  if (second.length > first.length) {
    arrayLength = first.length;
  } else {
    arrayLength = second.length;
  }

  for (let i = 0; i < arrayLength; i++) {
    newArray.push([first[i], second[i]]);
  }

  return newArray;
}

/* exported equal */
function equal(first, second) {
  let equal = true;

  if (first.length !== second.length) {
    return false;
  }

  for (let i = 0; i < first.length; i++) {
    if (first[i] !== second[i]) {
      equal = false;
    }
  }
  return equal;
}

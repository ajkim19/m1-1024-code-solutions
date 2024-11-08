/* exported findIndex */
function findIndex(array: any[], value: any): number {
  let theIndex: number = -1;

  for (let i = 0; i < array.length; i++) {
    if (array[i] === value) {
      theIndex = i;
      break;
    }
  }

  return theIndex;
}

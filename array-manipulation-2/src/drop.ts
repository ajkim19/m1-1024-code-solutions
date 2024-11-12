/* exported drop */
function drop(array: any[], count: number): any[] {
  let counter: number = 0;
  const newArray: any[] = [];

  for (const val of array) {
    if (counter >= count) {
      newArray.push(val);
    }

    counter++;
  }
  return newArray;
}

/* exported takeRight */
function takeRight(array: any[], count: number): any[] {
  const newArray: any[] = [];
  let counter: number = array.length - count;

  for (const val of array) {
    if (counter <= 0) {
      newArray.push(val);
    }
    counter--;
  }
  return newArray;
}

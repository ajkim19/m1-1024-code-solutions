/* exported take */
function take(array: any[], count: number): any[] {
  const newArray: any[] = [];
  let counter: number = 0;

  for (const val of array) {
    newArray.push(val);
    counter++;
    if (counter === count) {
      break;
    }
  }
  return newArray;
}

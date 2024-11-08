/* exported compact */
function compact(array: any[]): any[] {
  const newArray: any[] = [];

  for (let i = 0; i < array.length; i++) {
    if (!!array[i] === true) {
      newArray.push(array[i]);
    }
  }

  return newArray;
}

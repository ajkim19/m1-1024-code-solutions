/* exported initial */
function initial(array: any[]): any[] {
  const newArray: any[] = [];

  for (let i = 0; i < array.length - 1; i++) {
    newArray.push(array[i]);
  }

  return newArray;
}

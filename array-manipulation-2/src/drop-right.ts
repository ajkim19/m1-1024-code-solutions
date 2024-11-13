/* exported dropRight */
function dropRight(array: any[], count: number): any[] {
  const newArray: any[] = [];
  const numItems: number = array.length - count;

  for (let i = 0; i < numItems; i++) {
    newArray.push(array[i]);

    console.log(newArray);
  }
  return newArray;
}

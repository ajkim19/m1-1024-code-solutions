/* exported filterOutStrings */
function filterOutStrings(values: any[]): any[] {
  const newArray: any[] = [];

  for (const val of values) {
    if (typeof val !== 'string') {
      newArray.push(val);
    }
  }

  return newArray;
}

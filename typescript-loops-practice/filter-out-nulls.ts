/* exported filterOutNulls */
function filterOutNulls(values: any[]): any[] {
  const newArray: any[] = [];

  for (const val of values) {
    if (val != null) {
      newArray.push(val);
    }
  }

  return newArray;
}

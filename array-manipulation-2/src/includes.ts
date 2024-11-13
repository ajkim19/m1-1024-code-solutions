/* exported includes */
function includes(array: any[], value: any): boolean {
  let newBool: boolean = false;

  for (const val of array) {
    if (val === value) {
      newBool = true;
    }
  }

  return newBool;
}

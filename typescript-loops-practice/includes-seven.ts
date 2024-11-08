/* exported includesSeven */
function includesSeven(array: any[]): boolean {
  let sevenBool: boolean = false;

  for (const val of array) {
    if (val === 7) {
      sevenBool = true;
      break;
    }
  }

  return sevenBool;
}

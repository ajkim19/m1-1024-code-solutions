/* exported firstChars */
function firstChars(length: number, string: string): string {
  let newString: string = '';

  for (let i = 0; i < length; i++) {
    if (string[i]) {
      newString += string[i];
    }
  }

  return newString;
}

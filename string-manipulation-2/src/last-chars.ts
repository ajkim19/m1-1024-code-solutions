/* exported lastChars */
function lastChars(length: number, string: string): string {
  let newString: string = '';
  for (let i = string.length - length; i < string.length; i++) {
    if (string[i]) {
      newString += string[i];
    }
  }

  return newString;
}

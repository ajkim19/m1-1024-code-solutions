/* exported ransomCase */
function ransomCase(string: string): string {
  let newString: string = '';

  for (let i = 0; i < string.length; i++) {
    if (i % 2 === 0) {
      newString += string[i].toLowerCase();
    } else {
      newString += string[i].toUpperCase();
    }
  }

  return newString;
}

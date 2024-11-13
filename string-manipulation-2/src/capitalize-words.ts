/* exported capitalizeWords */
function capitalizeWords(string: string): string {
  let newString: string = string[0].toUpperCase();

  for (let i = 1; i < string.length; i++) {
    if (string[i - 1] === ' ') {
      newString += string[i].toUpperCase();
    } else {
      newString += string[i].toLowerCase();
    }
  }
  return newString;
}

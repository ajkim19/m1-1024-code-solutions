/* exported reverseWords */
function reverseWords(string) {
  const stringArray = string.split(' ');
  let newString = '';

  for (const word of stringArray) {
    for (let j = word.length - 1; j >= 0; j--) {
      newString += word[j];
    }
    newString += ' ';
  }
  return newString.slice(0, -1);
}

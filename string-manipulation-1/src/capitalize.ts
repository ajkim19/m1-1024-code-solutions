/* exported capitalize */
function capitalize(word: string): string {
  let newString: string = word[0].toUpperCase();

  for (let i = 1; i < word.length; i++) {
    newString += word[i].toLowerCase();
  }

  return newString;
}

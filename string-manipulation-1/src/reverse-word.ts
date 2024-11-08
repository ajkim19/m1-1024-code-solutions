/* exported reverseWord */
function reverseWord(word: string): string {
  let newWord: string = '';

  for (let i = word.length - 1; i >= 0; i--) {
    newWord += word[i];
  }

  return newWord;
}

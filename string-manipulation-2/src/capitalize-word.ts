/* exported capitalizeWord */
function capitalizeWord(word: string): string {
  if (word.toLowerCase() === 'javascript') {
    return 'JavaScript';
  }

  let newWord: string = word[0].toUpperCase();

  for (let i = 1; i < word.length; i++) {
    newWord += word[i].toLowerCase();
  }
  return newWord;
}

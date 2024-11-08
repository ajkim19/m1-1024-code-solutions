'use strict';
/* exported getWords */
function getWords(string) {
  const newArray = [];
  let newWord = '';
  for (let i = 0; i < string.length; i++) {
    if (string[i] === ' ') {
      newArray.push(newWord);
      console.log(newArray);
      newWord = '';
    } else if (i === string.length - 1) {
      newWord += string[i];
      newArray.push(newWord);
    } else {
      newWord += string[i];
      console.log(newWord);
    }
  }
  return newArray;
}

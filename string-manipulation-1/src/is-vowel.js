'use strict';
/* exported isVowel */
const vowels = ['a', 'A', 'e', 'E', 'i', 'I', 'o', 'O', 'u', 'U'];
function isVowel(char) {
  let newBool = false;
  for (const letter of vowels) {
    if (char === letter) {
      newBool = true;
    }
  }
  return newBool;
}

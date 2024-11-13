'use strict';
/* exported numVowels */
function numVowels(string) {
  let counter = 0;
  const vowels = ['a', 'A', 'e', 'E', 'i', 'I', 'o', 'O', 'u', 'U'];
  for (const char of string) {
    for (const vowel of vowels) {
      if (char === vowel) {
        counter++;
      }
    }
  }
  return counter;
}

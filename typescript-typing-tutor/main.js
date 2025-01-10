'use strict';
// Encases each letter of a string in a 'span' tag
function renderLetter(char) {
  const $spanChar = document.createElement('span');
  $spanChar.className = 'letter';
  $spanChar.textContent = char;
  return $spanChar;
}
const $wordString = document.querySelector('.word-string');
if (!$wordString) throw new Error('$wordString does not exist');
const words = 'grumpy wizards make toxic brew';
for (let i = 0; i < words.length; i++) {
  const $spanLetter = renderLetter(words[i]);
  $wordString.append($spanLetter);
}

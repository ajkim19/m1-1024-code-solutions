'use strict';
// Encases each letter of a string in a 'span' tag
function renderLetter(char) {
  const $spanChar = document.createElement('span');
  $spanChar.className = 'letter';
  $spanChar.textContent = char;
  return $spanChar;
}
// Places each character in words between span tags
function toType(string) {
  const $wordString = document.querySelector('.word-string');
  if (!$wordString) throw new Error('$wordString does not exist');
  for (let i = 0; i < string.length; i++) {
    const $wordChar = renderLetter(string[i]);
    if (i === 0) {
      $wordChar.style.textDecoration = 'underline';
    }
    $wordString.append($wordChar);
  }
}
function typingFocus(spanTag) {
  spanTag.style.textDecoration = 'none';
}
// Sets up the start of the application
const words = 'My dog is a stubborn B.';
toType(words);
const $spanLetters = document.querySelectorAll('span.letter');
if (!$spanLetters) throw new Error('spanLetters does not exist');
let charNum = 0;
document.addEventListener('keydown', (event) => {
  if (event.key === $spanLetters[charNum].textContent) {
    console.log(`You pressed the right key - ${event.key}`);
    $spanLetters[charNum].style.textDecoration = 'none';
    $spanLetters[charNum].style.color = 'rgb(0, 225, 0)';
    if ($spanLetters[charNum + 1]) {
      $spanLetters[charNum + 1].style.textDecoration = 'underline';
    }
    charNum++;
  } else {
    $spanLetters[charNum].style.color = 'red';
  }
});

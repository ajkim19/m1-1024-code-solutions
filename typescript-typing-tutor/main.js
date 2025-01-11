'use strict';
const $accuracy = document.querySelector('.accuracy');
if (!$accuracy) throw new Error('$accuracy does not exist');
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
// Sets up the start of the application
const words = 'my dog is stubborn';
toType(words);
const $spanLetters = document.querySelectorAll('span.letter');
if (!$spanLetters) throw new Error('spanLetters does not exist');
// Sets up to measure accuracy of typing
let correctKeys = 0;
const possibleKeys = words.length;
const accuracyArray = [];
let charNum = 0;
document.addEventListener('keydown', (event) => {
  if (event.key === $spanLetters[charNum].textContent) {
    $spanLetters[charNum].style.textDecoration = 'none';
    $spanLetters[charNum].style.color = 'rgb(0, 225, 0)';
    if ($spanLetters[charNum + 1]) {
      $spanLetters[charNum + 1].style.textDecoration = 'underline';
    }
    if (accuracyArray.length < charNum + 1) {
      accuracyArray.push(1);
      console.log(accuracyArray, 'correct');
      if (accuracyArray.length === possibleKeys) {
        // Calculates accuracy of typing
        const initialValue = 0;
        const correctKeysTotal = accuracyArray.reduce(
          (toAdd, currentSum) => toAdd + currentSum,
          initialValue
        );
        const accuracyFinal = Math.floor(
          (correctKeysTotal / possibleKeys) * 100
        );
        // Displays the final accuracy calculation
        $accuracy.textContent = `Your accuracy score is ${accuracyFinal}%`;
      }
    }
    charNum++;
  } else {
    $spanLetters[charNum].style.color = 'red';
    if (accuracyArray.length < charNum + 1) {
      accuracyArray.push(0);
      console.log(accuracyArray.length);
    }
  }
});

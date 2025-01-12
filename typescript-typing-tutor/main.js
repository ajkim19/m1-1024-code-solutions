'use strict';
const $wordString = document.querySelector('.word-string');
if (!$wordString) throw new Error('$wordString does not exist');
const $accuracy = document.querySelector('.accuracy');
if (!$accuracy) throw new Error('$accuracy does not exist');
const $numbersRow = document.querySelector('.numbers-row');
if (!$numbersRow) throw new Error('$numbersRow does not exist');
const $topRow = document.querySelector('.top-row');
if (!$topRow) throw new Error('$topRow does not exist');
const $middleRow = document.querySelector('.middle-row');
if (!$middleRow) throw new Error('$middleRow does not exist');
const $bottomRow = document.querySelector('.bottom-row');
if (!$bottomRow) throw new Error('$bottomRow does not exist');
const $spaceRow = document.querySelector('.space-row');
if (!$spaceRow) throw new Error('$spaceRow does not exist');
// Encases each letter of a string in a 'span' tag
function renderLetter(char) {
  const $spanChar = document.createElement('span');
  $spanChar.className = 'letter';
  $spanChar.textContent = char;
  return $spanChar;
}
// Places each character in words between span tags
function toType(string) {
  if (!$wordString) throw new Error('$wordString does not exist');
  for (let i = 0; i < string.length; i++) {
    const $wordChar = renderLetter(string[i]);
    if (i === 0) {
      $wordChar.style.textDecoration = 'underline';
    }
    $wordString.append($wordChar);
  }
}
function resetExercise() {
  if (!$wordString) throw new Error('$wordString does not exist');
  if (!$accuracy) throw new Error('$accuracy does not exist');
  $wordString.innerHTML = '';
  $accuracy.innerHTML = '';
  charNum = 0;
  accuracyArray.length = 0;
  toType(words);
}
// Sets up the start of the application
const words = 'My dog is being stubborn.';
toType(words);
const $spanLetters = document.querySelectorAll('span.letter');
if (!$spanLetters) throw new Error('spanLetters does not exist');
// Sets up to measure accuracy of typing
const possibleKeys = words.length;
const accuracyArray = [];
let charNum = 0;
document.addEventListener('keydown', (event) => {
  if (event.key === 'Shift') {
    return;
  } else if (event.key === $spanLetters[charNum].textContent) {
    $spanLetters[charNum].style.textDecoration = 'none';
    $spanLetters[charNum].style.color = 'rgb(0, 225, 0)';
    if ($spanLetters[charNum + 1]) {
      $spanLetters[charNum + 1].style.textDecoration = 'underline';
    }
    if (accuracyArray.length < charNum + 1) {
      accuracyArray.push(1);
      if (accuracyArray.length === possibleKeys) {
        // Calculates accuracy of typing
        const initialValue = 0;
        const correctKeysTotal = accuracyArray.reduce(
          (toAdd, currentSum) => toAdd + currentSum,
          initialValue
        );
        const accuracyScore = Math.floor(
          (correctKeysTotal / possibleKeys) * 100
        );
        // Displays the final accuracy calculation
        $accuracy.innerHTML = `You were&nbsp;<div class="accuracy-score">${accuracyScore}%</div>&nbsp;accurate with your typing`;
        setTimeout(() => {
          if (confirm('Would you like to try again?')) {
            resetExercise();
            return;
          }
        }, 0);
      }
    }
    charNum++;
  } else {
    $spanLetters[charNum].style.color = 'red';
    if (accuracyArray.length < charNum + 1) {
      accuracyArray.push(0);
    }
  }
});
const keyboardKeys = [
  '`',
  '1',
  '2',
  '3',
  '4',
  '5',
  '6',
  '7',
  '8',
  '9',
  '0',
  '-',
  '=',
  'q',
  'w',
  'e',
  'r',
  't',
  'y',
  'u',
  'i',
  'o',
  'p',
  '[',
  ']',
  '\\',
  'a',
  's',
  'd',
  'f',
  'g',
  'h',
  'j',
  'k',
  'l',
  ';',
  `'`,
  'Shift',
  'z',
  'x',
  'c',
  'v',
  'b',
  'n',
  'm',
  ',',
  '.',
  '/',
  'Shift',
  ' ',
];
for (let i = 0; i < keyboardKeys.length; i++) {
  const $divElement = document.createElement('div');
  $divElement.className = `keyboard-key ${keyboardKeys[i]} flex`;
  const $h1Element = document.createElement('h1');
  $h1Element.textContent = keyboardKeys[i].toLocaleUpperCase();
  $divElement.append($h1Element);
  if (i < 13 && $numbersRow) {
    $numbersRow.append($divElement);
  } else if (i >= 13 && i < 26 && $topRow) {
    $topRow.append($divElement);
  } else if (i >= 26 && i < 37 && $middleRow) {
    $middleRow.append($divElement);
  } else if (i >= 37 && i < 49 && $bottomRow) {
    $bottomRow.append($divElement);
  } else {
    $spaceRow.append($divElement);
  }
}

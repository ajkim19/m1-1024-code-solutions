const $wordString = document.querySelector<HTMLDivElement>('.word-string');
if (!$wordString) throw new Error('$wordString does not exist');
const $accuracy = document.querySelector<HTMLDivElement>('.accuracy');
if (!$accuracy) throw new Error('$accuracy does not exist');
const $numbersRow = document.querySelector<HTMLDivElement>('.numbers-row');
if (!$numbersRow) throw new Error('$numbersRow does not exist');
const $topRow = document.querySelector<HTMLDivElement>('.top-row');
if (!$topRow) throw new Error('$topRow does not exist');
const $middleRow = document.querySelector<HTMLDivElement>('.middle-row');
if (!$middleRow) throw new Error('$middleRow does not exist');
const $bottomRow = document.querySelector<HTMLDivElement>('.bottom-row');
if (!$bottomRow) throw new Error('$bottomRow does not exist');
const $spaceRow = document.querySelector<HTMLDivElement>('.space-row');
if (!$spaceRow) throw new Error('$spaceRow does not exist');
const keyboardKey = [
  'grave-accent',
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
  'dash',
  'equal',
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
  'l-bracket',
  'r-bracket',
  'backslash',
  'a',
  's',
  'd',
  'f',
  'g',
  'h',
  'j',
  'k',
  'l',
  'semicolon',
  'apostrophe',
  'shift-l',
  'z',
  'x',
  'c',
  'v',
  'b',
  'n',
  'm',
  'comma',
  'period',
  'slash',
  'shift-r',
  'space',
];

// Encases each letter of a string in a 'span' tag
function renderLetter(char: string): HTMLSpanElement {
  const $spanChar = document.createElement('span');
  $spanChar.className = 'letter';
  $spanChar.textContent = char;
  return $spanChar;
}

// Places each character in words between span tags
function toType(string: string): void {
  if (!$wordString) throw new Error('$wordString does not exist');
  $wordString.innerHTML = '';
  for (let i = 0; i < string.length; i++) {
    const $wordChar = renderLetter(string[i]);
    if (i === 0) {
      $wordChar.style.textDecoration = 'underline';
    }
    $wordString.append($wordChar);
  }
}

function addKeyboardKey(lettersList: string[]): void {
  for (let i = 0; i < lettersList.length; i++) {
    const $keyDivElement = document.createElement('div');
    if (!$keyDivElement) throw new Error('$keyDivElement does not exist');
    $keyDivElement.className = `keyboard-key ${lettersList[i]} flex`;
    const $h1Element = document.createElement('h1');
    if (lettersList[i] === 'grave-accent') {
      $h1Element.textContent = '`';
    } else if (lettersList[i] === 'dash') {
      $h1Element.textContent = '-';
    } else if (lettersList[i] === 'equal') {
      $h1Element.textContent = '=';
    } else if (lettersList[i] === 'l-bracket') {
      $h1Element.textContent = '[';
    } else if (lettersList[i] === 'r-bracket') {
      $h1Element.textContent = ']';
    } else if (lettersList[i] === 'backslash') {
      $h1Element.textContent = '\\';
    } else if (lettersList[i] === 'semicolon') {
      $h1Element.textContent = ';';
    } else if (lettersList[i] === 'apostrophe') {
      $h1Element.textContent = "'";
    } else if (lettersList[i] === 'comma') {
      $h1Element.textContent = ',';
    } else if (lettersList[i] === 'period') {
      $h1Element.textContent = '.';
    } else if (lettersList[i] === 'slash') {
      $h1Element.textContent = '/';
    } else if (lettersList[i] === 'shift-l' || lettersList[i] === 'shift-r') {
      $h1Element.textContent = 'SHIFT';
    } else if (lettersList[i] === 'space') {
      $h1Element.textContent = 'SPACE';
    } else {
      $h1Element.textContent = lettersList[i].toLocaleUpperCase();
    }
    $keyDivElement.append($h1Element);
    if (i < 13 && $numbersRow) {
      $numbersRow.append($keyDivElement);
    } else if (i >= 13 && i < 26 && $topRow) {
      $topRow.append($keyDivElement);
    } else if (i >= 26 && i < 37 && $middleRow) {
      $middleRow.append($keyDivElement);
    } else if (i >= 37 && i < 49 && $bottomRow) {
      $bottomRow.append($keyDivElement);
    } else if ($spaceRow) {
      $spaceRow.append($keyDivElement);
    }
  }
}

// Styles the key to be pressed on the keyboard image
function keyboardHintOn(charNum: number): void {
  const $spanLetter = $spanLetters[charNum] as HTMLSpanElement;
  if (!$spanLetter) throw new Error('$spanLetter does not exist');
  let spanLettersText = $spanLetter.textContent;
  if (spanLettersText === '`') {
    spanLettersText = 'grave-accent';
  } else if (spanLettersText === '[') {
    spanLettersText = 'l-bracket';
  } else if (spanLettersText === ']') {
    spanLettersText = 'r-bracket';
  } else if (spanLettersText === '\\') {
    spanLettersText = 'backslash';
  } else if (spanLettersText === ';') {
    spanLettersText = 'semicolon';
  } else if (spanLettersText === "'") {
    spanLettersText = 'apostrophe';
  } else if (spanLettersText === ',') {
    spanLettersText = 'comma';
  } else if (spanLettersText === '.') {
    spanLettersText = 'period';
  } else if (spanLettersText === '/') {
    spanLettersText = 'slash';
  } else if (spanLettersText === ' ') {
    spanLettersText = 'space';
  }
  if (!spanLettersText) throw new Error('spanLettersText does not exist');
  const $keyboardKey = document.querySelector(
    `.${spanLettersText.toLocaleLowerCase()}`
  );
  if (!$keyboardKey) throw new Error('$keyboardKey does not exist');
  console.log('$keyboardKey', $keyboardKey);

  // Makes the key on the keyboard bold and blue
  const $keyToPress = $keyboardKey.children[0] as HTMLElement;
  if (!$keyToPress) throw new Error('$keyToPress does not exist');
  $keyToPress.style.fontWeight = '900';
  $keyToPress.style.color = 'rgb(21, 0, 255)';
}

function keyboardHintOff(charNum: number): void {
  const $spanLetter = $spanLetters[charNum] as HTMLSpanElement;
  if (!$spanLetter) throw new Error('$spanLetter does not exist');
  let $spanLettersText = $spanLetter.textContent;
  if (!$spanLettersText) throw new Error('$spanLettersText does not exist');
  if ($spanLettersText === ' ') {
    $spanLettersText = 'space';
  } else if ($spanLettersText === '.') {
    $spanLettersText = 'period';
  }
  console.log('$spanLettersText', $spanLettersText);
  const $keyboardKey = document.querySelector(
    `.${$spanLettersText.toLocaleLowerCase()}`
  );
  if (!$keyboardKey) throw new Error('$keyboardKey does not exist');
  console.log('$keyboardKey', $keyboardKey);

  // Makes the key on the keyboard bold and blue
  const $keyToPress = $keyboardKey.children[0] as HTMLElement;
  if (!$keyToPress) throw new Error('$keyToPress does not exist');
  $keyToPress.style.fontWeight = '500';
  $keyToPress.style.color = 'black';
}

function resetExercise(): void {
  if (!$wordString) throw new Error('$wordString does not exist');
  if (!$accuracy) throw new Error('$accuracy does not exist');
  $wordString.innerHTML = '';
  $accuracy.innerHTML = '';
  currentPosition = 0;
  accuracyArray.length = 0;
  toType(words);
}

// Sets up the start of the application
const words = 'My dog is being stubborn.';
toType(words);

// Sets up to measure accuracy of typing
const possibleKeys = words.length;
const accuracyArray: number[] = [];

// Adds new keys to keyboard to be manipulated
addKeyboardKey(keyboardKey);

let currentPosition = 0;
// let upperCase = false;
const $spanLetters = document.querySelectorAll<HTMLSpanElement>(
  'span.letter'
) as NodeListOf<HTMLSpanElement>;
if ($spanLetters.length === 0) throw new Error('No span.letter elements found');
keyboardHintOn(currentPosition);
document.addEventListener('keydown', (event: KeyboardEvent) => {
  // // Includes the 'Shift' key for capitalized letters

  // // Checks if the letter is capitalized
  // if (
  //   $spanLetters[currentPosition].textContent ===
  //   $spanLetters[currentPosition].textContent?.toLocaleUpperCase()
  // ) {
  //   upperCase = true;
  // }

  /// ///////////
  // Add Code //
  /// ///////////

  // Disregards the 'Shift' key
  if (event.key === 'Shift') {
    return;
  }

  // Changes the letter green if the correct key had been pressed
  if (event.key === $spanLetters[currentPosition].textContent) {
    $spanLetters[currentPosition].style.textDecoration = '';
    $spanLetters[currentPosition].style.color = 'rgb(0, 180, 0)';
    keyboardHintOff(currentPosition);

    if ($spanLetters[currentPosition + 1]) {
      $spanLetters[currentPosition + 1].style.textDecoration = 'underline';
      keyboardHintOn(currentPosition + 1);
    }
    if (accuracyArray.length < currentPosition + 1) {
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
        $accuracy.innerHTML = `You were <div class="accuracy-score">${accuracyScore}%</div> accurate with your typing`;
        setTimeout(() => {
          if (confirm('Would you like to try again?')) {
            resetExercise();
          }
        }, 0);
      }
    }
    currentPosition++;
  } else {
    $spanLetters[currentPosition].style.color = 'red';
    if (accuracyArray.length < currentPosition + 1) {
      accuracyArray.push(0);
    }
  }
});

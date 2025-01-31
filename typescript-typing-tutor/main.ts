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

const keyboardKeyL = [
  'q',
  'w',
  'e',
  'r',
  't',
  'a',
  's',
  'd',
  'f',
  'g',
  'z',
  'x',
  'c',
  'v',
  'b',
];

const keyboardKeyR = ['y', 'u', 'i', 'o', 'p', 'h', 'j', 'k', 'l', 'n', 'm'];

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

// Encases each letter of a string in a 'span' tag with clean styling
function renderLetter(char: string): HTMLSpanElement {
  const $spanChar = document.createElement('span');
  $spanChar.className = 'letter';
  $spanChar.textContent = char;
  // Remove any existing styles
  $spanChar.removeAttribute('style');
  return $spanChar;
}

// Places each character in words between span tags
function toType(string: string): void {
  if (!$wordString) throw new Error('$wordString does not exist');
  // Clear existing content
  while ($wordString.firstChild) {
    $wordString.removeChild($wordString.firstChild);
  }

  // Create fresh elements
  for (let i = 0; i < string.length; i++) {
    const $wordChar = renderLetter(string[i]);
    $wordString.appendChild($wordChar);
  }

  // Get all letters and set initial styles
  const $letters = document.querySelectorAll<HTMLSpanElement>('span.letter');
  $letters.forEach((letter, index) => {
    letter.style.color = 'black';
    letter.style.textDecoration = 'none';
    if (index === 0) {
      letter.style.textDecoration = 'underline';
    }
  });
}

function addKeyboardKey(lettersList: string[]): void {
  for (let i = 0; i < lettersList.length; i++) {
    const $keyDivElement = document.createElement('div');
    if (!$keyDivElement) throw new Error('$keyDivElement does not exist');
    $keyDivElement.setAttribute('id', `${lettersList[i]}`);
    $keyDivElement.className = 'keyboard-key flex';
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
  const $keyboardKey = document.querySelector<HTMLElement>(
    `#${spanLettersText.toLocaleLowerCase()}`
  );
  if (!$keyboardKey) throw new Error('$keyboardKey does not exist');
  console.log('$keyboardKey', $keyboardKey);

  // Makes the key on the keyboard bold and blue
  const $keyToPress = $keyboardKey.children[0] as HTMLElement;
  if (!$keyToPress) throw new Error('$keyToPress does not exist');
  $keyToPress.style.fontSize = '28px';
  $keyToPress.style.fontWeight = '900';
  $keyToPress.style.textShadow = '2px 2px 2px black';
  $keyToPress.style.color = 'rgb(21, 0, 255)';

  // Checks if left hand keys are capitalized
  keyboardKeyL.forEach((key) => {
    if (spanLettersText === key.toLocaleUpperCase()) {
      // Makes the right shift key on the keyboard bold and blue
      const $shiftKeyR =
        document.querySelector<HTMLDivElement>('#shift-r > h1');
      if (!$shiftKeyR) throw new Error('$shiftR does not exist');
      $shiftKeyR.style.fontSize = '28px';
      $shiftKeyR.style.fontWeight = '900';
      $shiftKeyR.style.textShadow = '2px 2px 2px black';
      $shiftKeyR.style.color = 'rgb(21, 0, 255)';
    }
  });

  // Checks if right hand keys are capitalized
  keyboardKeyR.forEach((key) => {
    if (spanLettersText === key.toLocaleUpperCase()) {
      // Makes the left shift key on the keyboard bold and blue
      const $shiftKeyL =
        document.querySelector<HTMLDivElement>('#shift-l > h1');
      if (!$shiftKeyL) throw new Error('$shiftKeyL does not exist');
      $shiftKeyL.style.fontSize = '28px';
      $shiftKeyL.style.fontWeight = '900';
      $shiftKeyL.style.textShadow = '2px 2px 2px black';
      $shiftKeyL.style.color = 'rgb(21, 0, 255)';
    }
  });
}

function keyboardHintOff(charNum: number): void {
  const $spanLetter = $spanLetters[charNum] as HTMLSpanElement;
  if (!$spanLetter) throw new Error('$spanLetter does not exist');
  let spanLettersText = $spanLetter.textContent;
  if (!spanLettersText) throw new Error('$spanLettersText does not exist');
  if (spanLettersText === ' ') {
    spanLettersText = 'space';
  } else if (spanLettersText === '.') {
    spanLettersText = 'period';
  }
  console.log('$spanLettersText', spanLettersText);
  const $keyboardKey = document.querySelector<HTMLElement>(
    `#${spanLettersText.toLocaleLowerCase()}`
  );
  if (!$keyboardKey) throw new Error('$keyboardKey does not exist');

  // Makes the key on the keyboard bold and blue
  const $keyToPress = $keyboardKey.children[0] as HTMLElement;
  if (!$keyToPress) throw new Error('$keyToPress does not exist');
  $keyToPress.style.fontSize = '22px';
  $keyToPress.style.fontWeight = '400';
  $keyToPress.style.textShadow = 'none';
  $keyToPress.style.color = 'black';

  keyboardKeyL.forEach((key) => {
    if (spanLettersText === key.toLocaleUpperCase()) {
      // Makes the right shift key on the keyboard bold and blue
      const $shiftKeyR =
        document.querySelector<HTMLDivElement>('#shift-r > h1');
      if (!$shiftKeyR) throw new Error('$shiftR does not exist');
      $shiftKeyR.style.fontSize = '22px';
      $shiftKeyR.style.fontWeight = '400';
      $shiftKeyR.style.textShadow = 'none';
      $shiftKeyR.style.color = 'black';
    }
  });

  // Checks if right hand keys are capitalized
  keyboardKeyR.forEach((key) => {
    if (spanLettersText === key.toLocaleUpperCase()) {
      // Makes the left shift key on the keyboard bold and blue
      const $shiftKeyL =
        document.querySelector<HTMLDivElement>('#shift-l > h1');
      if (!$shiftKeyL) throw new Error('$shiftKeyL does not exist');
      $shiftKeyL.style.fontSize = '22px';
      $shiftKeyL.style.fontWeight = '400';
      $shiftKeyL.style.textShadow = 'none';
      $shiftKeyL.style.color = 'black';
    }
  });
}

// Resets the application to starting conditions
function reset(): void {
  if (!$wordString) throw new Error('$wordString does not exist');
  if (!$accuracy) throw new Error('$accuracy does not exist');

  // Clear all existing content
  while ($wordString.firstChild) {
    $wordString.removeChild($wordString.firstChild);
  }
  $accuracy.innerHTML = '';

  // Reset trackers
  currentPosition = 0;
  accuracyArray.length = 0;

  // Reset all keyboard keys
  document.querySelectorAll('.keyboard-key h1').forEach((key) => {
    if (key instanceof HTMLElement) {
      key.removeAttribute('style');
      key.style.fontWeight = '500';
      key.style.color = 'black';
    }
  });

  // Create fresh typing exercise
  toType(words);

  // Ensure global reference to span letters is updated
  const $newLetters = document.querySelectorAll<HTMLSpanElement>('span.letter');
  if ($newLetters.length === 0)
    throw new Error('No span.letter elements found');

  // Update the span letters reference
  $spanLetters = $newLetters;

  // Reset keyboard hint
  keyboardHintOn(0);
}

// Sets up the start of the application
const words = 'My Dog is being stubborn.';
toType(words);

// Sets up to measure accuracy of typing
const possibleKeys = words.length;
const accuracyArray: number[] = [];

// Adds new keys to keyboard to be manipulated
addKeyboardKey(keyboardKey);

let currentPosition = 0;
// let upperCase = false;
let $spanLetters = document.querySelectorAll<HTMLSpanElement>(
  'span.letter'
) as NodeListOf<HTMLSpanElement>;


keyboardHintOn(0);
// Update the event listener to use the refreshed elements
document.addEventListener('keydown', (event: KeyboardEvent) => {
  if (event.key === 'Shift') {
    return;
  }

  const $currentLetter = $spanLetters[currentPosition];
  if (!$currentLetter) return;

  if (event.key === $currentLetter.textContent) {
    $currentLetter.style.textDecoration = '';
    $currentLetter.style.color = 'rgb(0, 180, 0)';
    keyboardHintOff(currentPosition);

    const $nextLetter = $spanLetters[currentPosition + 1];
    if ($nextLetter) {
      $nextLetter.style.textDecoration = 'underline';
      keyboardHintOn(currentPosition + 1);
    }

    if (accuracyArray.length < currentPosition + 1) {
      accuracyArray.push(1);
      if (accuracyArray.length === possibleKeys) {
        const initialValue = 0;
        const correctKeysTotal = accuracyArray.reduce(
          (toAdd, currentSum) => toAdd + currentSum,
          initialValue
        );
        const accuracyScore = Math.floor(
          (correctKeysTotal / possibleKeys) * 100
        );

        $accuracy.innerHTML = `You were <div class="accuracy-score">${accuracyScore}%</div> accurate with your typing`;
        setTimeout(() => {
          if (confirm('Would you like to try again?')) {
            reset();
          }
        }, 0);
      }
    }
    currentPosition++;
  } else {
    $currentLetter.style.color = 'red';
    if (accuracyArray.length < currentPosition + 1) {
      accuracyArray.push(0);
    }
  }
});

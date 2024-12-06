/* exported isPalindromic */
function isPalindromic(string) {
  let newString = '';

  for (const char of string) {
    if (char !== ' ') {
      newString += char;
    }
  }

  let newBool = true;
  let goingDown = 0;
  let goingUp = 0;

  if (newString.length % 2 !== 0) {
    goingDown = Math.floor(newString.length / 2) - 1;
    goingUp = Math.ceil(newString.length / 2);
  } else {
    goingDown = newString.length / 2 - 1;
    goingUp = newString.length / 2;
  }

  for (let i = goingUp; i < newString.length; i++) {
    if (newString[goingDown] !== newString[i]) {
      newBool = false;
      break;
    }
    goingDown--;
  }

  return newBool;
}

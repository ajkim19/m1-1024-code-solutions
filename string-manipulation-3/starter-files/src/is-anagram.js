/* exported isAnagram */
function isAnagram(firstString, secondString) {
  let newFirstString = '';
  let newSecondString = '';
  let finalFirstString = '';
  let finalSecondString = '';

  for (const char of firstString) {
    if (char !== ' ') {
      newFirstString += char;
    }
  }
  for (const char of secondString) {
    if (char !== ' ') {
      newSecondString += char;
    }
  }
  finalFirstString = newFirstString.split('').sort().join('');
  finalSecondString = newSecondString.split('').sort().join('');

  return finalFirstString == finalSecondString;
}

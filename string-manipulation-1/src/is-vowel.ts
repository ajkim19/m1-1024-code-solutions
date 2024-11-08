/* exported isVowel */
const vowels: string[] = ['a', 'A', 'e', 'E', 'i', 'I', 'o', 'O', 'u', 'U'];

function isVowel(char: string): boolean {
  let newBool: boolean = false;
  for (const letter of vowels) {
    if (char === letter) {
      newBool = true;
    }
  }

  return newBool;
}

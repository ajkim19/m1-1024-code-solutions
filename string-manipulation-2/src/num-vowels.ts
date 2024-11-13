/* exported numVowels */
function numVowels(string: string): number {
  let counter: number = 0;
  const vowels: string[] = ['a', 'A', 'e', 'E', 'i', 'I', 'o', 'O', 'u', 'U'];

  for (const char of string) {
    for (const vowel of vowels) {
      if (char === vowel) {
        counter++;
      }
    }
  }

  return counter;
}

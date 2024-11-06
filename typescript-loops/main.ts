/* exported getNumbersToTen,
            getEvenNumbersToTwenty,
            repeatWord,
            logEachCharacter,
            doubleAll,
            sumArray,
            reverseString,
            getKeys,
            getValues
 */

function getNumbersToTen(): number[] {
  const numbers: number[] = [];
  let currentNumber: number = 1;

  while (currentNumber <= 10) {
    numbers.push(currentNumber);
    currentNumber++;
  }

  return numbers;
}

function getEvenNumbersToTwenty(): number[] {
  const evenNumbers: number[] = [];
  let currentNumber: number = 2;

  while (currentNumber <= 20) {
    evenNumbers.push(currentNumber);
    currentNumber += 2;
  }

  return evenNumbers;
}

function repeatWord(word: string, times: number): string {
  let count: number = 1;
  let repeated: string = '';

  while (count <= times) {
    repeated += word;
    count++;
  }

  return repeated;
}

function logEachCharacter(str: string): undefined {
  for (let i = 0; i < str.length; i++) {
    console.log(str[i]);
  }
}

function doubleAll(numbers: number[]): number[] {
  const doubled: number[] = [];

  for (let i = 0; i < numbers.length; i++) {
    doubled.push(numbers[i] * 2);
  }

  return doubled;
}

function sumArray(numbers: number[]): number {
  let sum: number = 0;

  for (const num of numbers) {
    sum += num;
  }

  return sum;
}

function reverseString(str: string): string {
  let reversed: string = '';

  for (const char of str) {
    reversed = char + reversed;
  }

  return reversed;
}

type CatName = 'miffy' | 'boris' | 'mordred';

interface CatInfo {
  age: number;
  breed: string;
}

const cats: Record<CatName, CatInfo> = {
  miffy: { age: 10, breed: 'Persian' },
  boris: { age: 5, breed: 'Maine Coon' },
  mordred: { age: 16, breed: 'British Shorthair' },
};

function getKeys(obj: Record<string, unknown>): string[] {
  const keys: string[] = [];

  for (const key in obj) {
    keys.push(key);
  }

  return keys;
}

function getValues(obj: Record<string, unknown>): any[] {
  const values: any[] = [];

  for (const key in obj) {
    values.push(obj[key]);
  }

  return values;
}

console.log(cats);

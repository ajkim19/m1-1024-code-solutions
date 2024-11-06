// The Math Object
const heroes: string[] = ['Superman', 'Batman', 'Wonder Woman', 'The Flash'];

let randomNumber: number = Math.random();

randomNumber *= heroes.length;

const randomIndex: number = Math.floor(randomNumber);

console.log('randomIndex:', randomIndex);

const randomHero: string = heroes[randomIndex];

console.log('randomHero:', randomHero);

// Array Methods
// interface Book {
//   title: string;
//   author: string;
// }

const library: object[] = [
  {
    title: 'Catch-22',
    author: 'Joseph Heller',
  },
  {
    title: 'The House of the Scorpion',
    author: 'Nancy Farmer',
  },
  {
    title: 'The Hobbit',
    author: 'J. R. R. Tolkien',
  },
];

const lastBook = library.pop();
console.log('lastBook:', lastBook);

const firstBook = library.shift();
console.log('firstBook:', firstBook);

const js: object = {
  title: 'JavaScript for Impatient Programmers',
  author: 'Dr. Axel Rauschmayer',
};
const css: object = {
  title: 'CSS Secrets',
  author: 'Lea Verou',
};

library.push(js);
library.unshift(css);
library.splice(1, 1);

console.log('library:', library);

// String Methods
const fullName: string = 'Aaron Kim';
const firstAndLastName: string[] = fullName.split(' ');
console.log('firstAndLastName:', firstAndLastName);

const firstName: string = firstAndLastName[0];
const sayMyName: string = firstName.toUpperCase();
console.log('sayMyName:', sayMyName);

// Object Methods
const employee: object = {
  name: 'John Smith',
  age: 30,
  position: 'Manager',
};

const employeeKeys: string[] = Object.keys(employee);
console.log('employeeKeys:', employeeKeys);

const employeeValues: string[] = Object.values(employee);
console.log('employeeValues:', employeeValues);

const employeePairs: object[] = Object.entries(employee);
console.log('employeePairs:', employeePairs);

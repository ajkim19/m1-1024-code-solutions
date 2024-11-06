'use strict';
// The Math Object
const heroes = ['Superman', 'Batman', 'Wonder Woman', 'The Flash'];
let randomNumber = Math.random();
randomNumber *= heroes.length;
const randomIndex = Math.floor(randomNumber);
console.log('randomIndex:', randomIndex);
const randomHero = heroes[randomIndex];
console.log('randomHero:', randomHero);
// Array Methods
// interface Book {
//   title: string;
//   author: string;
// }
const library = [
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
const js = {
  title: 'JavaScript for Impatient Programmers',
  author: 'Dr. Axel Rauschmayer',
};
const css = {
  title: 'CSS Secrets',
  author: 'Lea Verou',
};
library.push(js);
library.unshift(css);
library.splice(1, 1);
console.log('library:', library);
// String Methods
const fullName = 'Aaron Kim';
const firstAndLastName = fullName.split(' ');
console.log('firstAndLastName:', firstAndLastName);
const firstName = firstAndLastName[0];
const sayMyName = firstName.toUpperCase();
console.log('sayMyName:', sayMyName);
// Object Methods
const employee = {
  name: 'John Smith',
  age: 30,
  position: 'Manager',
};
const employeeKeys = Object.keys(employee);
console.log('employeeKeys:', employeeKeys);
const employeeValues = Object.values(employee);
console.log('employeeValues:', employeeValues);
const employeePairs = Object.entries(employee);
console.log('employeePairs:', employeePairs);

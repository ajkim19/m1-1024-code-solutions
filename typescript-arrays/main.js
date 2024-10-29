'use strict';
// The colors Array
const colors = ['red', 'white', 'blue'];
console.log('value of colors[0]:', colors[0]);
console.log('value of colors[1]:', colors[1]);
console.log('value of colors[2]:', colors[2]);
const americaColors = `America is ${colors[0]}, ${colors[1]}, and ${colors[2]}.`;
console.log(americaColors);
colors[2] = 'green';
const mexicoColors = `Mexico is ${colors[0]}, ${colors[1]}, and ${colors[2]}.`;
console.log(mexicoColors);
console.log('value of the colors:', colors);
// The students Array
const students = ['Leo', 'Donnie', 'Raph', 'Mikey'];
const numberOfStudents = students.length;
console.log(`There are ${numberOfStudents} in the class.`);
const lastIndex = numberOfStudents - 1;
const lastStudent = students[lastIndex];
console.log(`The last student in the array is ${lastStudent}.`);
console.log('value of students:', students);

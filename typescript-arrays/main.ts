// The colors Array
const colors: string[] = ['red', 'white', 'blue'];

console.log('value of colors[0]:', colors[0]);
console.log('value of colors[1]:', colors[1]);
console.log('value of colors[2]:', colors[2]);

const americaColors: string = `America is ${colors[0]}, ${colors[1]}, and ${colors[2]}.`;

console.log(americaColors);

colors[2] = 'green';

const mexicoColors: string = `Mexico is ${colors[0]}, ${colors[1]}, and ${colors[2]}.`;

console.log(mexicoColors);

console.log('value of the colors:', colors);

// The students Array
const students: string[] = ['Leo', 'Donnie', 'Raph', 'Mikey'];
const numberOfStudents: number = students.length;

console.log(`There are ${numberOfStudents} in the class.`);

const lastIndex: number = numberOfStudents - 1;
const lastStudent: string = students[lastIndex];

console.log(`The last student in the array is ${lastStudent}.`);
console.log('value of students:', students);

//

// 1.
const width: number = 2;
const height: number = 4;

const area: number = width * height;

console.log('value of area:', area);
console.log('typeof area:', typeof area);

// 2.
const bill: number = 15;
const payment: number = 20;

const change: number = payment - bill;

console.log('value of change:', change);
console.log('typeof change:', typeof change);

// 3.
const quizzes: number = 85;
const midterm: number = 90;
const final: number = 95;

const grade: number = (quizzes + midterm + final) / 3;

console.log('value of grade:', grade);
console.log('typeof grade:', typeof grade);

// 4.
const firstName: string = 'Aaron';
const lastName: string = 'Kim';

const fullName: string = firstName + ' ' + lastName;

console.log('value of fullName:', fullName);
console.log('typeof fullName', typeof fullName);

// 5.
const pH: number = 2;

const isAcidic: boolean = pH < 7;

console.log('value of isAcidic:', isAcidic);
console.log('typeof isAcidic', typeof isAcidic);

// 6.
const headCount: number = 300;

const isSparta: boolean = headCount === 300;

console.log('value of isSparta:', isSparta);
console.log('typeof isSparta', typeof isSparta);

// 7.
let motto: string = fullName;

motto += ' is the GOAT';

console.log('value of motto:', motto);
console.log('typeof motto', typeof motto);

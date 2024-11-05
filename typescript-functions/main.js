'use strict';
// convertMinutesToSeconds(minutes)
function convertMinutesToSeconds(minutes) {
  return minutes * 60;
}
const convertMinutesToSecondsResult = convertMinutesToSeconds(20);
console.log('convertMinutesToSecondsResult:', convertMinutesToSecondsResult);
// greet(name)
function greet(name) {
  return 'Hey ' + name + '!';
}
const greetResult = greet('Aaron');
console.log('greetResult:', greetResult);
// getArea(width, height)
function getArea(width, height) {
  return width * height;
}
const getAreaResult = getArea(9, 16);
console.log('getAreaResult:', getAreaResult);
function getFirstName(person) {
  return person.firstName;
}
const aaronKim = {
  firstName: 'Aaron',
  lastName: 'Kim',
};
const getFirstNameResult = getFirstName(aaronKim);
console.log('getFirstNameResult:', getFirstNameResult);
// getLastElement(array)
function getLastElement(array) {
  return array[array.length - 1];
}
const numArray = [1, 2, 3, 4, 5, 6];
const getLastElementResult = getLastElement(numArray);
console.log('getLastElementResult:', getLastElementResult);
// callOtherFunction(otherFunction, params)
function callOtherFunction(otherFunction, params) {
  return otherFunction(params);
}
const forrestGump = {
  firstName: 'Forrest',
  lastName: 'Gump',
};
const callOtherFunctionResult = callOtherFunction(getFirstName, forrestGump);
console.log('callOtherFunctionResult:', callOtherFunctionResult);

// convertMinutesToSeconds(minutes)
function convertMinutesToSeconds(minutes: number): number {
  return minutes * 60;
}

const convertMinutesToSecondsResult: number = convertMinutesToSeconds(20);
console.log('convertMinutesToSecondsResult:', convertMinutesToSecondsResult);

// greet(name)
function greet(name: string): string {
  return 'Hey ' + name + '!';
}

const greetResult: string = greet('Aaron');
console.log('greetResult:', greetResult);

// getArea(width, height)
function getArea(width: number, height: number): number {
  return width * height;
}

const getAreaResult: number = getArea(9, 16);
console.log('getAreaResult:', getAreaResult);

// getFirstName(person)
interface Person {
  firstName: string;
  lastName: string;
}

function getFirstName(person: Person): string {
  return person.firstName;
}

const aaronKim: Person = {
  firstName: 'Aaron',
  lastName: 'Kim',
};

const getFirstNameResult: string = getFirstName(aaronKim);
console.log('getFirstNameResult:', getFirstNameResult);

// getLastElement(array)
function getLastElement(array: unknown[]): unknown {
  return array[array.length - 1];
}

const numArray: number[] = [1, 2, 3, 4, 5, 6];

const getLastElementResult: unknown = getLastElement(numArray);
console.log('getLastElementResult:', getLastElementResult);

// callOtherFunction(otherFunction, params)
function callOtherFunction(otherFunction: Function, params: unknown): unknown {
  return otherFunction(params);
}

const forrestGump: Person = {
  firstName: 'Forrest',
  lastName: 'Gump',
};

const callOtherFunctionResult: unknown = callOtherFunction(
  getFirstName,
  forrestGump
);

console.log('callOtherFunctionResult:', callOtherFunctionResult);

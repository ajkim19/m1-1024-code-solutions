interface StudentProps {
  firstName: string;
  lastName: string;
  age: number;
  livesInIrvine?: boolean;
  previousOccupation?: string;
}

interface Vehicle {
  make: string;
  model: string;
  year: number;
  color?: string;
  isConvertible?: boolean;
}

interface Pet {
  name?: string;
  kind?: string;
}

// The student Object
const student: StudentProps = {
  firstName: 'Aaron',
  lastName: 'Kim',
  age: 37,
};

const fullName: string = student.firstName + ' ' + student.lastName;

console.log('value of fullName:', fullName);

student.livesInIrvine = false;
student.previousOccupation = 'dishwasher';

console.log('value of student.livesInIrvine:', student.livesInIrvine);
console.log('value of student.previousOccupation:', student.previousOccupation);
console.log('value of student:', student);
console.log('typeof student:', typeof student);

// The vehicle Object
const vehicle: Vehicle = {
  make: 'Porsche',
  model: 'Taycan',
  year: 2024,
};

vehicle['color'] = 'dark blue';
vehicle['isConvertible'] = false;

console.log("value of vehicle['color']:", vehicle['color']);
console.log("value of vehicle['isConvertible']:", vehicle['isConvertible']);
console.log('value of vehicle:', vehicle);
console.log('typeof vehicle:', typeof vehicle);

// The pet Object
const pet: Pet = {
  name: 'Freyja',
  kind: 'dog',
};

delete pet.name;
delete pet.kind;

console.log('value of pet:', pet);
console.log('typeof pet:', typeof pet);

// Stuff

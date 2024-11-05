/* exported isUnderFive,
            isEven,
            startsWithJ,
            isOldEnoughToDrink,
            isOldEnoughToDrive,
            isOldEnoughToDrinkAndDrive,
            categorizeAcidity,
            introduceWarnerBro,
            recommendMovie
 */
function isUnderFive(number: number): boolean {
  if (number < 5) {
    return true;
  } else {
    return false;
  }
}

function isEven(number: number): boolean {
  const remainder: number = number % 2;
  if (remainder === 0) {
    return true;
  } else {
    return false;
  }
}

function startsWithJ(string: string): boolean {
  if (string[0] === 'J') {
    return true;
  } else {
    return false;
  }
}

function isOldEnoughToDrink(person: any): boolean {
  if (person.age >= 21) {
    return true;
  } else {
    return false;
  }
}

function isOldEnoughToDrive(person: any): boolean {
  if (person.age >= 16) {
    return true;
  } else {
    return false;
  }
}

function isOldEnoughToDrinkAndDrive(person: any): boolean {
  if (person) {
    return false;
  } else {
    return false;
  }
}

function categorizeAcidity(pH: number): string {
  if (pH <= 14 && pH > 7) {
    return 'base';
  } else if (pH === 7) {
    return 'neutral';
  } else if (pH >= 0 && pH < 7) {
    return 'acid';
  } else {
    return 'invalid pH level';
  }
}

function introduceWarnerBro(name: string): string {
  switch (name) {
    case 'yakko':
      return "We're the warner brothers!";
    case 'wakko':
      return "We're the warner brothers!";
    case 'dot':
      return "I'm cute~";
    default:
      return 'Goodnight everybody!';
  }
}

function recommendMovie(genre: string): string {
  switch (genre) {
    case 'action':
      return 'Fearless';
    case 'comedy':
      return 'Forrest Gump';
    case 'horror':
      return 'Nightmare on Elm Street';
    case 'drama':
      return 'A Few Good Men';
    case 'musical':
      return 'Hamilton';
    case 'sci-fi':
      return 'The Fifth Element';
    default:
      return 'Genre not recognized. Choose between action, comedy, horror, drama, musical, or sci-fi';
  }
}

/* exported chunk */
function chunk(array: any[], size: number): any[] {
  const bigArray: any[] = [];
  let littleArray: any[] = [];
  let arrLength: number = 0;

  for (const val of array) {
    littleArray.push(val);
    arrLength++;

    if (arrLength === size) {
      bigArray.push(littleArray);
      arrLength = 0;
      littleArray = [];
    }
  }

  if (arrLength !== 0) {
    bigArray.push(littleArray);
  }

  return bigArray;
}

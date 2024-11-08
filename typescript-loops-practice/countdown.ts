/* exported countdown */
function countdown(num: number): number[] {
  const newArray: number[] = [];

  while (num >= 0) {
    newArray.push(num);
    num--;
  }

  return newArray;
}

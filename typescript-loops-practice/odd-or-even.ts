/* exported oddOrEven */
function oddOrEven(number: number[]): string[] {
  const newArray: string[] = [];

  for (const num of number) {
    if (num % 2 === 0) {
      newArray.push('even');
    } else {
      newArray.push('odd');
    }
  }

  return newArray;
}

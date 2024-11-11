/* exported getValues */
function getValues(object: object): string[] {
  const newArray1: string[] = [];
  const newArray2: any[] = [];

  for (const key1 in object) {
    newArray1.push(key1);
  }

  for (const key2 of newArray1) {
    newArray2.push(object[key2]);
  }

  return newArray2;
}

/* exported getIndexes */
function getIndexes(array: any[]): number[] {
  const indices: number[] = [];

  for (let i = 0; i < array.length; i++) {
    indices.push(i);
  }

  return indices;
}

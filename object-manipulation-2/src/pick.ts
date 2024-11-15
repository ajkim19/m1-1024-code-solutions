/* exported pick */
function pick(source: any, keys: string[]): Record<string, number | null> {
  const newObject: any = {};

  for (const key of keys) {
    if (source[key] !== undefined) {
      newObject[key] = source[key];
    }
  }

  return newObject;
}

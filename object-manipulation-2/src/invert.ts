/* exported invert */
function invert(source: any): Record<string, number | null> {
  const newObject: any = {};

  for (const prop in source) {
    newObject[source[prop]] = prop;
  }

  return newObject;
}

/* exported omit */
function omit(source: any, keys: string[]): Record<string, number | null> {
  const newObject: any = {};

  for (const prop in source) {
    let inList: boolean = false;

    for (const key of keys) {
      if (key === prop) {
        inList = true;
      }
    }

    if (inList === false) {
      newObject[prop] = source[prop];
    }
  }

  return newObject;
}

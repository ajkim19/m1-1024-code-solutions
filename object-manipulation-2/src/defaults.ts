/* exported defaults */
function defaults(target: any, source: any): void {
  for (const prop in source) {
    if (target[prop] === undefined) {
      target[prop] = source[prop];
    }
  }
}

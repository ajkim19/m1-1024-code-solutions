# array-filter-quiz-notes

## Quiz Questions

Answer the following questions in the provided markdown file before turning in this exercise:

- `Array.forEach`:

  - What does `Array.forEach` do?
    - The `forEach()` method executes a callback function once for each array element.
    - It always returns `undefined` and is not chainable.
    - It does not mutate the array on which it is called (although callback, if invoked, may do so).
  - What should the callback function do?
    - It should be able to take in and process an element in the array
    - Optionally, it can take in an index and an additional array, of which the array that `forEach()` is being applied to.
  - What is `Array.forEach` useful for?
    - The typical use case is to execute side effects at the end of a chain.

- `Array.map`:

  - What does `Array.map` do?
    - The `map()` method creates an new array populated with the results of calling a provided function on every element in the calling array.
  - What should the callback function return?
    - It should be able to take in and process an element in the array
    - Optionally, it can take in an index and an additional array, of which the array that `forEach()` is being applied to.
  - What is `Array.map` useful for?
    - Used to build a new array based on the array that was given.

- `Array.find`:

  - What does `Array.find` do?
    - `find()` executes the callback function once for each index of the array until it finds one where callback returns a truthy value.
  - What should the callback function return?
    - If a truthy element is found, `find()` immediately returns the value of that element. Otherwise, `find()` returns undefined.
  - What is `Array.find` useful for?
    - It is useful for finding an object in an array by one of its properties.

- `Array.filter`:
  - What does `Array.filter` do?
    - `filter()` calls a provided callback function once for each element in an array, and constructs a new array of all the values for which callback returns a value that coerces to true.
  - What should the callback function return?
    - A new array with the elements that pass the test. If no elements pass the test, an empty array will be returned.
  - What is `Array.filter` useful for?
    - It is useful for creating new arrays that follow a certain criterion.

## Notes

All student notes should be written here.

How to write `Code Examples` in markdown

for JS:

```javascript
const data = 'Howdy';
```

for HTML:

```html
<div>
  <p>This is text content</p>
</div>
```

for CSS:

```css
div {
  width: 100%;
}
```

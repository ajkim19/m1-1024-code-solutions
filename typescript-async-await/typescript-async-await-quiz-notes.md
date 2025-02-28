# typescript-async-await-quiz-notes

## Quiz Questions

Answer the following questions in the provided markdown file before turning in this exercise:

- What are the `async` and `await` keywords used for?

  - The `async` keyword is used to indicate which functions are asynchronous.
  - The `await` keyword is used to indicate that the JavaScript Runtime should "wait" or "pause" until the asynchronous function completes.

- How do `async` and `await` differ from `Promise.then` and `Promise.catch`?

  - The code is read sequentially

- When do you use `async`?

  - It is used in front of asynchronous functions.

- When do you use `await`? When do you _not_ use `await`? (What happens if you `await` a synchronous function?)

  - You use await when calling an asynchronous function that returns a Promise, ensuring that execution pauses until the Promise resolves.
  - You do not use `await` on synchronous functions (it has no effect and may be misleading).
    - If you `await` a synchronous function, it executes immediately, but await does nothing and the function's return value is simply passed through.

- How do you handle errors with `await`?

  - You would use `try...catch` to catch and handle errors.

- What do `try`, `catch` and `throw` do? When do you use them?

  - `try...catch` is used to handle exceptions in synchronous and asynchronous code.
    - `try` lets you execute code that may throw an error.
    - `catch` handles errors that occur inside the try block.
  - `throw` is used to indicate exceptional conditions in functions.
    - `throw` manually raises an error.

- What happens if you forget to use `await` on a Promise? In that case, what happens to the Promise rejection?

  - It will return `Promise { <pending> }`
    - It will still resolve or reject, but not before the rest of the code.

- Which style of asynchronous programming do you prefer — callbacks, `Promise.then`, or `async/await`? Why?
  - `async/await` is preferred for its sequential readability.

///////////////////////////////

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

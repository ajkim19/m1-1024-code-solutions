# typescript-operators-quiz-notes

## Quiz Questions

Answer the following questions in the provided markdown file before turning in this exercise:

- What are the `&&` (logical AND) and `||` (logical OR) operators and how can they be used outside of `if` statements?

  - They are used to check for the truthiness of a value

- What is "short-circuit evaluation" and how does it apply to `&&` and `||`?

  - As logical expressions are evaluated left to right, they are tested for possible "short-circuit" evaluation using the following rules:

    - falsy && anything is short-circuit evaluated to the falsy value
    - truthy || anything is short-circuit evaluated to the truthy value.
    - nonNullish ?? anything is short-circuit evaluated to the non-nullish value.

  - The rules of logic guarantee that these evaluations are always correct. Note that the anything part of the above expressions is not evaluated, so any side effects of doing so do not take effect.

- What is the `??` (nullish coalescing) operator and how does it differ from `||`?

  - It is a logical operator that returns its right-hand side operand when its left-hand side operand is null or undefined, and otherwise returns its left-hand side operand.

- What is the `?:` (ternary) operator? How does it differ from `if/else`?

  - The only JavaScript operator that takes three operands:

    - a condition followed by a question mark (?)
    - an expression to execute if the condition is truthy followed by a colon (:)
    - the expression to execute if the condition is falsy.

- What is the `?.` (optional chaining) operator? When would you use it?

  - If the object accessed or function called using this operator is undefined or null, the expression short circuits and evaluates to undefined instead of throwing an error.

- What is `...` (spread) syntax? How do you use it with arrays and objects?

  - It allows you to expand iterable elements (like arrays, strings, or objects) into individual elements.

- What data types can be spread into an array? Into an object?

  - Iterables and array-like objects can be spread into an array.
  - Only objects can be spread into other objects

- How does spread syntax differ from rest syntax?
  - Spread Syntax
    - Expands elements
    - Usage Arrays, objects, function arguments
    - Example: [...arr] (copying), {...obj} (cloning)
  - Rest Syntax
    - Gathers elements
    - Function parameters, destructuring
    - Example: function(...args), const [a, ...rest] = arr

## Notes

All student notes should be written here.

How to write `Code Examples` in markdown

for JS:

```js
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

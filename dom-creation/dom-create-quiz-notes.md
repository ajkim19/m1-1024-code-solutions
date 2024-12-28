# dom-creation-quiz-notes

## Quiz Questions

Answer the following questions in the provided markdown file before turning in this exercise:

- Does the `document.createElement()` method insert a new element into the page?
  No, it just creates the DOM object in JavaScript..
- How do you add an element as a child to another element?
  'appendChild()' method
- What do you pass as the arguments to the `element.setAttribute()` method?
  You would use 'class' for the first argument and the desired class name for the second.
- What steps do you need to take in order to insert a new element into the page?
  1. Create the element
  2. Set attributes and properties
  3. Append to parent
- What is the `textContent` property of an element object for?
  It is for interacting with the text content of the HTML object.
- Name two ways to set the `class` attribute of a DOM element.
  1. Use 'setAttribute()' method on the reference to the element object with 'class' as the first argument and the class name for the second.
  2. Interact directly with the property by assigning the class name to the reference with 'className' attached to it.
- What are two advantages of defining a function to do create something (like the work of creating a DOM tree)?
  1. Less verbosity
  2. Makes the desired task more easily repeatable

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

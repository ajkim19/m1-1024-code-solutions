# dom-manipulation-quiz-notes

## Quiz Questions

Answer the following questions in the provided markdown file before turning in this exercise:

- What is the `className` property of element objects?
  It is a property of DOM elements that allows you to access and manipulate the CSS class(es) applied to an element. It represents a space-separated list of class names associated with the element.

- How do you update the CSS class attribute of an element using JavaScript?
  You do this by assigning the update to the 'className' property.

- What is the `textContent` property of element objects?
  It is a property of DOM elements that represents the text content of an element and all it's descendants.

- How do you update the text within an element using JavaScript?
  You do this by assigning the update to the 'textContent' property.

- Is the `event` parameter of an event listener callback always useful?
  No, because you might not need to access any properties of the event object.

- Would this assignment be simpler or more complicated if we didn't use a variable to keep track of the number of clicks?
  It would be more complicated because then not only would we have to type out the reference expression every time we wanted to access the DOM object, but we would also be querying the DOM that many times. If we were to use variables, we'd not only be typing less, but also only be querying the DOM for the number of times we store the query into the variable.

- Why is storing information about a program in variables better than only storing it in the DOM?
  It reduces the number of times we query the DOM.

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

# dom-event-delegation-quiz-notes

## Quiz Questions

Answer the following questions in the provided markdown file before turning in this exercise:

- What is the `event.target`?

  It points to the element that triggers the event.

- Why is it possible to listen for events on one element that actually happen its descendent elements?

  It it due to event bubbling, which is the propagation from the innermost nested element to the outermost ancestor.

- What DOM element property tells you what type of element it is?

  tagName

- What does the `element.closest()` method take as its argument and what does it return?

  CSS selector string

- How can you remove an element from the DOM?

  You can attach the 'remove()' method to the 'Element' object that is referencing the tag that you want to remove.

- If you wanted to insert new clickable DOM elements into the page using JavaScript, how could you avoid adding an event listener to every new element individually?

  You could attach an event listener to a parent element that is a common ancestor.

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

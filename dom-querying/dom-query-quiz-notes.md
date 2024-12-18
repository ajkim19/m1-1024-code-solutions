# dom-query-quiz-notes

## Quiz Questions

Answer the following questions in the provided markdown file before turning in this exercise:

- Why do we log things to the console?
  It is to provide information about an event, or whatever else, that has occurred.

- What is a "model"?
  It is a structured representation.
  The Document Object Model (DOM) is a structured representation of the web page, which can then be interacted with and manipulated using JavaScript.

- Which "document" is being referred to in the phrase Document Object Model?
  It is referring to HTML document.

- What is the word "object" referring to in the phrase Document Object Model?
  It is referring to an element in an HTML document.

- What is a DOM Tree?
  It is the tree-like structure of HTML elements.

- Give two examples of `document` methods that retrieve a single element from the DOM.
  querySelector(selector), getElementById(id)

- Give one example of a `document` method that retrieves multiple elements from the DOM at once.
  querySelectorAll(selector)

- Why might you want to assign the return value of a DOM query to a variable?
  Once the reference has been saved in a variable, accessing the element again does not require another search.

- What `console` method allows you to inspect the properties of a DOM element object?
  console.dir()

- Why would a `<script>` tag need to be placed at the bottom of the HTML content instead of at the top?
  The browser needs to parse all of the elements in the HTML page before the JavaScript code can access them.

- What does `document.querySelector()` take as its argument and what does it return?
  It takes a selector as an argument and returns the first element that matches a specified selector.

- What does `document.querySelectorAll()` take as its argument and what does it return?
  It takes a selector as an argument and returns a NodeList of all elements in the document that match a specified selector.

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

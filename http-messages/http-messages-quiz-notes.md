# http-messages-quiz-notes

## Quiz Questions

Answer the following questions in the provided markdown file before turning in this exercise:

- What is a client?

  - A client is a device or application (e.g. web browser) that sends requests to a server to retrieve or manipulate data.

- What is a server?

  - A server is a computer or software that listens for client requests, processes them, and sends back responses.

- Which HTTP method does a browser issue to a web server when you visit a URL?

  - `GET`

- What three things are on the start-line of an HTTP **request** message?

  1. HTTP Method (e.g., GET, POST, PUT, DELETE)
  2. Request Target (e.g., /index.html, /api/users)
  3. HTTP Version (e.g., HTTP/1.1, HTTP/2)

- What three things are on the start-line of an HTTP **response** message?

  1. HTTP Version (e.g., HTTP/1.1, HTTP/2)
  2. Status Code (e.g., 200 OK, 404 Not Found, 500 Internal Server Error)
  3. Reason Phrase (a textual description of the status code)

- What are HTTP headers?

  - HTTP headers are key-value pairs sent in both requests and responses. They provide metadata about the request/response, such as content type, authentication, and caching rules.

- Where would you go if you wanted to learn more about a specific HTTP Header?

  - https://developer.mozilla.org/en-US/docs/Web/HTTP/Messages

- Is a body required for a valid HTTP request or response message?

  - No, a body is not always required.
    - GET and DELETE requests typically do not have a body.
    - POST and PUT requests usually have a body with data.
    - Responses with status codes like 204 No Content or 304 Not Modified do not include a body.

///////////////////

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

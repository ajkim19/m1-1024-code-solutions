# typescript-and-json

Converting data to and from JavaScript Object Notation.

## Before You Begin

Be sure to check out a new branch from `main` for this exercise. Detailed instructions can be found [**here**](../../guides/starting-an-exercise).

## Quiz Questions

Answer the following questions in the provided markdown file before turning in this exercise:

- What is JSON?
- What are serialization and deserialization?
- Why are serialization and deserialization useful?
- How do you serialize a data structure into a JSON string using TypeScript?
- How do you deserialize a JSON string into a data structure using TypeScript?

### Introduction

JSON (JavaScript Object Notation) is a lightweight data-interchange format that has become widely popular in web development. It's valued for its simplicity and ease of use, particularly in encoding and exchanging data between a server and web application. JSON's format, which closely resembles JavaScript object literals, makes it highly readable and easy to understand. This simplicity allows for quick parsing and generating of data, making JSON an ideal choice for many modern web applications that require efficient data handling. Its adoption has been further bolstered by its compatibility with a wide range of programming languages, making it a versatile choice for data interchange.

Before JSON, [XML](https://en.wikipedia.org/wiki/XML) was a popular data interchange format, but JSON's simplicity and readability has made it the preferred format.

## What is JSON?

JSON, which stands for JavaScript Object Notation, is a lightweight data-interchange format that is easy for humans to read and write and easy for machines to parse and generate. It is based on a subset of the JavaScript Programming Language.

JSON is a text format that is completely language independent but uses conventions that are familiar to programmers of the C-family of languages, including C, C++, C#, Java, JavaScript, Python, and many others. These properties make JSON an ideal data-interchange language.

JSON is often used when data is sent from a server to a web page. It is "self-describing" and easy to understand. The JSON format makes it possible to store complex data structure in a format that is easy to read and debug. It supports two structures: objects (unordered collections of key-value pairs) and arrays (ordered sequences of values).

Here's a simple example of JSON:

```JSON
{
  "name": "John",
  "age": 30,
  "city": "New York"
}
```

In this example, we have a JSON object that describes a person, with properties for their name, age, and city. Each property has a key (like "name") and a value (like "John").

## Serialization

Serialization, in the context of JSON, is the process of converting a data structure or object state into a format that can be stored or transmitted and reconstructed later. When the resulting series of bits is reread according to the serialization format, it can be used to create an identical clone of the original object.

In simpler terms, JSON serialization is the process of transforming data into a string representation that can be easily stored or sent over a network. This is particularly useful in web development, where you often need to send data from a server to a client or vice versa.

For example, consider the following JavaScript object:

```typescript
const person = {
  name: 'John',
  age: 30,
  city: 'New York',
};
```

You can serialize this object into a JSON string using the `JSON.stringify` method:

```typescript
const json = JSON.stringify(person);
```

Now `json` is a string that looks like this `"{\"name\":\"John\",\"age\":30,\"city\":\"New York\"}"`. This string can be easily stored in a database or sent over a network. Later, you can deserialize it back into a JavaScript object using the `JSON.parse` method.

## Exercise

Here are the fundamental aspects of JSON syntax:

**Data Representation:**

- JSON represents data as name/value pairs, similar to JavaScript object properties.
- A name/value pair consists of a field name (in double quotes), followed by a colon, and a value.

**Data Types:**

- **Strings:** Enclosed in double quotes. For example, `"name": "John"`.
- **Numbers:** Integer or floating-point. For example, `"age": 30`.
- **Boolean:** True or false. For example, `"employed": true`.
- **Array:** An ordered list of values, enclosed in square brackets. For example, `"colors": ["red", "green", "blue"]`.
- **Object:** A collection of key/value pairs, enclosed in curly braces. For example, `"employee": { "name": "John", "age": 30 }`.
- **null:** Represents a null value. For example, `"middleName": null`.

**Example of JSON Data:**

```json
{
  "employee": {
    "name": "Emma",
    "age": 28,
    "department": "Development",
    "skills": ["JavaScript", "React", "Node.js", "PostgreSQL", "Express.js"]
  }
}
```

1. Change directories into `typescript-and-json`. Use the TypeScript compiler to watch changes in your TypeScript file and compile it to JavaScript. This will compile your TypeScript into JavaScript in a `main.js` file and watch for any changes you make in your TypeScript file.

   ```sh
   cd typescript-and-json
   npx tsc --watch
   ```

1. Within `main.ts`:
   1. Create an `Array` containing three `object` literals, representing books.
      - Give each book an `isbn`, a `title`, and an `author` (all `string`).
      - Log the `Array` of books and its type to the console (see [typeof](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/typeof)). Remember to label each thing you log to the console.
   1. Use [JSON.stringify](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON/stringify) to create a JSON `string` of your books `Array`
      - Log the result and its type to the console (see [typeof](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/typeof)).
   1. Create a `string` in JSON format holding data representing a student with a `number id` and a `string name`.
      - Type out the JSON string manually, quotes and all, creating a string in your code that looks exactly like a JSON object.
      - Example: Imagine we have a book titled "The Great Gatsby", written by "F. Scott Fitzgerald" in the year 1925. Here's how the string would look:
      ```typescript
      const bookJSON =
        '{"title": "The Great Gatsby", "author": "F. Scott Fitzgerald", "year": 1925}';
      ```
      - Log the `string` and its type to the console (see [typeof](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/typeof)).
   1. Use [JSON.parse](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON/parse) to create a JavaScript `object` from your JSON `string`
      - Log the result and its type to the console (see [typeof](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/typeof)).

## Submitting Your Solution

When your solution is complete, submit a Pull Request on GitHub. Detailed instructions can be found [**here**](../../guides/submitting-your-solution).

## Additional Resources

1. Read about JSON in the MDN WebDocs - [No, really, what is JSON?](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Objects/JSON#No_really_what_is_JSON).

1. Read about the purpose of serialization on Stack Overflow - [What is serialization?](https://stackoverflow.com/questions/633402/what-is-serialization). Lots of technical terms get discussed on Stack Overflow!

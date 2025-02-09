# typescript-async-await

Manage asynchronous tasks with async and await.

## Before You Begin

Be sure to check out a new branch from `main` for this exercise. Detailed instructions can be found [**here**](../../guides/Exercise-Workflow_Starting-an-Exercise).

## Quiz

Answer the following questions in the provided markdown file before turning in this exercise:

- What are the `async` and `await` keywords used for?
- How do `async` and `await` differ from `Promise.then` and `Promise.catch`?
- When do you use `async`?
- When do you use `await`? When do you _not_ use `await`? (What happens if you `await` a synchronous function?)
- How do you handle errors with `await`?
- What do `try`, `catch` and `throw` do? When do you use them?
- What happens if you forget to use `await` on a Promise? In that case, what happens to the Promise rejection?
- Which style of asynchronous programming do you prefer — callbacks, `Promise.then`, or `async/await`? Why?

## Introduction

There are several challenges when working with asynchronous code, such as:

- Responding to errors
- Reporting errors
- Writing understandable code logic
- Organizing code

Over the years, there have been several attempts to writing asynchronous code. The most prominent are:

- Callback functions
- Promises
- async/await

The first approach was callback functions. They were used extensively in early Node. A callback function looks like this:

```js
function foo() {
  doAsyncWork(params, (err, data) => {
    if (err) {
      handleError(err);
    } else {
      handleSuccess(data);
    }
  });
}
```

The callback function (the arrow function passed as the second argument above) gets called asynchronously after the work is completed. With callbacks, it turned out to be challenging to chain one asynchronous call after another, handle errors, and write readable code.

The next approach was Promises, which were first invented in 1976. Several versions of Promises were experimented with, and Promises were adopted into the JavaScript language with ES6. A Promise version of the above code looks like this:

```js
function foo() {
  doAsyncWork(params)
    .then((data) => {
      handleSuccess(data);
    })
    .catch((error) => {
      handleError(error);
    });
}
```

The callback functions passed to `.then` and `.catch` get called asynchronously after the work is completed. As you can see, this code is much easier to write and read, and chaining Promises one after another is nicely handled. Error handling is also greatly improved since the error from one Promise is passed down the chain to the final `catch` handler. Although Promises have been successful, writing code that chains Promises and carefully handles errors is still challenging. Further, humans are usually better at reasoning about synchronous, sequential code, than about code that is spread across multiple files, as frequently happens with Promise-based code. For these reasons, efforts continued to find a way to write asynchronous code as if it were sequential. The result was `async and await`.

With `async and await`, the code is read sequentially. The `await` keyword is used to indicate that the JavaScript Runtime should "wait" or "pause" until the asynchronous function completes. (The JS Runtime does this by "magic", by generating a whole bunch of code that makes it appear to the programmer that execution has paused at that point, although the code still executes asynchronously and other tasks can continue to run.) Further, errors are handled using the standard JavaScript `try/catch/finally` exception handling mechanism.

An `async and await` version of the above code looks like this:

```js
async function foo() {
  try {
    const data = await doAsyncWork(params);
    // `data` is the Promise's `resolve` value.
    const result = handleSuccess(data);
    return result; // JS wraps `result` in a Promise
  } catch (error) {
    // `error` is the Promise's `reject` value.
    handleError(error);
  }
}
```

As can be observed, the code is now written and read sequentially. Although Promises are heavily used behind the scenes, they do not explicitly appear in the code. As a result, code using `async and await` is usually easier to follow, understand, and reason about. Its power really shines when asynchronous functions are chained, with the results of one function being used in a subsequent function.

### Example Code

Let's look at another example and a breakdown:

```javascript
function waitFor(seconds: number): Promise<string> {
  return new Promise((resolve, reject) => {
    if (seconds <= 0) {
      reject(new Error('Seconds must be greater than 0'));
      return;
    }

    setTimeout(() => {
      resolve(`Waited for ${seconds} seconds`);
    }, seconds * 1000);
  });
}

// Using .then and .catch
function runThenCatch(): void {
  waitFor(3)
    .then((message) => {
      console.log(message);
    })
    .catch((error) => {
      console.log(`Error: ${error}`);
    });
}

runThenCatch();

async function runAsyncAwait(): Promise<void> {
  try {
    const message = await waitFor(3);
    console.log(message);
  } catch (error) {
    console.log(`Error: ${error}`);
  }
}

runAsyncAwait();
```

### Code Breakdown

1. **`waitFor(seconds) { ... }`:** This function returns a Promise that resolves after waiting for a specified number of seconds, just like in our previous example.

2. **`async function run() { ... }`:** We define an asynchronous function named `run`.

3. **`try { ... } catch (error) { ... }`:** Inside the `run` function, we use a try-catch block to handle both the resolved and rejected cases.

4. **`const message = await waitFor(3);`:** We use the `await` keyword to pause execution until the Promise returned by `waitFor(3)` is either fulfilled or rejected.

5. **`console.log(message);` and `console.log(`Error: ${error}`);`:** Depending on whether the Promise is resolved or rejected, we log the appropriate message or error to the console.

## Exercise

> **Note:** To run the code in this exercise, you will use the terminal to execute the TypeScript files, using the TypeScript execution program, [tsx (**T**ype**S**cript E**x**ecute)](https://github.com/privatenumber/tsx). You can check if you have `tsx` installed by executing the command `tsx --version`. If you do not have it installed, you can install it with `npm install -g tsx`.

In this exercise, we will learn about the `async` and `await` keywords, the `try` and `catch` keywords, and get some practice both using `async` and `await` and converting existing Promise-based code to `async` and `await`.

1. Read the file `await.ts`. It has several functions that make calls to the `read` function using `Promise.then`. `read` is an arbitrary function that returns a promise which resolves to a `string`. It is defined in `read.ts`, which you can examine if you are curious. Run `await.ts` to see what it does.
   ```sh
   tsx await.ts
   ```
1. Edit `await.ts` to convert all the calls from `Promise.then` to `async and await`. Do not use `try/catch` in this file. We'll do that next. Run the file to verify that it works the same as before.

### Exceptions

Now let's get back to exceptions.

1. Read the MDN Guide about [try and catch](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Control_flow_and_error_handling#exception_handling_statements).
1. Read the file `exceptions.ts`. It has several functions that call the `read` function with `false` to force it to reject with a `new Error`. Run `exceptions.ts` to see the error messages it logs.
   ```sh
   tsx exceptions.ts
   ```
1. Edit `exceptions.ts` to convert all the calls from `Promise.then` and `Promise.catch` to `async and await` with `try/catch`. Run the file to verify that it works the same as before.
   - **Note:** Make sure the error messages are the same!
1. Play around with it by changing the 2nd parameter to `read` from `false` to `true` in several places. Make sure you understand what is happening each time.
1. Once you have finished the previous step, copy the file `exceptions.ts` to `exceptions-best.ts`.
   ```sh
   cp exceptions.ts exceptions-best.ts
   ```

### Exception Bubbling

Now we'll briefly explore how exceptions bubble up the call stack.

1. Edit `exceptions-best.ts` to remove all the `try/catch` blocks from each of the functions.
1. Wrap the calls to the functions at the bottom of the file in a single `try/catch` block. Run `exceptions-best.ts` to verify that you still get an error message (there should be only one).
1. Play around with it by changing the 2nd parameter to `read` from `false` to `true` in several places. Make sure you understand what is happening each time.
1. Understand why this works. What happens to the exception thrown in each of the `throwXxx` functions?

## Submitting Your Solution

When your solution is complete, submit a Pull Request on GitHub. Detailed instructions can be found [**here**](../../guides/Exercise-Workflow_Submitting-Your-Solution).

## Additional Reading

1. Read the MDN Guide about [async and await](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Asynchronous/Promises#async_and_await). This guide provides additional information about Promises and would be a good resource if you are still working to understand and comprehend Promises.
1. Scan the MDN documentation on the [async](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/async_function) and [await](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/await) keywords.

## Code Reading Example

```typescript
// We are definining an async function named runAsyncAwait that has no parameters. It's return type is Promise<void>
async function runAsyncAwait(): Promise<void> {
  // There is a try statement with an opening curly brace for the try block
  try {
    // we are calling the waitFor method with one argument, 3, and awaiting the promise
    const message = await waitFor(3);
    console.log(message);
  } catch (error) {
    console.log(`Error: ${error}`);
  }
}
```

# npm-intro-quiz-notes

## Quiz Questions

Answer the following questions in the provided markdown file before turning in this exercise:

- What is NPM?

  - NPM (Node Package Manager) is the default package manager for JavaScript and the largest package ecosystem in the world. It helps developers install, share, and manage dependencies (libraries, tools, and frameworks) in their projects.

- What is a package?

  - Packages (or sometimes modules) are directories with files that contain bits of reusable code

- What are some other popular package managers?

  - npx, chocolatey, pip

- How can you create a `package.json` with `npm`?

  - `npm init`

- What is a dependency and how do you add one to a package?

  - A dependency is an external package your project needs to function properly.

- What happens when you add a dependency to a package with `npm`?

  - The package is downloaded and added to the node_modules directory.
  - It is listed under "dependencies" in package.json.

- What is a devDependency and how do you add one to a package?

  - A devDependency is a package needed for development (e.g., testing frameworks such as jest, linters such as eslint, build tools) but not required in production.

- How do you define and run `npm` scripts? Why are these useful?
  - You define `npm` scripts by editing the object in `package.json` under the key `"scripts"`.
  - The commands will the keys (e.g. `"start"`) and the script will be the value to those keys (e.g. `"node index.js"`)
    - `"scripts": { "start": "node index.js" }`

/////////////

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

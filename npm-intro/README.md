# npm-intro

The original package manager for both Node.js and frontend web applications.

## Before You Begin

Be sure to check out a new branch from `main` for this exercise. Detailed instructions can be found [**here**](../../guides/Exercise-Workflow_Starting-an-Exercise).

## Quiz

Answer the following questions in the provided markdown file before turning in this exercise:

- What is NPM?
- What is a package?
- What are some other popular package managers?
- How can you create a `package.json` with `npm`?
- What is a dependency and how do you add one to a package?
- What happens when you add a dependency to a package with `npm`?
- What is a devDependency and how do you add one to a package?
- How do you define and run `npm` scripts? Why are these useful?

## Exercise

**For this exercise's commands to work properly, your terminal needs to be within the exercise's directory.** In your terminal, change directories with the `cd` command. This will change which directory your future commands are executed in.

```bash
cd name-of-exercise
```

**⚠️ Your terminal prompt should look like this with the name of the exercise at the end of the path as well as the branch name in `()` parenthesis. ⚠️**

#### Yes ✅

```shell
/workspaces/c000-code-solutions/name-of-exercise (name-of-exercise) λ
```

#### No ❌

```shell
/workspaces/c000-code-solutions (name-of-exercise) λ
```

1. Read about the NPM website, CLI, and registry at [npmjs.com](https://docs.npmjs.com/about-npm/).
1. Watch [this video](https://www.youtube.com/watch?v=pa4dc480Apo) describing what `npm` is.
1. NPM uses the file in your home directory named `.npm-init.js` to customize creating `package.json` files. To customize for subsequent Node.js and React exercises, copy the provided `.npm-init.js` file to your home directory:

```bash
cp .npm-init.js ~/.npm-init.js
```

1. [Create a `package.json`](https://docs.npmjs.com/creating-a-package-json-file#creating-a-default-packagejson-file) in your `npm-intro` directory using the `npm` command. Verify that it has fields `"type": "module"` and `"main": "server.js"`.
1. Install the [`jquery`](https://www.npmjs.com/package/jquery) package as a dependency [using the `npm install` command](https://docs.npmjs.com/cli/install.html).
1. Check that your `package.json` has been updated to include `jquery` as a dependency.
1. Notice that a `node_modules` directory was created within `npm-intro`.<br>**Note:** Your code editor (such as VS Code) may not immediately display this directory in its file explorer. The directory should show up if you use the `ls` command. In the case of VS Code, there is a small "Refresh Explorer" button at the top of the file explorer.
1. You can also add packages to your project that are only used during development, such as `eslint`, which checks your code for potential errors, or `jest`, which is a popular unit testing framework. These dependencies are installed by adding the `--save-dev` option when you install the package. They are listed in `package.json` in the `devDependencies` field.
1. Install [eslint](https://eslint.org/) as a development dependency using the `npm install --save-dev` command.
1. Check that `eslint` has been added to your `package.json` as a `devDependency`.
1. Another nice feature of `npm` is the ability to run arbitrary shell commands using the [scripts](https://docs.npmjs.com/cli/v9/commands/npm-run-script) field of `package.json`. These scripts are often used to make command development commands available without the need to remember or type long arguments, and to share them across the team.
1. Create a simple script in your `package.json` named `hello` that prints `Hello, LearningFuze` to the terminal.

- Add a `scripts` object with one key, `"hello"`, that has the value `"echo Hello, LearningFuze"`. It should look like:
  ```json
  "scripts": {
    "hello": "echo Hello, LearningFuze"
  }
  ```
- Run this script from the terminal using `npm run hello` and verify that it prints the message.

1. The `package.json` file and `node_modules` directory have become the _de facto_ standard for sharing packages. However, `npm`, as it has grown, has become sluggish and inefficient. As a result, alternative package managers have arisen. The most popular is [Yarn](https://yarnpkg.com/), developed by Facebook (which also develops React and Jest). Another lightweight competitor gaining popularity is [PNPM](https://pnpm.io/). Glance through these websites, though don't spend much time on them. We will be using `npm` since it is the foundational package manager that all Web developers need to be familiar with. However, in the industry you may encounter other package managers.

### Finish

**For `git` to work properly, your terminal needs to be within the root of your local repository.** You have been executing commands in your exercise directory, but it's time to return "up" one level. In your terminal, change directories with the `cd` command as shown in the example below. This will change which directory your future commands are executed in.

**`..` means "parent directory".**

```bash
cd ..
```

#### Yes ✅

```shell
/workspaces/c000-code-solutions (name-of-exercise) λ
```

#### No ❌

```shell
/workspaces/c000-code-solutions/name-of-exercise (name-of-exercise) λ
```

## Submitting Your Solution

When your solution is complete, submit a Pull Request on GitHub. Detailed instructions can be found [**here**](../../guides/Exercise-Workflow_Submitting-Your-Solution).

# command-line-basics

Basic command-line literacy for [UNIX-like operating systems](https://en.wikipedia.org/wiki/Unix-like).

## Before You Begin

Be sure to check out a new branch from `main` for this exercise. Detailed instructions can be found [**here**](../../guides/Exercise-Workflow_Starting-an-Exercise).

## Quiz

Answer the following questions in the provided markdown file before turning in this exercise:

- What is a CLI?
- What is a GUI?
- Give at least one use case for each of the commands listed in this exercise.
  - `man`
  - `cat`
  - `ls`
  - `pwd`
  - `echo`
  - `touch`
  - `mkdir`
  - `mv`
  - `rm`
  - `cp`
- What are the three virtues of a great programmer?

### Introduction

Many computer users today are accustomed to a specific type of interface: a [graphical user interface](https://en.wikipedia.org/wiki/Graphical_user_interface) _aka_ GUI. However, applications that use a GUI are usually aimed at _consumers_ of technology (end users), not _producers_ of technology (developers). There are certainly many GUI-based applications in wide use by developers. This lesson was authored using a GUI text editor (VS Code). **However, GUI-based applications are not always readily available for performing technical tasks.**

Many new developers feel intimidated by [command-line interfaces](https://en.wikipedia.org/wiki/Command-line_interface). A CLI may be particularly alien to you if you've grown up using GUIs your entire life. But as you become more comfortable using the command-line, you'll probably find that you become more efficient and more precise while controlling your computer to perform development tasks.

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

### Man Pages

During this exercise you will be looking up command information with the `man` command. `man` is an interface to the on-line reference manuals. Try it out!

```bash
man man
```

Use the up and down arrows (or PgUp and PgDn) to scroll the page. Press `space` to jump down a page at a time. Press `q` to close the manual.

#### `cat`

1. Use your terminal to open the user manual for the `cat` command.
   ```bash
   man cat
   ```
1. Read the `NAME`, `SYNOPSIS`, and `DESCRIPTION` sections. Only read the first part of the description. If you want, you can scan the options list, but we won't be using any of those options for now.
1. Use the `cat` command to print the contents of `laziness.txt`, `impatience.txt`, and `hubris.txt` one-by-one to your terminal.
1. Use the `cat` command to combine the contents of those files and print the result to the terminal.
1. Use the `cat` command to combine the contents of those files and write the result to a new file named `three-virtues.txt` using the `>` redirect operator:
   ```bash
   cat laziness.txt impatience.txt hubris.txt > three-virtues.txt
   ```
1. Use the `cat` command to print the contents of your new `three-virtues.txt` file to the terminal.

#### `ls`

1. Use your terminal to open the user manual for the `ls` command.
   ```bash
   man ls
   ```
1. Read the `NAME`, `SYNOPSIS`, and `DESCRIPTION` sections. Only read the introductory paragraphs of the description as well as the `-a` and `-F` options for now.
1. Use the `ls` command to list the contents of your current working directory. Try it again with the `-a` and `-F` options.
1. Use the `ls` command to list the contents of the `lfz-staff/` directory. Try it again with the `-a` and `-F` options.
1. Use the `ls` command to list the contents of the `lfz-staff/` directory and write the results to a new file at `lfz-staff/contents.txt` like this:
   ```bash
   ls -aF lfz-staff > lfz-staff/contents.txt
   ```
1. Use the `cat` command to print contents of your new `lfz-staff/contents.txt` file to the terminal.

#### `pwd`

1. Use your terminal to open the user manual for the `pwd` command.
   ```bash
   man pwd
   ```
1. Read the `NAME`, `SYNOPSIS`, and `DESCRIPTION` sections.
1. Use the `pwd` command to print your current working directory.
1. Use the `pwd` command to write your current working directory to a new file named `i-was-here.txt` like this:
   ```bash
   pwd > i-was-here.txt
   ```
1. Use the `ls` command to list the contents of your current working directory, it should include the new file you just created.
1. Use the `cat` command to print the contents of `i-was-here.txt` to the terminal.

#### `echo`

1. Use your terminal to open the user manual for the `echo` command.
   ```bash
   man echo
   ```
1. Read the `NAME`, `SYNOPSIS`, and `DESCRIPTION` sections. Only read the first bit of the description, it's not useful to read through all of the options right now.
1. Use the `echo` command to print the string `'Hello, World!'` to the terminal.
1. Use the `echo` command to write the string `'Hello, World!'` to a new file named `hello.txt` like this:
   ```bash
   echo 'Hello, World!' > hello.txt
   ```
1. Use the `ls` command to list the contents of your current working directory, it should include the new file you just created.
1. Use the `cat` command to print the contents of `hello.txt` to the terminal.

#### `touch`

1. Use your terminal to open the user manual for the `touch` command.
   ```bash
   man touch
   ```
1. Read the `NAME`, `SYNOPSIS`, and `DESCRIPTION` sections. You can ignore the options for now.
1. Use the `touch` command to create a new file named `tag-youre-it.txt`.
1. Use the `touch` command to create a new file named `boop.txt` inside of the `snoot/` directory (_i.e._ `snoot/boop.txt`).
1. Use the `ls` command to list the contents of the `snoot/` directory.

#### `mkdir`

1. Use your terminal to open the user manual for the `mkdir` command.
   ```bash
   man mkdir
   ```
1. Read the `NAME`, `SYNOPSIS`, and `DESCRIPTION` sections. You can ignore all of the options except `-p` for now.
1. Use the `mkdir` command to create a new directory named `parent`.
1. Use the `ls` command to verify that your `parent/` directory has been created.
1. Use the `mkdir` command with the `-p` option to create nested `parent/child/grandchild` directories.
1. Use the `touch` command to create a `.gitkeep` file inside of `parent/child/grandchild` so that the directories are added when you commit. Git ignores empty directories.
1. Use `ls -a` to verify that your `.gitkeep` file is inside `parent/child/grandchild`. As previously covered, `-a` lets you see dot files that are hidden by default.

#### `mv`

1. Use your terminal to open the user manual for the `mv` command.
   ```bash
   man mv
   ```
1. Read the `NAME`, `SYNOPSIS`, and `DESCRIPTION` sections. You can ignore the options for now.
1. Use the `mv` command to rename the `pokiemans` directory to `pokemon`.
1. Use the `ls` command to verify that you successfully renamed the directory.

#### `rm`

**Be careful with this command, it deletes things instantly, without warning, and cannot be undone.**

1. Use your terminal to open the user manual for the `rm` command.
   ```bash
   man rm
   ```
1. Read the `NAME`, `SYNOPSIS`, and `DESCRIPTION` sections. You can ignore all but the `-r` and `-f` options for now.
1. Use the `rm` command to delete the `lol.txt` file.
1. Use the `ls` command to verify that `lol.txt` was deleted.
1. Use the `rm` command with the `-r` option to remove the `kill-me/` directory and delete all of its contents.
1. Use the `ls` command to verify that `kill-me/` was removed.

#### `cp`

1. Use your terminal to open the user manual for the `cp` command.
   ```bash
   man cp
   ```
1. Read the `NAME`, `SYNOPSIS`, and `DESCRIPTION` sections. You can ignore all of the options, but you might be interested in the `-r` option in the future.
1. Use the `cp` command to make a copy of the `and-then.txt` named `no-and-then.txt`.
1. Use the `ls` command to verify that `and-then.txt` and `no-and-then.txt` both exist in your current working directory.
1. Use the `cat` command to verify that `and-then.txt` and `no-and-then.txt` contain the same content.

#### `history`

1. Use your terminal to open the user manual for the `history` command.
   ```bash
   man history
   ```
1. Read the `DESCRIPTION` section.
1. Use the `history` command to print all of your recent command line commands to your terminal.
1. Take a screenshot of the output of the `history` command. **This will be the screenshot you include in your Pull Request**.
1. Create a new file named `command-history.txt` containing your command line history.
   ```bash
   history > command-history.txt
   ```

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

# string-manipulation-3

JavaScript string manipulation practice with unit tests.

## Before You Begin

Be sure to check out a new branch from `main` for this exercise. Detailed instructions can be found [**here**](../../guides/starting-an-exercise).

## Exercise

Remember, `String`s [are Array-like](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String#Character_access) and have a lot of [useful methods](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String#Methods_2).

For this exercise you will be implementing several generic string manipulation functions. You are given a description of each function, a suite of unit tests for each function, and an empty JavaScript file in which to write your implementation.

Your goal is to define each function according to its description, such that all of its tests pass.

Begin by skimming through `index.html` in your code editor, then opening it in your web browser. You should see **`ReferenceError: ... is not defined`** a few times on the page.

Then, following the specifications below, complete each of the functions defined in the provided `.js` files. **Each function should be defined in its own file.**

1. ### `isPalindromic(string)`

   #### Parameters

   - `string` - any JavaScript `String`

   #### Return Value

   A `Boolean` indicating whether or not `string` is a [palindrome](https://en.wikipedia.org/wiki/Palindrome).

   #### Examples

   ```js
   isPalindromic('bob'); // -> true
   isPalindromic('alice'); // -> false
   isPalindromic('racecar'); // -> true
   isPalindromic('rasecar'); // -> false
   isPalindromic('taco cat'); // -> true
   isPalindromic('sam i am'); // -> false
   ```

1. ### `isAnagram(firstString, secondString)`

   #### Parameters

   - `firstString` - any JavaScript `String`
   - `secondString` - any JavaScript `String`

   #### Return Value

   A `Boolean` indicating whether or not `secondString` is an [anagram](https://en.wikipedia.org/wiki/Anagram) of `firstString`.

   #### Examples

   ```js
   isAnagram('restful', 'fluster'); // -> true
   isAnagram('dormitory', 'dirty room'); // -> true
   isAnagram('roses', 'horse'); // -> false
   isAnagram('debit card', 'bad credit'); // -> true
   isAnagram('nearby there', 'nearly three'); // -> false
   isAnagram('school master', 'the classroom'); // -> true
   isAnagram('ludicrous', 'ridiculous'); // -> false
   isAnagram('anagram', 'nag a ram'); // -> true
   isAnagram('anagram', 'nag a ram'); // -> true
   isAnagram('red dad', 'rad ede'); // -> false
   ```

1. ### `reverseWords(string)`

   #### Parameters

   - `string` - any JavaScript `String`

   #### Return Value

   - A version of `String` with every character of each word reversed, but the words in their original order.

   #### Examples

   ```js
   reverseWords('All Code All Day'); // -> "llA edoC llA yaD"
   reverseWords('What is unit testing?'); // -> "tahW si tinu ?gnitset"
   reverseWords('follow your passion'); // -> "wollof ruoy noissap"
   reverseWords('Hello, how are you?'); // -> ",olleH woh era ?uoy"
   ```

1. ### `titleCase(title)`

   #### Parameters

   - `title` - A JavaScript `String` representing a book title

   #### Return Value

   The original `title`, but with [APA Title Case Style](https://blog.apastyle.org/apastyle/2012/03/title-case-and-sentence-case-capitalization-in-apa-style.html) applied.

   #### Rules Summary

   **NOTE:** Your solution should implement these rules and assume nothing else about your input strings. **_Any_** book title should work.

   - Capitalize the first word of the title and of any subtitle.
   - Capitalize all “major” words (nouns, verbs, adjectives, adverbs, and pronouns) in the title, including the second part of hyphenated major words (e.g., `Self-Report` not `Self-report`).
   - Capitalize all words of four letters or more.

   This boils down to using lowercase only for “minor” words of three letters or fewer, namely, for conjunctions (**words like and, or, nor, and but**), articles (**the words a, an, and the**), and prepositions (**words like as, at, by, for, in, of, on, per, and to**), as long as they aren’t the first word in a title or subtitle.

   #### Special Cases

   **You many _only_ "hard code" these special cases in your solution, aside from the "minor" words listed above.**

   - **JavaScript** is always cased **JavaScript**.
   - **API** is a "known" acronym.

   #### Examples

   ```js
   titleCase('composing software');
   // -> "Composing Software"
   titleCase('high performance browser networking');
   // -> "High Performance Browser Networking"
   titleCase('node.js in action');
   // -> "Node.js in Action"
   titleCase('professional JavaScript for web developers');
   // -> "Professional JavaScript for Web Developers"
   titleCase('secrets of the javascript ninja');
   // -> "Secrets of the JavaScript Ninja"
   titleCase('web audio api');
   // -> "Web Audio API"
   titleCase('javascript: the definitive guide');
   // -> "JavaScript: The Definitive Guide"
   titleCase('speaking Javascript: an in-depth guide for programmers');
   // -> "Speaking JavaScript: An In-Depth Guide for Programmers"
   ```

## Submitting Your Solution

When your solution is complete, submit a Pull Request on GitHub. Detailed instructions can be found [**here**](../../guides/submitting-your-solution).

# css-responsive-layout

Combining layout classes with media queries to create a responsive layout.

## Before You Begin

Be sure to check out a new branch from `main` for this exercise. Detailed instructions can be found [**here**](../../guides/Exercise-Workflow_Starting-an-Exercise).

## Quiz

Answer the following questions in the provided markdown file before turning in this exercise:

- What is a **breakpoint** in responsive Web design?
- What is the advantage of using a percentage (_e.g._ `50%`) width instead of a fixed (_e.g._ `px`) width for a "column" class in a responsive layout?
- If you introduce CSS rules for a smaller `min-width` _after_ the styles for a larger `min-width` in your style sheet, the CSS rules for the **smaller** `min-width` will "win". Why is that?

## Exercise Overview

In this exercise, we will dive into the concept of responsive layouts in CSS, a fundamental aspect of modern web design. You will explore how to use CSS media queries and breakpoints to adapt your layout and design based on the viewport size. By the end of the exercise, you will understand how to create a website that provides an optimal user experience regardless of the device it's viewed on.

## Resources

1. Read [The Beginner's guide to media queries](https://developer.mozilla.org/en-US/docs/Learn/CSS/CSS_layout/Media_queries) in the MDN Web Docs up until the section on **Active learning: mobile first responsive design**.

## Exercise

1. Read all of the HTML in `index.html` and notice how most of the "column" divs have more than one `col-` class on them. Also, notice that there is only one "row" containing many "columns".
1. Read the CSS rules in the provided `styles.css`.
1. Add an [`@media` CSS at-rule](https://developer.mozilla.org/en-US/docs/Web/CSS/@media) that is enabled when the `screen` is at least `576px` wide. Within the at-rule:
   - set the `flex-basis` of all `.col-sm-half` to be `50%` of their parent `.row` instead of `100%`.
1. Test the behavior of your page by expanding the browser window from narrow to wide.
1. Beneath that, add another [`@media` CSS at-rule](https://developer.mozilla.org/en-US/docs/Web/CSS/@media) that is enabled when the `screen` is at least `768px` wide. Within the at-rule:
   - set the `flex-basis` of all `.col-lg-third` to be one third of their parent `.row` instead of `100%`.
   - set the `flex-basis` of all `.col-lg-fourth` to be `25%` of their parent `.row` instead of `100%`.
1. Test the behavior of your page by expanding the browser window from narrow to wide.
1. Move your first `@media` at-rule below your second `@media` at-rule in your style sheet and test again to observe the behavior of the layout as the browser is expanded.
1. Undo your change in the previous step so that the `min-width: 576px` media query comes before the `768px` media query again.

### Final Result

<p align="middle">
  <img src="assets/css-responsive-layout.gif" alt="Responsive Layout">
</p>

## Submitting Your Solution

When your solution is complete, submit a Pull Request on GitHub. Detailed instructions can be found [**here**](../../guides/Exercise-Workflow_Submitting-Your-Solution).

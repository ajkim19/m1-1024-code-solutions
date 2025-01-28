# css-transitions-and-transforms

Using CSS to animate between user interface states & using the`transform` property to modify the appearance of HTML elements.

## Before You Begin

Be sure to check out a new branch from `main` for this exercise. Detailed instructions can be found [**here**](../../guides/starting-an-exercise).

## Quiz

Answer the following questions in the provided markdown file before turning in this exercise

- The `transition` property is shorthand for which four CSS properties?
- What does the `transform` property do?
- Give four examples of CSS transform functions.

## Exercise Overview

In this exercise, you will be learning about how to control the behavior of transitioning between two states of an element utilizing the `transition` property.

You will also be exposed to the `transform` property which can be used to manipulate how an element will appear on a web page.

## The `transition` property

The `transition` property in CSS is a shorthand property that allows you to add an effect between the changes of specific CSS properties. The effect smoothly transitions from one property value to another over a given duration. This can make changes appear more natural to the eye, enhancing the user experience.

The `transition` property combines four sub-properties:

- `transition-property`: Specifies the name of the CSS property to which the transition effect should be applied.

- `transition-duration`: Defines the duration over which transitions should occur.

- `transition-timing-function`: Describes how intermediate property keyframes are calculated, allowing for effects such as acceleration or deceleration during the transition.

- `transition-delay`: Defines a delay for the start of the transition.

Here's an example of the `transition` property in use:

```css
div {
  transition: background-color 2s ease-in-out 1s;
}
```

In this example, the `background-color` of the `div` will change over a duration of 2 seconds, following an `ease-in-out` timing function, and the transition will start after a delay of 1 second.

The `transition` property can be used to create a variety of effects and is powerful tool for enhancing the interactivity and dynamism of a website.

## The `transform` property

The `transform` property in CSS allows you to modify the visual appearance of how an element appears on a webpage. Using it, you can rotate, scale, skew, or translate an element. This means you can modify the appearance and position of an element without disrupting the normal flow of the document.

There are several functions you can use with the `transform` property:

- `rotate()`: Rotates an element clockwise from its original position, with a given degree.

- `scale()`: Increases or decreases the size of an element.

- `skew()`: Skews an element along the X and Y axis.

- `translate()`: Moves an element from its current position (left or right, up or down).

Here's an example of the `transform` property in use:

```css
div {
  transform: rotate(45deg) scale(1.5) translate(100px, 100px);
}
```

In this example, the `div` element will be rotated 45 degrees clockwise, scaled by 1.5 times its original size, and moved 100 pixels to the right and 100 pixels down.

The `transform` property is a powerful tool for creating complex visual effects, and it's often used in animations, transitions, and 2D/3D graphics. It's important to note that transformations do not affect the flow of other elements in the document, meaning they won't cause reflow or overflow.

## Exercise

1. Read the code in `index.html`.
1. Read the code in `styles.css`.
1. Modify the code in `styles.css` to complete the following:
   - Apply a [`transition`](#the-transition-property) to any `.card` so that its [`transform`](#the-transform-property) transitions in half a second.
   - Apply a `transition` to any `.custom-button` so that [**`all`**](https://developer.mozilla.org/en-US/docs/Web/CSS/transition-property) of it's changed properties transition in half a second.
   - Add a CSS rule that does the following for any `.custom-button` [when the user hovers their mouse over them](https://developer.mozilla.org/en-US/docs/Web/CSS/:hover):
     - Sets the background color to `red`.
     - Sets the [`rotate()` transform](https://developer.mozilla.org/en-US/docs/Web/CSS/transform-function/rotate) to `3deg`.
   - Add a CSS rule that sets the [`scale()` transform](https://developer.mozilla.org/en-US/docs/Web/CSS/transform-function/scale) of all `.card`s to `1.1` [when the user hovers their mouse over them](https://developer.mozilla.org/en-US/docs/Web/CSS/:hover).

**_NOTE:_** Transitions should be applied in the primary CSS rule for the target elements, **_not_** the rule whose selector includes the pseudoclass. Feel free to ask about this during the Q&A!

### Example

<p align="middle">
  <img src="assets/css-transitions-and-transforms.gif" alt="css-transitions-and-transforms">
</p>

## Submitting Your Solution

When your solution is complete, submit a Pull Request on GitHub. Detailed instructions can be found [**here**](../../guides/submitting-your-solution).

## Additional Reading

1. Read about the CSS `transition` property in [the MDN Web Docs](https://developer.mozilla.org/en-US/docs/Web/CSS/transition).

1. Read the introductory section of the [`transform` CSS property on MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/transform).

## Code Reading Example

```css
/* There is a new CSS ruleset selecting the class custom-button which is being hovered */
.custom-button:hover {
  /* The transform property is being assigned rotate(3deg) */
  transform: rotate(3deg);
}
```

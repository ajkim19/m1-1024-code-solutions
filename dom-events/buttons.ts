// Click Event
const classClickButton = document.querySelector('.click-button');

if (!classClickButton) throw new Error('classClickButton does not exist');

function handleClick(event: Event): void {
  console.log('button clicked');
  console.dir(event);
  console.log(event.target);
}

classClickButton.addEventListener('click', handleClick);

// Mouseover Event
const classHoverButton = document.querySelector('.hover-button');

if (!classHoverButton) throw new Error('classHoverButton does not exist');

function handleMouseover(event: Event): void {
  console.log('button hovered');
  console.dir(event);
  console.log(event.target);
}

classHoverButton.addEventListener('mouseover', handleMouseover);

// Double-click Event
const classDoubleClickButton = document.querySelector('.double-click-button');

if (!classDoubleClickButton)
  throw new Error('classDoubleClickButton does not exist');

function handleDoubleClick(event: Event): void {
  console.log('button double-clicked');
  console.dir(event);
  console.log(event.target);
}

classDoubleClickButton.addEventListener('dblclick', handleDoubleClick);

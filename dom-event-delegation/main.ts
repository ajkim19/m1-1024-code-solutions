const taskList = document.querySelector('.task-list');
if (!taskList) throw new Error('taskList does not exist');
const buttons = document.getElementsByTagName('button');
if (!buttons) throw new Error('buttons does not exist');
const taskListItems = document.getElementsByClassName('task-list-item');
if (!taskListItems) throw new Error('taskListItems does not exist');

taskList.addEventListener('click', (event: Event) => {
  const eventTarget = event.target as HTMLElement;

  console.log('eventTarget:', eventTarget);
  console.log('event.target.tagName:', eventTarget.tagName);

  const parentTarget = eventTarget.parentElement;
  if (!parentTarget) throw new Error('parentTarget does not exist');

  if (
    eventTarget.nodeName === 'BUTTON' &&
    parentTarget.className === 'task-list-item'
  ) {
    console.log(eventTarget, 'has been removed');
    eventTarget.remove();
  }
});

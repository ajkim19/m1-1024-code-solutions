'use strict';
function handleFocus(event) {
  console.log('focus event fired');
  const eventTarget = event.target;
  console.log('event.target.name', eventTarget.name);
}
function handleBlur(event) {
  console.log('blue event fired');
  const eventTarget = event.target;
  console.log('event.target.name', eventTarget.name);
}
function handleInput(event) {
  console.log('input event fired');
  const eventTarget = event.target;
  console.log('event.target.name', eventTarget.name);
}
const $inputName = document.querySelector('input#user-name');
if (!$inputName) throw new Error('$inputName does not exist');
const $inputEmail = document.querySelector('input#user-email');
if (!$inputEmail) throw new Error('$inputEmail does not exist');
const $textAreaMessage = document.querySelector('textarea#user-message');
if (!$textAreaMessage) throw new Error('$textAreaMessage does not exist');
$inputName.addEventListener('focus', handleFocus);
$inputEmail.addEventListener('blur', handleBlur);
$textAreaMessage.addEventListener('input', handleInput);

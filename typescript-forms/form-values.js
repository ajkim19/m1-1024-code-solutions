'use strict';
const $formContact = document.querySelector('#contact-form');
if (!$formContact) throw new Error('$formContact does not exist');
$formContact.addEventListener('submit', (event) => {
  event.preventDefault();
  const $formElements = $formContact.elements;
  if (!$formElements) throw new Error('$formContact does not exist');
  const messageData = {
    name: $formElements.name.value,
    email: $formElements.email.value,
    message: $formElements.message.value,
  };
  console.log('messageData:', messageData);
});

interface FormElements {
  name: HTMLInputElement;
  email: HTMLInputElement;
  message: HTMLTextAreaElement;
}

const $formContact = document.querySelector('#contact-form') as HTMLFormElement;
if (!$formContact) throw new Error('$formContact does not exist');
$formContact.addEventListener('submit', (event) => {
  event.preventDefault();
  const $formElements = $formContact.elements as unknown as FormElements;
  if (!$formElements) throw new Error('$formContact does not exist');
  const messageData = {
    name: $formElements.name.value,
    email: $formElements.email.value,
    message: $formElements.message.value,
  };
  console.log('messageData:', messageData);
});

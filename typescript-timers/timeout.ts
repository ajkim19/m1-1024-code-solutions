export {};

const $h1 = document.querySelector('.message');

function helloThere(): void {
  if (!$h1) throw new Error('$heading does not exist');
  $h1.textContent = 'Hello There';
}

setTimeout(helloThere, 2000);

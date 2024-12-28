const openModal: any = document.querySelector('.open-modal');
if (!openModal) throw new Error('openModal does not exist');
const dismissModal: any = document.querySelector('.dismiss-modal');
if (!dismissModal) throw new Error('dismissModal does not exist');
const dialog: any = document.querySelector('dialog');
if (!dialog) throw new Error('dialog does not exist');

openModal.addEventListener('click', () => dialog.show());
dismissModal.addEventListener('click', () => dialog.close());

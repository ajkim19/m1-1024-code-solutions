'use strict';
const openModal = document.querySelector('.open-modal');
if (!openModal) throw new Error('openModal does not exist');
const dismissModal = document.querySelector('.dismiss-modal');
if (!dismissModal) throw new Error('dismissModal does not exist');
const dialog = document.querySelector('dialog');
if (!dialog) throw new Error('dialog does not exist');
openModal.addEventListener('click', () => dialog.show());
dismissModal.addEventListener('click', () => dialog.close());

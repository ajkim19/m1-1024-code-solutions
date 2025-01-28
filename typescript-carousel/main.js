'use strict';
const imageList = [
  'images/001.png',
  'images/004.png',
  'images/007.png',
  'images/025.png',
  'images/039.png',
];
const cardImage = document.querySelector('.card-image');
const imgNavBar = document.querySelector('.img-nav-bar');
let count = 0;
setInterval(() => {
  if (count === 5) {
    count = 0;
  }
  // Changes the displayed image
  if (!cardImage) throw new Error('cardImage does not exist');
  cardImage.setAttribute('src', imageList[count]);
  // Increments the count for the next image
  count++;
}, 3000);

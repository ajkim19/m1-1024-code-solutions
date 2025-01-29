'use strict';
const imageList = [
  'images/001.png',
  'images/004.png',
  'images/007.png',
  'images/025.png',
  'images/039.png',
];
let count = 0;
const cardImage = document.querySelector('.card-image');
if (!cardImage) throw new Error('cardImage does not exist');
cardImage.setAttribute('src', imageList[count]);
const imgNavBar = document.querySelector('.img-nav-bar');
if (!imgNavBar) throw new Error('imgNavBar does not exist');
const imgNavBarChildren = imgNavBar.children;
if (!imgNavBarChildren) throw new Error('imgNavBarChildren does not exist');
let imgNavBarChildCurrent = imgNavBarChildren[0];
if (!imgNavBarChildCurrent)
  throw new Error('imgNavBarChildCurrent does not exist');
imgNavBarChildCurrent.style.fontWeight = '900';
let imgNavBarChildPrevious;
const timerId = setInterval(() => {
  count++;
  // Changes the displayed image
  if (!cardImage) throw new Error('cardImage does not exist');
  cardImage.setAttribute('src', imageList[count]);
  // Fills in the circle to the associated image
  if (!imgNavBarChildren) throw new Error('imgNavBarChildren does not exist');
  imgNavBarChildCurrent = imgNavBarChildren[count];
  // Changes class name to make icon a solid circle
  if (!imgNavBarChildCurrent) throw new Error('imgNavBarChild does not exist');
  imgNavBarChildCurrent.style.fontWeight = '900';
  // Hollows out the previously solid circle
  if (count === 0) {
    imgNavBarChildPrevious = imgNavBar.children[4];
  } else {
    imgNavBarChildPrevious = imgNavBar.children[count - 1];
  }
  if (!imgNavBarChildPrevious)
    throw new Error('imgNavBarChildPrevious does not exist');
  imgNavBarChildPrevious.style.fontWeight = '400';
  if (count === 4) {
    count = -1;
  }
}, 3000);

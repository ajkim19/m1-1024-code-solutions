'use strict';
const imageList = [
  'images/001.png',
  'images/004.png',
  'images/007.png',
  'images/025.png',
  'images/039.png',
];
let card = {
  previous: 4,
  current: 0,
};
// Initializes the count
let count = 0;
const $cardImage = document.querySelector('.card-image');
if (!$cardImage) throw new Error('$cardImage does not exist');
$cardImage.setAttribute('src', imageList[count]);
const $chevronLeft = document.querySelector('.fa-chevron-left');
if (!$chevronLeft) throw new Error('$chevronLeft does not exist');
const $chevronRight = document.querySelector('.fa-chevron-right');
if (!$chevronRight) throw new Error('$chevronRight does not exist');
const $imgNavBar = document.querySelector('.img-nav-bar');
if (!$imgNavBar) throw new Error('$imgNavBar does not exist');
const $imgNavBarChildren = $imgNavBar.children;
if (!$imgNavBarChildren) throw new Error('$imgNavBarChildren does not exist');
let $imgNavBarChildCurrent = $imgNavBarChildren[0];
if (!$imgNavBarChildCurrent)
  throw new Error('$imgNavBarChildCurrent does not exist');
$imgNavBarChildCurrent.style.fontWeight = '900';
let $imgNavBarChildPrevious;
function carousel() {
  // Changes the displayed image
  if (!$cardImage) throw new Error('$cardImage does not exist');
  $cardImage.setAttribute('src', imageList[count]);
  console.log('count:', count);
  console.log('imageList[count]', imageList[count]);
  // Fills in the circle to the associated image
  if (!$imgNavBarChildren) throw new Error('$imgNavBarChildren does not exist');
  $imgNavBarChildCurrent = $imgNavBarChildren[count];
  // Changes the open circle icon into a solid circle
  if (!$imgNavBarChildCurrent)
    throw new Error('$imgNavBarChild does not exist');
  $imgNavBarChildCurrent.style.fontWeight = '900';
  // Hollows out the previously solid circle
  if (count === 0) {
    $imgNavBarChildPrevious = $imgNavBarChildren[4];
  } else {
    $imgNavBarChildPrevious = $imgNavBarChildren[count - 1];
  }
  if (!$imgNavBarChildPrevious)
    throw new Error('$imgNavBarChildPrevious does not exist');
  $imgNavBarChildPrevious.style.fontWeight = '400';
  count++;
  if (count === 5) {
    count = 0;
  }
}
let carouselIntervalID = setInterval(carousel, 3000);

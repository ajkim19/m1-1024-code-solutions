const imageList = [
  'images/001.png',
  'images/004.png',
  'images/007.png',
  'images/025.png',
  'images/039.png',
];

// Initializes the count
let count = 0;

const $cardImage = document.querySelector('.card-image') as HTMLImageElement;
if (!$cardImage) throw new Error('$cardImage does not exist');
$cardImage.setAttribute('src', imageList[count]);
const $chevronLeft = document.querySelector('.fa-chevron-left') as HTMLElement;
if (!$chevronLeft) throw new Error('$chevronLeft does not exist');
const $chevronRight = document.querySelector(
  '.fa-chevron-right'
) as HTMLElement;
if (!$chevronRight) throw new Error('$chevronRight does not exist');
const $imgNavBar = document.querySelector('.img-nav-bar') as HTMLDivElement;
if (!$imgNavBar) throw new Error('$imgNavBar does not exist');
const $imgNavBarChildren = $imgNavBar.children;
if (!$imgNavBarChildren) throw new Error('$imgNavBarChildren does not exist');
let $imgNavBarChildCurrent = $imgNavBarChildren[0] as HTMLElement;
if (!$imgNavBarChildCurrent)
  throw new Error('$imgNavBarChildCurrent does not exist');
$imgNavBarChildCurrent.style.fontWeight = '900';
let $imgNavBarChildPrevious: HTMLElement;

function carousel(): void {
  count++;
  if (count === 5) {
    count = 0;
  }

  // Changes the displayed image
  if (!$cardImage) throw new Error('$cardImage does not exist');
  $cardImage.setAttribute('src', imageList[count]);
  console.log('count:', count);
  console.log('imageList[count]', imageList[count]);

  // Fills in the circle to the associated image
  if (!$imgNavBarChildren) throw new Error('$imgNavBarChildren does not exist');
  $imgNavBarChildCurrent = $imgNavBarChildren[count] as HTMLElement;

  // Changes the open circle icon into a solid circle
  if (!$imgNavBarChildCurrent)
    throw new Error('$imgNavBarChild does not exist');
  $imgNavBarChildCurrent.style.fontWeight = '900';

  // Hollows out the previously solid circle
  if (count === 0) {
    $imgNavBarChildPrevious = $imgNavBarChildren[4] as HTMLElement;
  } else {
    $imgNavBarChildPrevious = $imgNavBarChildren[count - 1] as HTMLElement;
  }
  if (!$imgNavBarChildPrevious)
    throw new Error('$imgNavBarChildPrevious does not exist');
  $imgNavBarChildPrevious.style.fontWeight = '400';
}

let carouselIntervalID = setInterval(carousel, 3000);

$imgNavBar.addEventListener('click', (event: Event) => {
  clearInterval(carouselIntervalID);
  $imgNavBarChildCurrent.style.fontWeight = '400';
  if (!$imgNavBar) throw new Error('$imgNavBar does not exist');
  const eventTarget = event.target as HTMLElement;
  console.log('eventTarget', eventTarget);
  for (let i = 0; i < $imgNavBarChildren.length; i++) {
    if ($imgNavBarChildren[i] === eventTarget) {
      count = i;
      if (!$cardImage) throw new Error('$cardImage does not exist');
      $cardImage.setAttribute('src', imageList[count]);
      if (!$imgNavBarChildren)
        throw new Error('$imgNavBarChildren does not exist');
      $imgNavBarChildCurrent = $imgNavBarChildren[count] as HTMLElement;
      if (!$imgNavBarChildCurrent)
        throw new Error('$imgNavBarChild does not exist');
      $imgNavBarChildCurrent.style.fontWeight = '900';
    }
  }
  carouselIntervalID = setInterval(carousel, 3000);
});

$chevronRight.addEventListener('click', () => {
  clearInterval(carouselIntervalID);
  $imgNavBarChildCurrent.style.fontWeight = '400';
  count++;
  if (count === 5) {
    count = 0;
  }
  if (!$cardImage) throw new Error('$cardImage does not exist');
  $cardImage.setAttribute('src', imageList[count]);
  if (!$imgNavBarChildren) throw new Error('$imgNavBarChildren does not exist');
  $imgNavBarChildCurrent = $imgNavBarChildren[count] as HTMLElement;
  if (!$imgNavBarChildCurrent)
    throw new Error('$imgNavBarChild does not exist');
  $imgNavBarChildCurrent.style.fontWeight = '900';
});

$chevronLeft.addEventListener('click', () => {
  clearInterval(carouselIntervalID);
  $imgNavBarChildCurrent.style.fontWeight = '400';
  count--;
  if (count === -1) {
    count = 4;
  }
  if (!$cardImage) throw new Error('$cardImage does not exist');
  $cardImage.setAttribute('src', imageList[count]);
  if (!$imgNavBarChildren) throw new Error('$imgNavBarChildren does not exist');
  $imgNavBarChildCurrent = $imgNavBarChildren[count] as HTMLElement;
  if (!$imgNavBarChildCurrent)
    throw new Error('$imgNavBarChild does not exist');
  $imgNavBarChildCurrent.style.fontWeight = '900';
});

/// ///////////////

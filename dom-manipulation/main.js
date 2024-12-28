'use strict';
const hotButton = document.querySelector('.hot-button.cold');
if (!hotButton) throw new Error('hotButton does not exist');
const clickCount = document.querySelector('.click-count');
if (!clickCount) throw new Error('clickCount does not exist');
let count = 0;
hotButton.addEventListener('click', () => {
  if (!hotButton || !clickCount) {
    throw new Error('The $hotButton or $clickCount query failed');
  }
  if (count < 3) {
    count++;
    clickCount.textContent = `Clicks: ${count}`;
  } else if (count >= 3 && count < 6) {
    count++;
    clickCount.textContent = `Clicks: ${count}`;
    hotButton.className = 'hot-button cool';
  } else if (count >= 6 && count < 9) {
    count++;
    clickCount.textContent = `Clicks: ${count}`;
    hotButton.className = 'hot-button tepid';
  } else if (count >= 9 && count < 12) {
    count++;
    clickCount.textContent = `Clicks: ${count}`;
    hotButton.className = 'hot-button warm';
  } else if (count >= 12 && count < 15) {
    count++;
    clickCount.textContent = `Clicks: ${count}`;
    hotButton.className = 'hot-button hot';
  } else {
    count++;
    clickCount.textContent = `Clicks: ${count}`;
    hotButton.className = 'hot-button nuclear';
  }
});

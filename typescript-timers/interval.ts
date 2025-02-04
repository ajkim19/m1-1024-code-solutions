const $h1 = document.querySelector('.countdown-display');

let count = 4;
const intervalId = setInterval(function () {
  if (!$h1) throw new Error('$heading does not exist');
  count--;
  if (count <= 0) {
    $h1.textContent = '~Earth Beeeelooowww Us~';
    clearInterval(intervalId);
  } else {
    $h1.textContent = count.toLocaleString();
  }
}, 1000);

/// /////////

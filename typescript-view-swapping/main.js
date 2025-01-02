'use strict';
const $tabContainer = document.querySelector('.tab-container');
if (!$tabContainer) throw new Error('$tabContainer does not exist');
const $tabElements = document.querySelectorAll('.tab');
if (!$tabElements) throw new Error('$tabElement does not exist');
const $viewElements = document.querySelectorAll('.view');
if (!$viewElements) throw new Error('$viewElements does not exist');
$tabContainer.addEventListener('click', (event) => {
  const $eventTarget = event.target;
  if (!$eventTarget) throw new Error('$eventTarget does not exist');
  if ($eventTarget.matches('.tab')) {
    for (const e of $tabElements) {
      if (e === $eventTarget) {
        e.className = 'tab active';
      } else {
        e.className = 'tab';
      }
    }
  }
  const eDataView = $eventTarget.dataset.view;
  if (!eDataView) throw new Error('$eDataView does not exist');
  for (const e of $viewElements) {
    const $viewHTMLElement = e;
    if ($viewHTMLElement.dataset.view === eDataView) {
      $viewHTMLElement.className = 'view';
    } else {
      $viewHTMLElement.className = 'view hidden';
    }
  }
});

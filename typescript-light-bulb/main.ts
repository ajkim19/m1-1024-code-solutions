const container = document.querySelector('.container') as HTMLElement;
if (!container) throw new Error('container does not exist');
const lightBulb = document.querySelector('.light-bulb') as HTMLElement;
if (!lightBulb) throw new Error('lightBulb does not exist');

// Changes colors of elements to darker colors
function turnOffLightBulb(): void {
  if (container && lightBulb) {
    container.style.backgroundColor = 'rgb(25, 25, 25)';
    lightBulb.style.backgroundColor = 'rgb(50, 50, 50)';
    lightBulb.style.boxShadow = '0 -8px 16px rgba(0, 0, 0, 0.8)';
  }
}

// Changes colors of elements to lighter colors
function turnOnLightBulb(): void {
  if (container && lightBulb) {
    container.style.backgroundColor = 'white';
    lightBulb.style.backgroundColor = 'rgb(255, 238, 142)';
    lightBulb.style.boxShadow = '0 0 35px rgb(255, 231, 92)';
  }
}

lightBulb.addEventListener('click', () => {
  if (container.style.backgroundColor === 'white') {
    turnOffLightBulb();
  } else {
    turnOnLightBulb();
  }
});

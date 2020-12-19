const valueRef = document.querySelector('#value');
const decrementBtnRef = document.querySelector(
  '#counter button[data-action="decrement"]',
);
const incrementBtnRef = document.querySelector(
  '#counter button[data-action="increment"]',
);
let counterValue = 0;

decrementBtnRef.addEventListener('click', decrement);
incrementBtnRef.addEventListener('click', increment);

function decrement() {
  counterValue -= 1;
  valueRef.textContent = counterValue;
}
function increment() {
  counterValue += 1;
  valueRef.textContent = counterValue;
}

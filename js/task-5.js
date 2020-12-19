const inputRef = document.querySelector('#name-input');
const outputRef = document.querySelector('#name-output');

inputRef.addEventListener('input', handleInputChange);

// function handleInputChange(event) {
//   if (event.target.value) {
//     outputRef.textContent = event.target.value;
//   } else {
//     outputRef.textContent = 'незнакомец';
//   }
// }

function handleInputChange(event) {
  event.target.value
    ? (outputRef.textContent = event.target.value)
    : (outputRef.textContent = 'незнакомец');
}

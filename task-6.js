const inputRef = document.querySelector('#validation-input');
inputRef.addEventListener('blur', handleInputBlur);
function handleInputBlur(event) {
  event.target.value.length == inputRef.dataset.length
    ? inputRef.classList.add('valid') || inputRef.classList.remove('invalid')
    : inputRef.classList.add('invalid') || inputRef.classList.remove('valid');
}

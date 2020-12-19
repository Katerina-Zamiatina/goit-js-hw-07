const inputRef = document.querySelector('#font-size-control');
const textRef = document.querySelector('#text');
inputRef.addEventListener('input', handleInputRef);
function handleInputRef(event) {
  textRef.style.fontSize = event.currentTarget.value + 'px';
}

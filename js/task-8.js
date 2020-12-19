const boxesRef = document.querySelector('#boxes');
const inputRef = document.querySelector('#controls input');
const renderBtnRef = document.querySelector('button[data-action="render"]');
const deleteBtnRef = document.querySelector('button[data-action="destroy"]');
let boxes = [];

renderBtnRef.addEventListener('click', createBoxes);
deleteBtnRef.addEventListener('click', destroyBoxes);

function randomColor() {
  const x = Math.floor(Math.random() * 256);
  const y = Math.floor(Math.random() * 256);
  const z = Math.floor(Math.random() * 256);
  return 'rgb(' + x + ',' + y + ',' + z + ')';
}

function createBoxes() {
  const amount = inputRef.value;
  for (let i = 0; i < amount; i += 1) {
    const box = document.createElement('div');
    box.style.width = `${30 + i * 10}px`;
    box.style.height = `${30 + i * 10}px`;
    box.style.backgroundColor = randomColor();
    boxes.push(box);
  }
  return boxesRef.append(...boxes);
}

// function createBoxes(amount) {
//   for (let i = 0; i < amount; i += 1) {
//     const box = document.createElement('div');
//     box.style.width = `${30 + i * 10}px`;
//     box.style.height = `${30 + i * 10}px`;
//     box.style.backgroundColor = randomColor();
//     boxes.push(box);
//   }
//   return boxesRef.append(...boxes);
// }

function destroyBoxes() {
  boxesRef.innerHTML = '';
}

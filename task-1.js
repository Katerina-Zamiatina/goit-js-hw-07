const listItems = document.querySelectorAll('.item');
console.log(`В списке ${listItems.length} категории.`);
listItems.forEach(name => {
  console.log(
    `Категория: ${name.firstElementChild.textContent}\nКоличество элементов: ${name.lastElementChild.children.length}`,
  );
});

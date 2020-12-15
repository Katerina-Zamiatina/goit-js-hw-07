const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
];
const ingredientsList = document.querySelector('#ingredients');
const createIngredientsList = ingredients.map(ingredient => {
  const ingredientRef = document.createElement('li');
    ingredientRef.textContent = ingredient;
    ingredientsList.appendChild(ingredientRef);
    return ingredientsList;
});
console.log(ingredientsList);
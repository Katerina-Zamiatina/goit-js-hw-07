const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
];

// const ingredientsArray = [];
// const ingredientsList = document.querySelector('#ingredients');
// const createIngredientsList = ingredients.map(ingredient => {
//   const ingredientRef = document.createElement('li');
//   ingredientRef.textContent = ingredient;
//   ingredientsArray.push(ingredientRef);
//   return ingredientsArray;
// });
// ingredientsList.append(...ingredientsArray);

const ingredientsList = document.querySelector('#ingredients');
const createIngredientsList = ingredients.map(ingredient => {
  const ingredientRef = document.createElement('li');
  ingredientRef.textContent = ingredient;
  return ingredientRef;
});
ingredientsList.append(...createIngredientsList);
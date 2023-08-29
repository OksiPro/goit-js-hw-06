const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];
const container = document.querySelector(`#ingredients`);

const liArray = ingredients.map((ingredient) => {
  return `<li class="item">
  ${ingredient}
  </li>`
});

const markup = liArray.join('');
container.insertAdjacentHTML(`afterbegin`, markup);

console.log(markup);
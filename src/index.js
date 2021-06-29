import './styles/index.scss';

const recipe = {
  stripes: 2,
  iron: 1,
  moonstone: 4,
};

const contrecipe = {
  ...recipe,
  leather: 1,
  moonstone: 8,
};

console.log(recipe);
console.log(contrecipe);

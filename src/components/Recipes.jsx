import { useState } from 'react';

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

const Recipes = () => {
  const [recipes, setRecipes] = useState({});
  return (
    <div>
      <h3>Current Recipe:</h3>
      <button onClick={() => setRecipes(recipe)}>recipe</button>
      <button onClick={() => setRecipes(contrecipe)}>contrecipe</button>

      <ul>
        {Object.keys(recipes).map((material) => (
          <li key={material}>
            {material}: {recipes[material]}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Recipes;

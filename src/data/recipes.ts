
import { mainDishes } from "./categories/main-dishes";
import { desserts } from "./categories/desserts";
import { pastries } from "./categories/pastries";
import { mainDishRecipesAdditions } from "./categories/main-dishes-additions";
import { dessertRecipesAdditions } from "./categories/desserts-additions";
import { Recipe } from "./types";

const recipes: Recipe[] = [
  ...mainDishes,
  ...desserts,
  ...pastries,
  ...mainDishRecipesAdditions,
  ...dessertRecipesAdditions
];

export default recipes;

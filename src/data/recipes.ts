
import { recipes as mainDishRecipes } from "./categories/main-dishes";
import { recipes as dessertRecipes } from "./categories/desserts";
import { recipes as pastriesRecipes } from "./categories/pastries";
import { mainDishRecipesAdditions } from "./categories/main-dishes-additions";
import { dessertRecipesAdditions } from "./categories/desserts-additions";
import { Recipe } from "./types";

const recipes: Recipe[] = [
  ...mainDishRecipes,
  ...dessertRecipes,
  ...pastriesRecipes,
  ...mainDishRecipesAdditions,
  ...dessertRecipesAdditions
];

export default recipes;

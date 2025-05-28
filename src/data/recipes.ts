
import { Recipe } from "./types";
import { mainDishes } from "./categories/main-dishes";
import { desserts } from "./categories/desserts";
import { pastries } from "./categories/pastries";
import { snacks } from "./categories/snacks";

const recipes: Recipe[] = [
  ...mainDishes,
  ...desserts,
  ...pastries,
  ...snacks
];

export default recipes;

import { Recipe } from "./types";
import additionalRecipes from "./recipes-additional";

// Original recipes data
const originalRecipes: Recipe[] = [
  {
    id: "spaghetti-carbonara",
    title: "Spaghetti Carbonara",
    description: "Classic Italian pasta dish with eggs, cheese, pancetta, and black pepper.",
    image: "/carbonara.jpg",
    portionSize: "2",
    prepTime: "10 mins",
    cookTime: "20 mins",
    totalTime: "30 mins",
    difficulty: "Mittel",
    category: "Pasta",
    tags: ["Italian", "Pasta", "Quick", "Easy"],
    ingredients: [
      {
        items: [
          { name: "Spaghetti", amount: "200g" },
          { name: "Eggs", amount: "3" },
          { name: "Pancetta", amount: "100g" },
          { name: "Pecorino Romano cheese", amount: "50g" },
          { name: "Black pepper", amount: "To taste" },
        ],
      },
    ],
    steps: [
      {
        items: [
          "Cook spaghetti according to package instructions.",
          "While pasta is cooking, dice pancetta and sauté until crispy.",
          "In a bowl, whisk eggs, grated Pecorino Romano cheese, and black pepper.",
          "Drain spaghetti, reserving some pasta water. Add spaghetti to the pancetta.",
          "Remove from heat and pour egg mixture over spaghetti, tossing quickly to create a creamy sauce. Add pasta water if needed.",
          "Serve immediately, garnished with more cheese and black pepper.",
        ],
      },
    ],
    tips: [
      "Use high-quality Pecorino Romano cheese for the best flavor.",
      "Work quickly to prevent the eggs from scrambling.",
      "Adjust the amount of black pepper to your liking.",
    ],
    isFavorite: true,
  },
  {
    id: "chocolate-chip-cookies",
    title: "Chocolate Chip Cookies",
    description: "Classic homemade chocolate chip cookies.",
    image: "/cookies.jpg",
    portionSize: "12",
    prepTime: "15 mins",
    cookTime: "10 mins",
    totalTime: "25 mins",
    difficulty: "Leicht",
    category: "Dessert",
    tags: ["Cookies", "Dessert", "Sweet", "Baking"],
    ingredients: [
      {
        items: [
          { name: "All-purpose flour", amount: "2 1/4 cups" },
          { name: "Baking soda", amount: "1 tsp" },
          { name: "Salt", amount: "1 tsp" },
          { name: "Unsalted butter, softened", amount: "1 cup" },
          { name: "Granulated sugar", amount: "3/4 cup" },
          { name: "Brown sugar, packed", amount: "3/4 cup" },
          { name: "Large eggs", amount: "2" },
          { name: "Vanilla extract", amount: "1 tsp" },
          { name: "Chocolate chips", amount: "2 cups" },
        ],
      },
    ],
    steps: [
      {
        items: [
          "Preheat oven to 375°F (190°C).",
          "In a small bowl, whisk together flour, baking soda, and salt.",
          "In a large bowl, cream together the butter, granulated sugar, and brown sugar until smooth.",
          "Beat in the eggs one at a time, then stir in the vanilla extract.",
          "Gradually add the dry ingredients to the wet ingredients, mixing until just combined.",
          "Stir in the chocolate chips.",
          "Drop by rounded tablespoons onto baking sheets.",
          "Bake for 9-11 minutes, or until edges are nicely browned.",
          "Cool on baking sheets for a few minutes before transferring to a wire rack to cool completely.",
        ],
      },
    ],
    tips: [
      "Use room temperature butter for easier creaming.",
      "Don't overbake the cookies for a soft and chewy texture.",
      "Add nuts or other mix-ins for a customized flavor.",
    ],
  },
  {
    id: "tomato-soup",
    title: "Tomato Soup",
    description: "A comforting and classic tomato soup recipe.",
    image: "/tomato-soup.jpg",
    portionSize: "4",
    prepTime: "15 mins",
    cookTime: "30 mins",
    totalTime: "45 mins",
    difficulty: "Leicht",
    category: "Soup",
    tags: ["Soup", "Vegetarian", "Comfort Food", "Easy"],
    ingredients: [
      {
        items: [
          { name: "Olive oil", amount: "2 tbsp" },
          { name: "Onion, chopped", amount: "1" },
          { name: "Garlic, minced", amount: "2 cloves" },
          { name: "Canned crushed tomatoes", amount: "28 oz" },
          { name: "Vegetable broth", amount: "4 cups" },
          { name: "Dried basil", amount: "1 tsp" },
          { name: "Salt and pepper", amount: "To taste" },
          { name: "Heavy cream (optional)", amount: "1/4 cup" },
        ],
      },
    ],
    steps: [
      {
        items: [
          "Heat olive oil in a large pot over medium heat.",
          "Add onion and cook until softened, about 5 minutes.",
          "Add garlic and cook for another minute until fragrant.",
          "Stir in crushed tomatoes, vegetable broth, and dried basil.",
          "Bring to a simmer and cook for 20 minutes.",
          "Use an immersion blender to blend the soup until smooth.",
          "Season with salt and pepper to taste.",
          "Stir in heavy cream (optional) for a richer flavor.",
          "Serve hot with grilled cheese or croutons.",
        ],
      },
    ],
    tips: [
      "Roast the tomatoes before blending for a deeper flavor.",
      "Add a pinch of sugar to balance the acidity of the tomatoes.",
      "Garnish with fresh basil or a swirl of cream.",
    ],
  },
];

// Combine original recipes with additional recipes
const recipes: Recipe[] = [...originalRecipes, ...additionalRecipes];

export default recipes;

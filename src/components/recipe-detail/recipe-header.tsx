
import { Clock, ChefHat } from "lucide-react";
import { Recipe } from "@/data/types";

interface RecipeHeaderProps {
  recipe: Recipe;
}

export function RecipeHeader({ recipe }: RecipeHeaderProps) {
  return (
    <div className="relative w-full overflow-hidden rounded-2xl shadow-lg" style={{maxHeight: "400px"}}>
      <img
        src={recipe.image}
        alt={recipe.title}
        className="h-full w-full object-cover object-center"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
      <div className="absolute bottom-0 w-full p-6 text-white">
        <h1 className="font-playfair text-3xl font-bold text-white md:text-4xl">
          {recipe.title}
        </h1>
        <div className="mt-2 flex flex-wrap gap-x-6 gap-y-3 text-sm">
          <div className="flex items-center gap-1.5 text-white/90">
            <Clock size={18} />
            <span>{recipe.totalTime || recipe.prepTime}</span>
          </div>
          
          <div className="flex items-center gap-1.5 text-white/90">
            <ChefHat size={18} />
            <span>{recipe.difficulty}</span>
          </div>
          
          <div className="flex items-center gap-1.5 rounded-full bg-white/20 backdrop-blur-sm px-2.5 py-1 text-white">
            {recipe.category}
          </div>
        </div>
      </div>
    </div>
  );
}

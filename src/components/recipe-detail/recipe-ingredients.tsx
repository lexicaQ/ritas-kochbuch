
import { Check } from "lucide-react";
import { Recipe } from "@/data/types";
import { cn } from "@/lib/utils";

interface RecipeIngredientsProps {
  recipe: Recipe;
  completedIngredients: {[key: string]: boolean};
  onToggleIngredient: (id: string) => void;
}

export function RecipeIngredients({ 
  recipe, 
  completedIngredients, 
  onToggleIngredient 
}: RecipeIngredientsProps) {
  return (
    <div className="rounded-xl bg-white p-6 shadow-lg border border-cookbook-100">
      <div className="mb-6 flex items-center justify-between">
        <h2 className="font-playfair text-2xl font-bold text-cookbook-800">Zutaten</h2>
        <div className="h-1 flex-grow mx-4 bg-cookbook-200 rounded-full"></div>
        {recipe.portionSize && (
          <span className="text-cookbook-700 font-medium bg-cookbook-100/60 px-3 py-1 rounded-full text-sm">
            {recipe.portionSize}
          </span>
        )}
      </div>
      
      {recipe.ingredients.map((group, groupIndex) => (
        <div key={groupIndex} className="mt-6">
          {group.group && (
            <h3 className="mb-3 inline-block font-medium text-white bg-cookbook-700 px-3 py-1 rounded-lg">
              {group.group}
            </h3>
          )}
          
          <ul className="space-y-2 pl-1">
            {group.items.map((item, itemIndex) => {
              const ingredientId = `ingredient-${groupIndex}-${itemIndex}`;
              return (
                <li key={itemIndex} onClick={() => onToggleIngredient(ingredientId)}>
                  <div 
                    className={cn(
                      "flex items-start gap-2 p-2 rounded-lg transition-colors cursor-pointer",
                      completedIngredients[ingredientId] ? "bg-cookbook-100/50" : "hover:bg-cookbook-50/50"
                    )}
                  >
                    <div className={cn(
                      "flex h-5 w-5 rounded-full items-center justify-center border transition-colors",
                      completedIngredients[ingredientId] 
                        ? "bg-cookbook-700 border-cookbook-700" 
                        : "border-cookbook-300"
                    )}>
                      {completedIngredients[ingredientId] && <Check size={12} className="text-white" />}
                    </div>
                    <span className={cn(
                      "text-sm",
                      completedIngredients[ingredientId] && "line-through text-gray-400"
                    )}>
                      {`${item.name}${item.amount ? ` (${item.amount})` : ''}`}
                    </span>
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
      ))}
    </div>
  );
}

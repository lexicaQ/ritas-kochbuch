
import { Check } from "lucide-react";
import { Recipe } from "@/data/types";
import { cn } from "@/lib/utils";

interface RecipeStepsProps {
  recipe: Recipe;
  completedSteps: {[key: string]: boolean};
  onToggleStep: (id: string) => void;
}

export function RecipeSteps({ 
  recipe, 
  completedSteps, 
  onToggleStep 
}: RecipeStepsProps) {
  return (
    <div className="rounded-xl bg-white p-6 shadow-lg border border-cookbook-100">
      <h2 className="font-playfair text-2xl font-bold text-cookbook-800 mb-6 pb-2 border-b border-cookbook-100">
        Zubereitung
      </h2>
      
      {recipe.steps.map((group, groupIndex) => (
        <div key={groupIndex} className="mt-8">
          {group.group && (
            <h3 className="mb-4 font-medium text-cookbook-700 bg-cookbook-100 inline-block px-4 py-1 rounded-lg">
              {group.group}
            </h3>
          )}
          
          <div className="space-y-4">
            {group.items.map((step, stepIndex) => {
              const stepId = `step-${groupIndex}-${stepIndex}`;
              return (
                <div
                  key={stepIndex}
                  onClick={() => onToggleStep(stepId)}
                  className={cn(
                    "flex items-start gap-3 rounded-lg p-4 transition-all cursor-pointer",
                    completedSteps[stepId] 
                      ? "bg-cookbook-100/50 border border-cookbook-200" 
                      : "hover:bg-cookbook-50/50 border border-cookbook-100/50"
                  )}
                >
                  <div className={cn(
                    "flex h-6 w-6 shrink-0 items-center justify-center rounded-full font-medium transition-colors",
                    completedSteps[stepId] 
                      ? "bg-cookbook-700 text-white" 
                      : "bg-cookbook-200 text-cookbook-700"
                  )}>
                    {completedSteps[stepId] ? <Check size={14} /> : stepIndex + 1}
                  </div>
                  <span className={cn(
                    "text-sm",
                    completedSteps[stepId] && "text-gray-500 line-through"
                  )}>
                    {step}
                  </span>
                </div>
              );
            })}
          </div>
        </div>
      ))}
    </div>
  );
}

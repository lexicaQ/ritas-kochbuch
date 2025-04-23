
import { useState, useEffect, useRef } from "react";
import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Clock, ChefHat, ArrowLeft, Heart, Tag, Check } from "lucide-react";

import { Button } from "@/components/ui/button";
import { FadeIn } from "@/components/ui/fade-in";
import { CheckboxItem, CheckboxStepItem } from "@/components/ui/checkbox-item";
import { Header } from "@/components/header";
import { FavoriteButton } from "@/components/ui/favorite-button";
import { RecipeSuccess } from "@/components/ui/recipe-success";
import { RecipeNotes } from "@/components/ui/recipe-notes";
import { RecipeRating } from "@/components/ui/recipe-rating";
import recipes from "@/data/recipes";
import { cn } from "@/lib/utils";

const RecipeDetail = () => {
  const { id } = useParams<{ id: string }>();
  const [recipe, setRecipe] = useState(recipes.find(r => r.id === id));
  const [isFavorite, setIsFavorite] = useState(recipe?.isFavorite || false);
  const startTimeRef = useRef(new Date());
  
  // Track completed steps and ingredients
  const [completedSteps, setCompletedSteps] = useState<{[key: string]: boolean}>({});
  const [completedIngredients, setCompletedIngredients] = useState<{[key: string]: boolean}>({});
  
  // Track progress and completion
  const [progress, setProgress] = useState(0);
  const [showSuccess, setShowSuccess] = useState(false);
  const [completionTime, setCompletionTime] = useState<string>("");
  
  useEffect(() => {
    // This would typically be a fetch from an API
    setRecipe(recipes.find(r => r.id === id));
    window.scrollTo(0, 0);
    
    // Reset the start time when changing recipes
    startTimeRef.current = new Date();
    
    // Load saved progress from localStorage
    if (id) {
      const savedSteps = localStorage.getItem(`recipe-steps-${id}`);
      const savedIngredients = localStorage.getItem(`recipe-ingredients-${id}`);
      
      if (savedSteps) {
        setCompletedSteps(JSON.parse(savedSteps));
      } else {
        setCompletedSteps({});
      }
      
      if (savedIngredients) {
        setCompletedIngredients(JSON.parse(savedIngredients));
      } else {
        setCompletedIngredients({});
      }
    }
  }, [id]);
  
  useEffect(() => {
    if (recipe) {
      setIsFavorite(recipe.isFavorite || false);
      
      let totalSteps = 0;
      let completedCount = 0;
      
      // Count total steps and completed steps
      recipe.steps.forEach((group, gIndex) => {
        group.items.forEach((_, sIndex) => {
          const stepId = `step-${gIndex}-${sIndex}`;
          totalSteps++;
          if (completedSteps[stepId]) completedCount++;
        });
      });
      
      // Calculate progress percentage
      const newProgress = totalSteps > 0 ? (completedCount / totalSteps) * 100 : 0;
      setProgress(newProgress);
      
      // Check if all steps are completed
      if (newProgress === 100 && totalSteps > 0 && !showSuccess) {
        // Calculate completion time
        const endTime = new Date();
        const timeDiff = Math.floor((endTime.getTime() - startTimeRef.current.getTime()) / 1000 / 60); // in minutes
        
        if (timeDiff < 60) {
          setCompletionTime(`${timeDiff} Minuten`);
        } else {
          const hours = Math.floor(timeDiff / 60);
          const minutes = timeDiff % 60;
          setCompletionTime(`${hours} Std ${minutes} Min`);
        }
        
        // Show success modal with slight delay
        setTimeout(() => {
          setShowSuccess(true);
        }, 500);
      }
      
      // Save progress to localStorage
      if (id) {
        localStorage.setItem(`recipe-steps-${id}`, JSON.stringify(completedSteps));
        localStorage.setItem(`recipe-ingredients-${id}`, JSON.stringify(completedIngredients));
      }
    }
  }, [recipe, completedSteps, id, showSuccess]);
  
  if (!recipe) {
    return (
      <div className="flex min-h-screen flex-col items-center justify-center">
        <h2 className="text-2xl font-bold">Rezept nicht gefunden</h2>
        <Link to="/" className="mt-4 text-primary hover:underline">
          Zurück zur Startseite
        </Link>
      </div>
    );
  }
  
  const toggleFavorite = () => {
    // Find the recipe in the data and toggle its favorite status
    const recipeIndex = recipes.findIndex(r => r.id === recipe.id);
    if (recipeIndex !== -1) {
      recipes[recipeIndex].isFavorite = !isFavorite;
    }
    
    setIsFavorite(!isFavorite);
  };
  
  const toggleStep = (id: string) => {
    setCompletedSteps(prev => ({
      ...prev,
      [id]: !prev[id]
    }));
  };
  
  const toggleIngredient = (id: string) => {
    setCompletedIngredients(prev => ({
      ...prev,
      [id]: !prev[id]
    }));
  };
  
  return (
    <div className="min-h-screen bg-cookbook-50/20">
      <Header />
      
      <div className="container mx-auto mt-20 px-4 pt-8">
        {/* Back button and actions */}
        <div className="mb-6 flex items-center justify-between">
          <Link to="/rezepte">
            <Button variant="ghost" className="group flex items-center gap-2">
              <ArrowLeft size={16} className="transition-transform group-hover:-translate-x-1" />
              <span>Alle Rezepte</span>
            </Button>
          </Link>
          
          <FavoriteButton 
            isFavorite={isFavorite} 
            onToggle={toggleFavorite}
          />
        </div>
        
        {/* Recipe header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="relative"
        >
          <div className="relative aspect-video w-full overflow-hidden rounded-2xl shadow-lg">
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
        </motion.div>
        
        {/* Recipe info */}
        <div className="mt-8">
          <FadeIn>
            <p className="text-lg text-gray-700">
              {recipe.description}
            </p>
            
            {/* Recipe meta */}
            <div className="mt-6 flex flex-wrap gap-2">
              {recipe.tags && recipe.tags.map(tag => (
                <span
                  key={tag}
                  className="inline-flex items-center rounded-full bg-cookbook-100/80 px-3 py-1 text-sm font-medium text-cookbook-800"
                >
                  <Tag size={14} className="mr-2" />
                  {tag}
                </span>
              ))}
              
              {recipe.portionSize && (
                <div className="rounded-full bg-cookbook-200/60 px-3 py-1 text-sm font-medium text-cookbook-800">
                  <span>Portionen: {recipe.portionSize}</span>
                </div>
              )}
            </div>
          </FadeIn>
          
          {/* Progress bar */}
          <FadeIn delay={0.2}>
            <div className="mt-8">
              <div className="flex items-center justify-between">
                <span className="text-sm font-medium text-cookbook-800">Fortschritt</span>
                <span className="text-sm font-medium text-cookbook-800">{Math.round(progress)}%</span>
              </div>
              <div className="mt-2 h-2 w-full rounded-full bg-cookbook-200">
                <div 
                  className="h-2 rounded-full bg-cookbook-600 transition-all duration-1000" 
                  style={{ width: `${progress}%` }}
                ></div>
              </div>
            </div>
          </FadeIn>
          
          {/* Main content */}
          <div className="mt-10 grid gap-8 md:grid-cols-12 md:gap-12">
            {/* Ingredients */}
            <FadeIn className="md:col-span-4" delay={0.1}>
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
                          <li key={itemIndex} onClick={() => toggleIngredient(ingredientId)}>
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
            </FadeIn>
            
            {/* Steps */}
            <FadeIn className="md:col-span-8" delay={0.2}>
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
                            onClick={() => toggleStep(stepId)}
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
              
              {/* Tips */}
              {recipe.tips && recipe.tips.length > 0 && (
                <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="rounded-xl bg-cookbook-50/70 p-6 border border-cookbook-200">
                    <h2 className="font-playfair text-xl font-bold text-cookbook-800 mb-4 flex items-center">
                      <div className="bg-cookbook-700 text-white p-1 rounded-full mr-3">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <circle cx="12" cy="12" r="10"></circle>
                          <line x1="12" y1="16" x2="12" y2="12"></line>
                          <line x1="12" y1="8" x2="12.01" y2="8"></line>
                        </svg>
                      </div>
                      Tipps & Tricks
                    </h2>
                    
                    <ul className="mt-4 space-y-3">
                      {recipe.tips.map((tip, index) => (
                        <li key={index} className="flex items-start gap-3 bg-white p-3 rounded-lg shadow-sm">
                          <div className="bg-cookbook-100 text-cookbook-700 h-6 w-6 flex items-center justify-center rounded-full font-semibold text-sm">
                            {index + 1}
                          </div>
                          <p className="text-sm">{tip}</p>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <RecipeNotes recipeId={recipe.id} />
                </div>
              )}
              
              {/* Rating */}
              <div className="mt-8">
                <RecipeRating recipeId={recipe.id} />
              </div>
            </FadeIn>
          </div>
        </div>
      </div>
      
      {/* Success Modal */}
      <RecipeSuccess 
        show={showSuccess} 
        onClose={() => setShowSuccess(false)}
        completionTime={completionTime}
      />
    </div>
  );
};

export default RecipeDetail;

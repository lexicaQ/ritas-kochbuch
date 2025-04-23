
import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Clock, ChefHat, ArrowLeft, Heart, Tag } from "lucide-react";

import { Button } from "@/components/ui/button";
import { FadeIn } from "@/components/ui/fade-in";
import { CheckboxItem, CheckboxStepItem } from "@/components/ui/checkbox-item";
import { Header } from "@/components/header";
import recipes from "@/data/recipes";
import { cn } from "@/lib/utils";

const RecipeDetail = () => {
  const { id } = useParams<{ id: string }>();
  const [recipe, setRecipe] = useState(recipes.find(r => r.id === id));
  const [isFavorite, setIsFavorite] = useState(recipe?.isFavorite || false);
  
  useEffect(() => {
    // This would typically be a fetch from an API
    setRecipe(recipes.find(r => r.id === id));
    window.scrollTo(0, 0);
  }, [id]);
  
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
    setIsFavorite(!isFavorite);
    // Here you would typically update this in your backend
  };
  
  return (
    <div className="min-h-screen bg-white">
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
          
          <Button
            variant="outline"
            size="icon"
            className={cn(
              "rounded-full transition-colors",
              isFavorite && "bg-cookbook-50 text-cookbook-700"
            )}
            onClick={toggleFavorite}
          >
            <Heart
              size={20}
              className={cn(
                "transition-all",
                isFavorite ? "fill-cookbook-500 text-cookbook-500" : ""
              )}
            />
          </Button>
        </div>
        
        {/* Recipe header */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          <div className="relative aspect-[16/9] w-full overflow-hidden rounded-2xl">
            <img
              src={recipe.image}
              alt={recipe.title}
              className="h-full w-full object-cover"
            />
          </div>
        </motion.div>
        
        {/* Recipe info */}
        <div className="mt-8">
          <FadeIn>
            <h1 className="font-playfair text-3xl font-bold text-cookbook-900 md:text-4xl">
              {recipe.title}
            </h1>
            
            <p className="mt-4 text-lg text-gray-700">
              {recipe.description}
            </p>
            
            {/* Recipe meta */}
            <div className="mt-6 flex flex-wrap gap-x-6 gap-y-3 text-sm">
              <div className="flex items-center gap-1.5 text-cookbook-700">
                <Clock size={18} />
                <span>{recipe.totalTime || recipe.prepTime}</span>
              </div>
              
              <div className="flex items-center gap-1.5 text-cookbook-700">
                <ChefHat size={18} />
                <span>{recipe.difficulty}</span>
              </div>
              
              <div className="flex items-center gap-1.5 rounded-full bg-cookbook-100 px-2.5 py-1 text-cookbook-800">
                {recipe.category}
              </div>
              
              {recipe.portionSize && (
                <div className="text-cookbook-700">
                  <span className="font-medium">Portionen:</span> {recipe.portionSize}
                </div>
              )}
            </div>
            
            {/* Tags */}
            {recipe.tags && recipe.tags.length > 0 && (
              <div className="mt-4 flex flex-wrap gap-2">
                {recipe.tags.map(tag => (
                  <span
                    key={tag}
                    className="inline-flex items-center rounded-full bg-cookbook-50 px-2.5 py-1 text-xs font-medium text-cookbook-700"
                  >
                    <Tag size={12} className="mr-1" />
                    {tag}
                  </span>
                ))}
              </div>
            )}
          </FadeIn>
          
          {/* Main content */}
          <div className="mt-10 grid gap-8 md:grid-cols-12 md:gap-12">
            {/* Ingredients */}
            <FadeIn className="md:col-span-4" delay={0.1}>
              <div className="rounded-xl bg-white p-6 shadow-md">
                <h2 className="font-playfair text-xl font-bold text-cookbook-800">Zutaten</h2>
                
                {recipe.ingredients.map((group, groupIndex) => (
                  <div key={groupIndex} className="mt-4">
                    {group.group && (
                      <h3 className="mb-2 font-medium text-cookbook-700">
                        {group.group}
                      </h3>
                    )}
                    
                    <ul className="space-y-2">
                      {group.items.map((item, itemIndex) => (
                        <li key={itemIndex}>
                          <CheckboxItem
                            id={`ingredient-${groupIndex}-${itemIndex}`}
                            label={`${item.name}${item.amount ? ` (${item.amount})` : ''}`}
                          />
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </FadeIn>
            
            {/* Steps */}
            <FadeIn className="md:col-span-8" delay={0.2}>
              <div className="rounded-xl bg-white p-6 shadow-md">
                <h2 className="font-playfair text-xl font-bold text-cookbook-800">
                  Zubereitung
                </h2>
                
                {recipe.steps.map((group, groupIndex) => (
                  <div key={groupIndex} className="mt-6">
                    {group.group && (
                      <h3 className="mb-3 font-medium text-cookbook-700">
                        {group.group}
                      </h3>
                    )}
                    
                    <div className="space-y-3">
                      {group.items.map((step, stepIndex) => (
                        <CheckboxStepItem
                          key={stepIndex}
                          id={`step-${groupIndex}-${stepIndex}`}
                          label={step}
                          className="border border-cookbook-100"
                        />
                      ))}
                    </div>
                  </div>
                ))}
              </div>
              
              {/* Tips */}
              {recipe.tips && recipe.tips.length > 0 && (
                <div className="mt-8 rounded-xl bg-cookbook-50 p-6">
                  <h2 className="font-playfair text-xl font-bold text-cookbook-800">
                    Tipps & Tricks
                  </h2>
                  
                  <ul className="mt-4 space-y-3">
                    {recipe.tips.map((tip, index) => (
                      <li key={index} className="flex items-start gap-2">
                        <span className="mt-1 font-bold text-cookbook-700">•</span>
                        <p>{tip}</p>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </FadeIn>
          </div>
        </div>
      </div>
      
      {/* Similar recipes */}
      <section className="mt-16 bg-cookbook-50 py-12">
        <div className="container mx-auto px-4">
          <h2 className="font-playfair text-2xl font-bold text-cookbook-800">
            Das könnte dir auch gefallen
          </h2>
          
          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {recipes
              .filter(r => r.id !== recipe.id && r.category === recipe.category)
              .slice(0, 4)
              .map(similarRecipe => (
                <Link
                  key={similarRecipe.id}
                  to={`/rezept/${similarRecipe.id}`}
                  className="overflow-hidden rounded-lg bg-white shadow-md transition-transform hover:scale-[1.02]"
                >
                  <div className="aspect-[3/2]">
                    <img
                      src={similarRecipe.image}
                      alt={similarRecipe.title}
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <div className="p-4">
                    <h3 className="line-clamp-1 font-medium text-cookbook-800">
                      {similarRecipe.title}
                    </h3>
                    <p className="line-clamp-2 mt-1 text-sm text-gray-600">
                      {similarRecipe.description}
                    </p>
                  </div>
                </Link>
              ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default RecipeDetail;

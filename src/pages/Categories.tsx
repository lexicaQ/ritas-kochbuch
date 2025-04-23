
import { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

import { Header } from "@/components/header";
import { FadeIn } from "@/components/ui/fade-in";
import { RecipeCard } from "@/components/ui/recipe-card";
import recipes from "@/data/recipes";
import { cn } from "@/lib/utils";

const Categories = () => {
  const [activeCategory, setActiveCategory] = useState<string | null>(null);
  
  // Extract unique categories
  const categories = Array.from(new Set(recipes.map(recipe => recipe.category)));
  
  // Filter recipes by active category
  const filteredRecipes = activeCategory
    ? recipes.filter(recipe => recipe.category === activeCategory)
    : [];
  
  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      <div className="container mx-auto mt-20 px-4 py-12">
        <FadeIn>
          <h1 className="font-playfair text-3xl font-bold text-cookbook-800 md:text-4xl">
            Rezeptkategorien
          </h1>
          <p className="mt-2 text-gray-600">
            Finde Rezepte nach deinem Geschmack, sortiert nach Kategorien
          </p>
        </FadeIn>
        
        {/* Category grid */}
        <div className="mt-10 grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {categories.map((category, index) => (
            <FadeIn 
              key={category} 
              delay={index * 0.05}
              className={cn(
                "cursor-pointer overflow-hidden rounded-xl p-6 shadow-md transition-all duration-200",
                activeCategory === category 
                  ? "bg-cookbook-700 text-white" 
                  : "bg-white hover:bg-cookbook-50"
              )}
              onClick={() => setActiveCategory(
                activeCategory === category ? null : category
              )}
            >
              <div className="text-center">
                <h2 className={cn(
                  "font-playfair text-xl font-bold",
                  activeCategory === category ? "text-white" : "text-cookbook-800"
                )}>
                  {category}
                </h2>
                
                <p className={cn(
                  "mt-2 text-sm",
                  activeCategory === category ? "text-white/90" : "text-gray-600"
                )}>
                  {recipes.filter(r => r.category === category).length} Rezepte
                </p>
              </div>
            </FadeIn>
          ))}
        </div>
        
        {/* Recipes in selected category */}
        {activeCategory && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mt-12"
          >
            <div className="mb-6 flex items-center justify-between">
              <div>
                <h2 className="font-playfair text-2xl font-bold text-cookbook-800">
                  {activeCategory}
                </h2>
                <p className="text-gray-600">
                  {filteredRecipes.length} Rezepte in dieser Kategorie
                </p>
              </div>
              
              <button 
                onClick={() => setActiveCategory(null)}
                className="text-sm font-medium text-cookbook-600 hover:underline"
              >
                Auswahl aufheben
              </button>
            </div>
            
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {filteredRecipes.map((recipe, index) => (
                <RecipeCard
                  key={recipe.id}
                  id={recipe.id}
                  title={recipe.title}
                  description={recipe.description}
                  image={recipe.image}
                  duration={recipe.prepTime}
                  difficulty={recipe.difficulty}
                  category={recipe.category}
                  tags={recipe.tags}
                />
              ))}
            </div>
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default Categories;

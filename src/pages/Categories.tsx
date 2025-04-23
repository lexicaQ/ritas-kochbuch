
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, Check } from "lucide-react";

import { Header } from "@/components/header";
import { FadeIn } from "@/components/ui/fade-in";
import { RecipeCard } from "@/components/ui/recipe-card";
import { Button } from "@/components/ui/button";
import recipes from "@/data/recipes";
import { cn } from "@/lib/utils";
import { LoadingSpinner } from "@/components/ui/loading-spinner";

// Category icons (you would replace these with actual images)
const categoryIcons = {
  "Dessert": "🧁",
  "Hauptgericht": "🍲",
  "Vorspeise": "🥗",
  "Brot & Gebäck": "🥖",
  "Salat": "🥬",
  "Vegetarisch": "🥦",
};

const Categories = () => {
  const [activeCategory, setActiveCategory] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [renderedRecipes, setRenderedRecipes] = useState<typeof recipes>([]);
  
  // Extract unique categories and count recipes per category
  const categories = Array.from(new Set(recipes.map(recipe => recipe.category)));
  const recipesPerCategory = categories.reduce((acc, category) => {
    acc[category] = recipes.filter(recipe => recipe.category === category).length;
    return acc;
  }, {} as Record<string, number>);
  
  // Filter recipes by active category
  const filteredRecipes = activeCategory
    ? recipes.filter(recipe => recipe.category === activeCategory)
    : [];
  
  useEffect(() => {
    // Simulate loading for better UX
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 500);
    
    // Gradually render recipes for animation effect
    if (activeCategory && !isLoading) {
      const renderTimer = setTimeout(() => {
        setRenderedRecipes(filteredRecipes);
      }, 300);
      return () => {
        clearTimeout(timer);
        clearTimeout(renderTimer);
      };
    }
    
    return () => clearTimeout(timer);
  }, [activeCategory, filteredRecipes, isLoading]);
  
  return (
    <div className="min-h-screen bg-cookbook-50/20">
      <Header />
      
      {/* Hero section with decorative elements */}
      <div className="relative bg-cookbook-700 py-20 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-cookbook-900/30"></div>
          
          {/* Decorative circles */}
          <div className="absolute top-0 left-10 w-64 h-64 bg-cookbook-600 rounded-full -translate-y-1/2 opacity-40 blur-3xl"></div>
          <div className="absolute bottom-0 right-10 w-80 h-80 bg-cookbook-600 rounded-full translate-y-1/2 opacity-30 blur-3xl"></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <FadeIn>
            <h1 className="font-playfair text-4xl font-bold text-white text-center md:text-5xl">
              Rezeptkategorien
            </h1>
            <p className="mt-4 text-center text-white/80 max-w-2xl mx-auto">
              Entdecke unsere leckeren Gerichte nach Kategorien sortiert und finde genau das, worauf du Lust hast
            </p>
          </FadeIn>
        </div>
      </div>
      
      <div className="container mx-auto px-4 py-12">
        {/* Category cards with animation */}
        <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {categories.map((category, index) => {
            const isActive = activeCategory === category;
            const count = recipesPerCategory[category] || 0;
            
            return (
              <motion.div
                key={category}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                onClick={() => setActiveCategory(isActive ? null : category)}
                className={cn(
                  "cursor-pointer overflow-hidden rounded-xl transition-all duration-300",
                  isActive 
                    ? "ring-4 ring-cookbook-600 ring-offset-2" 
                    : "hover:shadow-lg hover:translate-y-[-5px]"
                )}
              >
                <div className={cn(
                  "p-8 text-center h-full flex flex-col items-center justify-center",
                  isActive
                    ? "bg-gradient-to-br from-cookbook-600 to-cookbook-800 text-white" 
                    : "bg-white shadow-md"
                )}>
                  <div className={cn(
                    "text-4xl mb-4 rounded-full w-16 h-16 flex items-center justify-center",
                    isActive
                      ? "bg-white/20" 
                      : "bg-cookbook-100"
                  )}>
                    {(categoryIcons as any)[category] || "📚"}
                  </div>
                  
                  <h2 className={cn(
                    "font-playfair text-xl font-bold mb-2",
                    isActive ? "text-white" : "text-cookbook-800"
                  )}>
                    {category}
                  </h2>
                  
                  <p className={cn(
                    "text-sm",
                    isActive ? "text-white/80" : "text-gray-600"
                  )}>
                    {count} Rezepte
                  </p>
                  
                  {isActive && (
                    <div className="mt-4 bg-white/20 rounded-full p-2">
                      <Check size={20} className="text-white" />
                    </div>
                  )}
                </div>
              </motion.div>
            );
          })}
        </div>
        
        {/* Recipes in selected category */}
        {activeCategory && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            transition={{ duration: 0.5 }}
            className="mt-16"
          >
            <div className="flex items-center mb-8">
              <div className="h-1 w-6 bg-cookbook-700 rounded-full mr-3"></div>
              <h2 className="font-playfair text-2xl font-bold text-cookbook-800 flex items-center">
                <span>{activeCategory}</span>
                <span className="ml-3 bg-cookbook-100 text-cookbook-700 text-sm rounded-full px-3 py-1">
                  {filteredRecipes.length} Rezepte
                </span>
              </h2>
              <div className="h-1 flex-grow bg-cookbook-200 rounded-full ml-3"></div>
              
              <Button 
                variant="ghost"
                onClick={() => setActiveCategory(null)}
                className="ml-4 text-sm font-medium text-cookbook-600 hover:text-cookbook-800"
              >
                Auswahl aufheben
              </Button>
            </div>
            
            {isLoading ? (
              <div className="flex justify-center items-center py-20">
                <LoadingSpinner size="lg" />
              </div>
            ) : (
              <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {renderedRecipes.map((recipe, index) => (
                  <FadeIn key={recipe.id} delay={index * 0.1}>
                    <RecipeCard
                      id={recipe.id}
                      title={recipe.title}
                      description={recipe.description}
                      image={recipe.image}
                      duration={recipe.prepTime}
                      difficulty={recipe.difficulty}
                      category={recipe.category}
                      tags={recipe.tags}
                    />
                  </FadeIn>
                ))}
              </div>
            )}
            
            <div className="mt-10 flex justify-center">
              <Button asChild variant="outline" className="group">
                <Link to="/rezepte" className="flex items-center gap-2">
                  <span>Alle Rezepte anzeigen</span>
                  <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>
            </div>
          </motion.div>
        )}
        
        {/* Category description section */}
        {!activeCategory && (
          <div className="mt-20">
            <div className="grid gap-8 md:grid-cols-2 items-center">
              <div>
                <FadeIn>
                  <h2 className="font-playfair text-3xl font-bold text-cookbook-800 mb-4">
                    Entdecke unsere Vielfalt
                  </h2>
                  <p className="text-gray-600 mb-4">
                    Von herzhaften Hauptgerichten über frische Salate bis hin zu süßen Desserts - unsere Rezeptsammlung bietet für jeden Geschmack das Richtige.
                  </p>
                  <p className="text-gray-600 mb-6">
                    Wähle eine Kategorie aus und lass dich von unseren Rezeptideen inspirieren. Jedes Rezept wurde sorgfältig ausgewählt und getestet.
                  </p>
                  <Button asChild>
                    <Link to="/rezepte" className="flex items-center gap-2">
                      <span>Alle Rezepte durchsuchen</span>
                      <ArrowRight size={16} />
                    </Link>
                  </Button>
                </FadeIn>
              </div>
              
              <div className="bg-white p-6 rounded-xl shadow-lg border border-cookbook-100">
                <h3 className="font-playfair text-xl font-bold text-cookbook-800 mb-4 pb-2 border-b border-cookbook-100">
                  Beliebteste Kategorien
                </h3>
                <ul className="space-y-3">
                  {categories.slice(0, 5).map((category, index) => (
                    <li key={category}>
                      <button 
                        onClick={() => setActiveCategory(category)}
                        className="w-full flex items-center justify-between p-3 rounded-lg hover:bg-cookbook-50 transition-colors"
                      >
                        <span className="flex items-center gap-3">
                          <span className="text-lg">{(categoryIcons as any)[category] || "📚"}</span>
                          <span className="font-medium">{category}</span>
                        </span>
                        <span className="bg-cookbook-100 text-cookbook-700 text-xs rounded-full px-2 py-1">
                          {recipesPerCategory[category]} Rezepte
                        </span>
                      </button>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Categories;

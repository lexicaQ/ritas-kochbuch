
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

import { Header } from "@/components/header";
import { FadeIn } from "@/components/ui/fade-in";
import { Button } from "@/components/ui/button";
import { RecipeCard } from "@/components/ui/recipe-card";
import recipes from "@/data/recipes";
import { cn } from "@/lib/utils";

const Categories = () => {
  const [activeCategory, setActiveCategory] = useState<string | null>(null);
  const categories = Array.from(new Set(recipes.map(recipe => recipe.category)));
  
  const filteredRecipes = activeCategory
    ? recipes.filter(recipe => recipe.category === activeCategory)
    : recipes;

  return (
    <div className="min-h-screen bg-cookbook-50/20">
      <Header />
      
      <div className="container mx-auto px-4 py-12 mt-32">
        <FadeIn>
          <h1 className="font-playfair text-4xl font-bold text-cookbook-800 md:text-5xl text-center">
            Rezeptkategorien
          </h1>
          <p className="mt-4 text-center text-gray-600 max-w-2xl mx-auto">
            Entdecke unsere leckeren Gerichte nach Kategorien sortiert und finde genau das, worauf du Lust hast
          </p>
        </FadeIn>

        {/* Category filters */}
        <div className="mt-12 flex flex-wrap justify-center gap-3">
          <Button
            variant={activeCategory === null ? "default" : "outline"}
            onClick={() => setActiveCategory(null)}
            className="rounded-full"
          >
            Alle Rezepte
          </Button>
          {categories.map((category) => (
            <Button
              key={category}
              variant={activeCategory === category ? "default" : "outline"}
              onClick={() => setActiveCategory(category)}
              className="rounded-full"
            >
              {category}
            </Button>
          ))}
        </div>

        {/* Recipe grid */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
        >
          {filteredRecipes.map((recipe, index) => (
            <FadeIn key={recipe.id} delay={index * 0.05}>
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
        </motion.div>

        {/* Show all recipes button */}
        {activeCategory && (
          <div className="mt-12 flex justify-center">
            <Button asChild variant="outline" className="group">
              <Link to="/rezepte" className="flex items-center gap-2">
                <span>Alle Rezepte anzeigen</span>
                <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Categories;

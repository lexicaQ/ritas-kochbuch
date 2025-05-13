
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Header } from "@/components/header";
import { FadeIn } from "@/components/ui/fade-in";
import { RecipeCard } from "@/components/ui/recipe-card";
import { Separator } from "@/components/ui/separator";
import recipes from "@/data/recipes";
import { cn } from "@/lib/utils";

const Categories = () => {
  const categorizedRecipes = recipes.reduce((acc, recipe) => {
    if (!acc[recipe.category]) {
      acc[recipe.category] = [];
    }
    acc[recipe.category].push(recipe);
    return acc;
  }, {} as Record<string, typeof recipes>);

  const categories = Object.keys(categorizedRecipes).sort();

  return (
    <div className="min-h-screen bg-cookbook-50/20">
      <Header />
      
      <main className="container mx-auto px-4 py-12 mt-36">
        <FadeIn>
          <h1 className="font-playfair text-4xl font-bold text-cookbook-800 md:text-5xl text-center">
            Rezeptkategorien
          </h1>
          <p className="mt-4 text-center text-gray-600 max-w-2xl mx-auto">
            Entdecke unsere leckeren Gerichte nach Kategorien sortiert und finde genau das, worauf du Lust hast
          </p>
        </FadeIn>

        <div className="mt-16 space-y-16">
          {categories.map((category, categoryIndex) => (
            <motion.section
              key={category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: categoryIndex * 0.1 }}
              viewport={{ once: true }}
              className="first:mt-0"
            >
              <div className="flex items-center gap-4">
                <h2 className="font-playfair text-3xl font-bold text-cookbook-800">
                  {category}
                </h2>
                <Separator className="flex-1" />
              </div>
              
              <div className="mt-6 grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                {categorizedRecipes[category].map((recipe, index) => (
                  <FadeIn key={recipe.id} delay={index * 0.05}>
                    <RecipeCard
                      id={recipe.id}
                      title={recipe.title}
                      description={recipe.description}
                      image={recipe.image || `https://images.unsplash.com/photo-${1556911220 + index}-bff31c812dba?q=80&w=1000&auto=format&fit=crop`}
                      duration={recipe.prepTime}
                      difficulty={recipe.difficulty}
                      category={recipe.category}
                      tags={recipe.tags}
                    />
                  </FadeIn>
                ))}
              </div>
            </motion.section>
          ))}
        </div>
      </main>
    </div>
  );
};

export default Categories;

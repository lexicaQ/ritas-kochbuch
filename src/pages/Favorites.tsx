
import { useState, useEffect } from "react";
import { Heart } from "lucide-react";

import { Header } from "@/components/header";
import { FadeIn } from "@/components/ui/fade-in";
import { RecipeCard } from "@/components/ui/recipe-card";
import recipes from "@/data/recipes";

const Favorites = () => {
  const [favorites, setFavorites] = useState(recipes.filter(recipe => recipe.isFavorite));
  
  // Update favorites when recipes change
  useEffect(() => {
    setFavorites(recipes.filter(recipe => recipe.isFavorite));
  }, []);
  
  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      <div className="container mx-auto mt-20 px-4 py-12">
        <FadeIn>
          <div className="flex items-center gap-3">
            <Heart size={24} className="text-cookbook-600" />
            <h1 className="font-playfair text-3xl font-bold text-cookbook-800 md:text-4xl">
              Meine Favoriten
            </h1>
          </div>
          <p className="mt-2 text-gray-600">
            Deine Lieblingsrezepte an einem Ort
          </p>
        </FadeIn>
        
        <div className="mt-10">
          {favorites.length > 0 ? (
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {favorites.map((recipe, index) => (
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
            </div>
          ) : (
            <div className="rounded-xl bg-cookbook-50 p-10 text-center">
              <Heart size={48} className="mx-auto text-cookbook-300" />
              <h2 className="mt-4 font-playfair text-xl font-bold text-cookbook-800">
                Noch keine Favoriten
              </h2>
              <p className="mt-2 text-gray-600">
                Du hast noch keine Rezepte zu deinen Favoriten hinzugefügt. Markiere Rezepte mit dem Herz-Symbol, um sie hier zu speichern.
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Favorites;

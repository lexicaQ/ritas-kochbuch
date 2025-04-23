
import { useState, useEffect, useRef } from "react";
import { Heart } from "lucide-react";

import { Header } from "@/components/header";
import { FadeIn } from "@/components/ui/fade-in";
import { RecipeCard } from "@/components/ui/recipe-card";
import recipes from "@/data/recipes";
import { useToast } from "@/hooks/use-toast";

const Favorites = () => {
  // Only include recipes that have been manually favorited by the user
  const [favorites, setFavorites] = useState<typeof recipes>([]);
  const { toast } = useToast();
  const toastShown = useRef(false);
  
  // Get favorites from localStorage to ensure we only show user-selected favorites
  useEffect(() => {
    // Retrieve user favorites from localStorage
    const userFavorites = localStorage.getItem('userFavorites');
    let favoriteIds: string[] = [];
    
    if (userFavorites) {
      try {
        favoriteIds = JSON.parse(userFavorites);
      } catch (e) {
        console.error("Error parsing favorites:", e);
      }
    }
    
    // Filter recipes that match user's manually favorited IDs
    const userFavoritedRecipes = recipes.filter(recipe => 
      favoriteIds.includes(recipe.id)
    );
    
    setFavorites(userFavoritedRecipes);
    
    // Show toast if no favorites and toast hasn't been shown yet
    if (userFavoritedRecipes.length === 0 && !toastShown.current) {
      toast({
        title: "Keine Favoriten",
        description: "Du hast noch keine Rezepte zu deinen Favoriten hinzugefügt.",
        variant: "default",
      });
      toastShown.current = true;
    }
  }, [toast]);
  
  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      <div className="container mx-auto mt-36 px-4 py-12">
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
                    isFavorite={true}
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


import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

import { Button } from "@/components/ui/button";
import { RecipeCard } from "@/components/ui/recipe-card";
import { SearchBar } from "@/components/search-bar";
import { FadeIn } from "@/components/ui/fade-in";
import { Header } from "@/components/header";
import recipes from "@/data/recipes";

const Index = () => {
  const [searchResults, setSearchResults] = useState<typeof recipes | null>(null);
  
  const featuredRecipes = recipes.filter(recipe => recipe.isFavorite).slice(0, 4);

  const handleSearch = (query: string, filters: string[]) => {
    if (!query && filters.length === 0) {
      setSearchResults(null);
      return;
    }
    
    const lowercaseQuery = query.toLowerCase();
    
    const results = recipes.filter(recipe => {
      const matchesQuery = !query || 
        recipe.title.toLowerCase().includes(lowercaseQuery) ||
        recipe.description.toLowerCase().includes(lowercaseQuery);
        
      const matchesFilters = filters.length === 0 || 
        filters.some(filter => 
          recipe.category === filter || 
          recipe.tags.includes(filter)
        );
        
      return matchesQuery && matchesFilters;
    });
    
    setSearchResults(results);
  };

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero section */}
      <section className="relative bg-gradient-to-b from-cookbook-900/5 to-white pt-32">
        <div className="container mx-auto px-4 py-12 md:py-16">
          <FadeIn className="mx-auto max-w-3xl text-center">
            <h1 className="font-playfair text-4xl font-bold text-cookbook-900 md:text-5xl lg:text-6xl">
              Willkommen bei{" "}
              <span className="text-cookbook-700">Ritas Kochbuch</span>
            </h1>
            <p className="mt-6 text-lg text-gray-700">
              Entdecke köstliche Rezepte, erstellt mit Leidenschaft und Sorgfalt. Von herzhaften Hauptgerichten bis zu süßen Leckerbissen – hier findest du alles für jeden Geschmack und jede Gelegenheit.
            </p>
            
            <div className="mt-10">
              <SearchBar 
                onSearch={handleSearch} 
                className="mx-auto max-w-2xl"
              />
            </div>
          </FadeIn>

          {/* Search results */}
          {searchResults && (
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="mt-12"
            >
              <h2 className="mb-6 text-2xl font-semibold text-cookbook-800">
                Suchergebnisse ({searchResults.length})
              </h2>
              
              {searchResults.length > 0 ? (
                <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                  {searchResults.map((recipe) => (
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
              ) : (
                <div className="rounded-lg bg-muted p-6 text-center">
                  <p className="text-lg font-medium text-gray-700">
                    Keine Rezepte gefunden. Versuche es mit anderen Suchbegriffen.
                  </p>
                </div>
              )}
            </motion.div>
          )}
        </div>
      </section>
      
      {/* Featured recipes */}
      {!searchResults && (
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="mb-10 flex items-end justify-between">
              <FadeIn>
                <h2 className="font-playfair text-3xl font-bold text-cookbook-800">
                  Beliebteste Rezepte
                </h2>
                <p className="mt-2 text-gray-600">
                  Unsere meistgeliebten Rezepte, die immer wieder begeistern
                </p>
              </FadeIn>
              
              <FadeIn direction="left">
                <Link to="/rezepte">
                  <Button variant="outline" className="group">
                    <span>Alle anzeigen</span>
                    <ArrowRight size={16} className="ml-2 transition-transform group-hover:translate-x-1" />
                  </Button>
                </Link>
              </FadeIn>
            </div>
            
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {featuredRecipes.map((recipe, index) => (
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
          </div>
        </section>
      )}
      
      {/* Categories preview */}
      {!searchResults && (
        <section className="bg-cookbook-50 py-16">
          <div className="container mx-auto px-4">
            <FadeIn className="mb-10 text-center">
              <h2 className="font-playfair text-3xl font-bold text-cookbook-800">
                Entdecke nach Kategorien
              </h2>
              <p className="mt-2 text-gray-600">
                Finde Inspiration für deine nächste kulinarische Kreation
              </p>
            </FadeIn>
            
            <div className="mt-10 grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
              {["Dessert", "Hauptgericht", "Vorspeise", "Brot & Gebäck"].map((category, index) => (
                <FadeIn 
                  key={category} 
                  delay={index * 0.1} 
                  className="overflow-hidden rounded-xl bg-white shadow-md transition-transform hover:scale-[1.02]"
                >
                  <Link to={`/kategorien/${category.toLowerCase()}`} className="block p-8 text-center">
                    <h3 className="font-playfair text-xl font-bold text-cookbook-800">{category}</h3>
                    <p className="mt-2 text-sm text-gray-600">
                      {index === 0 && "Süße Köstlichkeiten für jeden Anlass"}
                      {index === 1 && "Herzhafte Gerichte für die ganze Familie"}
                      {index === 2 && "Perfekte Starter für dein Menü"}
                      {index === 3 && "Selbstgebackene Teigwaren mit Charakter"}
                    </p>
                  </Link>
                </FadeIn>
              ))}
            </div>
            
            <div className="mt-8 text-center">
              <Link to="/kategorien">
                <Button>Alle Kategorien anzeigen</Button>
              </Link>
            </div>
          </div>
        </section>
      )}
    </div>
  );
};

export default Index;

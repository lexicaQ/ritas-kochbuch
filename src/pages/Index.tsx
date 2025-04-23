
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Search, Clock, ChefHat, Heart, ChevronsRight } from "lucide-react";
import { Link } from "react-router-dom";

import { Button } from "@/components/ui/button";
import { RecipeCard } from "@/components/ui/recipe-card";
import { SearchBar } from "@/components/search-bar";
import { FadeIn } from "@/components/ui/fade-in";
import { Header } from "@/components/header";
import recipes from "@/data/recipes";
import { LoadingSpinner } from "@/components/ui/loading-spinner";
import { cn } from "@/lib/utils";

const Index = () => {
  const [searchResults, setSearchResults] = useState<typeof recipes | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [visibleCategories, setVisibleCategories] = useState<string[]>([]);
  
  const featuredRecipes = recipes.filter(recipe => recipe.isFavorite).slice(0, 4);
  const categories = Array.from(new Set(recipes.map(recipe => recipe.category)));
  
  // Get recipes for popular categories
  const categoryRecipes = categories.reduce((acc, category) => {
    acc[category] = recipes.filter(r => r.category === category).slice(0, 4);
    return acc;
  }, {} as Record<string, typeof recipes>);

  // Logo component
  const Logo = () => (
    <div className="rounded-full bg-cookbook-700 h-12 w-12 flex items-center justify-center shadow-lg">
      <span className="text-white font-playfair font-bold text-xl">R</span>
    </div>
  );
  
  useEffect(() => {
    if (categories.length > 0) {
      // Start with first 3 categories
      setVisibleCategories(categories.slice(0, 2));
    }
  }, []);

  const handleSearch = (query: string, filters: string[]) => {
    if (!query && filters.length === 0) {
      setSearchResults(null);
      setIsLoading(false);
      return;
    }
    
    setIsLoading(true);
    
    // Simulate search delay for better UX
    setTimeout(() => {
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
      setIsLoading(false);
    }, 500);
  };

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero section with animated background */}
      <section className="relative bg-cookbook-700 pt-32 pb-16">
        <div className="absolute inset-0 overflow-hidden">
          {/* Decorative elements */}
          <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-cookbook-600 rounded-full blur-3xl opacity-20"></div>
          <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-cookbook-600 rounded-full blur-3xl opacity-30"></div>
          <div className="absolute top-1/2 right-1/3 w-40 h-40 bg-cookbook-800 rounded-full blur-2xl opacity-20"></div>
          
          {/* Offset grid pattern */}
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#10261180_1px,transparent_1px),linear-gradient(to_bottom,#10261180_1px,transparent_1px)] bg-[size:24px_24px]"></div>
        </div>
        
        <div className="container mx-auto px-4 py-12 md:py-16 relative z-10">
          <div className="mx-auto max-w-4xl text-center">
            <motion.div 
              initial={{ y: -20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="flex justify-center mb-8"
            >
              <Logo />
            </motion.div>
            
            <FadeIn className="mx-auto max-w-3xl text-center">
              <h1 className="font-playfair text-4xl font-bold text-white md:text-5xl lg:text-6xl">
                Willkommen bei{" "}
                <span className="text-white">Ritas Kochbuch</span>
              </h1>
              <p className="mt-6 text-lg text-white/80">
                Entdecke köstliche Rezepte, erstellt mit Leidenschaft und Sorgfalt. Von herzhaften Hauptgerichten bis zu süßen Leckerbissen – hier findest du alles für jeden Geschmack und jede Gelegenheit.
              </p>
              
              <div className="mt-10">
                <SearchBar 
                  onSearch={handleSearch} 
                  className="mx-auto max-w-2xl"
                />
              </div>
            </FadeIn>
          </div>

          {/* Search results */}
          {(searchResults || isLoading) && (
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="mt-12 bg-white rounded-xl shadow-xl p-6 max-w-5xl mx-auto"
            >
              <h2 className="mb-6 text-2xl font-semibold text-cookbook-800 flex items-center gap-2">
                <Search size={20} />
                <span>Suchergebnisse {!isLoading && `(${searchResults?.length || 0})`}</span>
              </h2>
              
              {isLoading ? (
                <div className="py-12 flex justify-center">
                  <LoadingSpinner size="lg" />
                </div>
              ) : searchResults && searchResults.length > 0 ? (
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
                <div className="rounded-lg bg-cookbook-50/50 p-6 text-center">
                  <p className="text-lg font-medium text-gray-700">
                    Keine Rezepte gefunden. Versuche es mit anderen Suchbegriffen.
                  </p>
                </div>
              )}
              
              <div className="mt-6 text-center">
                <Button onClick={() => setSearchResults(null)} variant="outline">
                  Suche zurücksetzen
                </Button>
              </div>
            </motion.div>
          )}
        </div>
      </section>
      
      {/* Featured recipes */}
      {!searchResults && !isLoading && (
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="mb-10 flex items-end justify-between">
              <FadeIn>
                <div className="flex items-center gap-3">
                  <div className="h-8 w-2 bg-cookbook-700 rounded-full"></div>
                  <h2 className="font-playfair text-3xl font-bold text-cookbook-800">
                    Beliebteste Rezepte
                  </h2>
                </div>
                <p className="mt-2 text-gray-600 ml-5">
                  Unsere meistgeliebten Rezepte, die immer wieder begeistern
                </p>
              </FadeIn>
              
              <FadeIn direction="left">
                <Link to="/rezepte">
                  <Button variant="outline" className="group flex items-center gap-2">
                    <span>Alle anzeigen</span>
                    <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
                  </Button>
                </Link>
              </FadeIn>
            </div>
            
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {featuredRecipes.map((recipe, index) => (
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
            
            {/* Featured categories preview */}
            <div className="mt-10 text-center">
              <Link to="/rezepte">
                <Button className="group">
                  <span>Mehr Rezepte entdecken</span>
                  <ChevronsRight className="ml-1 transition-transform group-hover:translate-x-1" />
                </Button>
              </Link>
            </div>
          </div>
        </section>
      )}
      
      {/* Categories preview with recipes */}
      {!searchResults && !isLoading && visibleCategories.map((category, categoryIndex) => (
        <section 
          key={category}
          className={cn(
            "py-16",
            categoryIndex % 2 === 0 ? "bg-cookbook-50/30" : "bg-white"
          )}
        >
          <div className="container mx-auto px-4">
            <div className="mb-10 flex items-center justify-between">
              <FadeIn>
                <div className="flex items-center gap-3">
                  <div className="h-8 w-2 bg-cookbook-700 rounded-full"></div>
                  <h2 className="font-playfair text-3xl font-bold text-cookbook-800">
                    {category}
                  </h2>
                </div>
              </FadeIn>
              
              <FadeIn direction="left">
                <Link to={`/kategorien`}>
                  <Button variant="outline" className="group flex items-center gap-2">
                    <span>Kategorie anzeigen</span>
                    <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
                  </Button>
                </Link>
              </FadeIn>
            </div>
            
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {categoryRecipes[category]?.map((recipe, index) => (
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
          </div>
        </section>
      ))}
      
      {/* All categories navigation section */}
      {!searchResults && !isLoading && (
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <FadeIn className="mb-10 text-center">
              <h2 className="font-playfair text-3xl font-bold text-cookbook-800">
                Entdecke nach Kategorien
              </h2>
              <p className="mt-2 text-gray-600">
                Finde Inspiration für deine nächste kulinarische Kreation
              </p>
            </FadeIn>
            
            <div className="mt-10 grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
              {categories.map((category, index) => (
                <FadeIn 
                  key={category} 
                  delay={index * 0.1} 
                >
                  <Link to={`/kategorien`} 
                    className="group block overflow-hidden rounded-xl bg-white shadow-md transition-all hover:shadow-xl"
                  >
                    <div className="aspect-[16/9] relative overflow-hidden">
                      {/* Display first recipe image from category */}
                      {categoryRecipes[category]?.[0]?.image && (
                        <>
                          <img 
                            src={categoryRecipes[category][0].image}
                            alt={category}
                            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                          />
                          <div className="absolute inset-0 bg-cookbook-900/30 group-hover:bg-cookbook-900/20 transition-colors"></div>
                        </>
                      )}
                      
                      <div className="absolute inset-0 flex items-center justify-center">
                        <h3 className="font-playfair text-2xl font-bold text-white bg-cookbook-800/80 px-4 py-2 rounded-lg">
                          {category}
                        </h3>
                      </div>
                    </div>
                    
                    <div className="p-4">
                      <div className="flex justify-between items-center">
                        <span className="text-sm text-cookbook-700">
                          {recipes.filter(r => r.category === category).length} Rezepte
                        </span>
                        <ArrowRight size={16} className="text-cookbook-700 transition-transform group-hover:translate-x-1" />
                      </div>
                    </div>
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

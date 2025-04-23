
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Search, Clock, ChefHat, ChevronsRight } from "lucide-react";
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
  
  useEffect(() => {
    if (categories.length > 0) {
      // Start with first 2 categories
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
            recipe.tags.includes(filter) ||
            (filter === "Leicht" && recipe.difficulty === "leicht") ||
            (filter === "Mittel" && recipe.difficulty === "normal") ||
            (filter === "Schwer" && recipe.difficulty === "schwer")
          );
          
        return matchesQuery && matchesFilters;
      });
      
      setSearchResults(results);
      setIsLoading(false);
    }, 500);
  };

  // Removed the redundant handleSearchInputChange and showSuggestions state since we're now handling it in SearchBar

  // Enhanced animated decorative elements for hero section
  const decorativeElements = [
    { delay: 0, x: "20%", y: "20%", size: "xl" },
    { delay: 0.2, x: "80%", y: "60%", size: "lg" },
    { delay: 0.4, x: "50%", y: "30%", size: "md" },
    { delay: 0.6, x: "10%", y: "70%", size: "sm" },
    { delay: 0.8, x: "90%", y: "10%", size: "xs" },
  ];

  // Animated utensil icons
  const DecorativeElement = ({ delay, x, y, size }: any) => {
    const sizes = {
      xs: "w-6 h-6",
      sm: "w-12 h-12",
      md: "w-16 h-16",
      lg: "w-20 h-20",
      xl: "w-24 h-24",
    };
    
    return (
      <motion.div
        className={cn(
          "absolute text-white/5 pointer-events-none",
          sizes[size as keyof typeof sizes]
        )}
        style={{ left: x, top: y }}
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{
          duration: 1,
          delay,
          ease: "easeOut"
        }}
      >
        {/* Simple circular decorative element */}
        <div className="w-full h-full rounded-full border-2 border-white/10 backdrop-blur-sm" />
      </motion.div>
    );
  };

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Modern Hero section with animated background */}
      <section className="relative bg-cookbook-700 pt-32 pb-16">
        <div className="absolute inset-0 overflow-hidden">
          {/* Animated gradient background */}
          <motion.div 
            className="absolute inset-0 bg-gradient-to-br from-cookbook-800 via-cookbook-700 to-cookbook-600"
            animate={{
              backgroundPosition: ['0% 0%', '100% 100%'],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              repeatType: "reverse",
              ease: "linear"
            }}
          />
          
          {/* Decorative elements */}
          {decorativeElements.map((elem, i) => (
            <DecorativeElement key={i} {...elem} />
          ))}
          
          {/* Animated particles */}
          <div className="absolute inset-0">
            {Array.from({ length: 20 }).map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-2 h-2 rounded-full bg-white/10"
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                }}
                animate={{
                  y: [0, Math.random() * -50],
                  opacity: [0, 0.7, 0],
                }}
                transition={{
                  duration: 3 + Math.random() * 3,
                  repeat: Infinity,
                  delay: Math.random() * 5,
                }}
              />
            ))}
          </div>
        </div>
        
        <div className="container mx-auto px-4 py-12 md:py-16 relative z-10">
          <div className="mx-auto max-w-4xl text-center">
            <FadeIn className="mx-auto max-w-3xl text-center">
              <motion.h1 
                className="font-playfair text-4xl font-bold text-white md:text-5xl lg:text-6xl"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.2 }}
              >
                Willkommen bei{" "}
                <motion.span 
                  className="relative inline-block"
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <span className="relative z-10">Ritas Kochbuch</span>
                  <motion.span 
                    className="absolute inset-x-0 bottom-0 h-3 bg-cookbook-500/30 rounded-full -z-10"
                    initial={{ width: 0 }}
                    animate={{ width: "100%" }}
                    transition={{ duration: 0.5, delay: 0.8 }}
                  />
                </motion.span>
              </motion.h1>
              
              <motion.p 
                className="mt-6 text-lg text-white/80"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.7, delay: 0.5 }}
              >
                Entdecke köstliche Rezepte, erstellt mit Leidenschaft und Sorgfalt. Von herzhaften Hauptgerichten bis zu süßen Leckerbissen – hier findest du alles für jeden Geschmack und jede Gelegenheit.
              </motion.p>
              
              <motion.div 
                className="mt-10 relative"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.8 }}
              >
                <SearchBar 
                  onSearch={handleSearch}
                  className="mx-auto max-w-2xl"
                />
                
                {/* Removed redundant search suggestions container */}
              </motion.div>
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
      
      {/* Categories preview with improved layout */}
      {!searchResults && !isLoading && (
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <FadeIn className="mb-10 text-center">
              <h2 className="font-playfair text-3xl font-bold text-cookbook-800">
                Entdecke nach Kategorien
              </h2>
              <p className="mt-2 text-gray-600 mx-auto max-w-2xl">
                Finde Inspiration für deine nächste kulinarische Kreation in unseren übersichtlichen Kategorien
              </p>
            </FadeIn>
            
            <div className="mt-10 grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
              {categories.map((category, index) => (
                <FadeIn 
                  key={category} 
                  delay={index * 0.1} 
                >
                  <Link to={`/kategorien`} 
                    className="group relative block overflow-hidden rounded-xl bg-white shadow-md transition-all hover:shadow-xl border border-cookbook-100"
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
                          <div className="absolute inset-0 bg-gradient-to-t from-cookbook-900/60 to-cookbook-900/10 group-hover:from-cookbook-900/40 transition-colors"></div>
                        </>
                      )}
                      
                      <div className="absolute inset-0 flex items-center justify-center">
                        <h3 className="font-playfair text-2xl font-bold text-white bg-cookbook-800/70 px-4 py-2 rounded-lg backdrop-blur-sm shadow-lg transform transition-transform group-hover:scale-105">
                          {category}
                        </h3>
                      </div>
                    </div>
                    
                    <div className="p-4">
                      <div className="flex justify-between items-center">
                        <span className="text-sm text-cookbook-700">
                          {recipes.filter(r => r.category === category).length} Rezepte
                        </span>
                        <motion.div
                          whileHover={{ x: 5 }}
                          transition={{ type: "spring", stiffness: 400 }}
                        >
                          <ArrowRight size={16} className="text-cookbook-700" />
                        </motion.div>
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

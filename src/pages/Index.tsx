
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Search, Clock, ChefHat, ChevronsRight, Heart, Star, BarChart, Flame } from "lucide-react";
import { Link } from "react-router-dom";

import { Button } from "@/components/ui/button";
import { RecipeCard } from "@/components/ui/recipe-card";
import { SearchBar } from "@/components/search-bar";
import { FadeIn } from "@/components/ui/fade-in";
import { Header } from "@/components/header";
import recipes from "@/data/recipes";
import { LoadingSpinner } from "@/components/ui/loading-spinner";
import { cn } from "@/lib/utils";
import { useToast } from "@/hooks/use-toast";

// Define the interface for decorative elements
interface DecorativeElementProps {
  x: string;
  y: string;
  rotate: number;
  scale: number;
  opacity: number;
  delay: number;
  duration: number;
  type: 'circle' | 'square' | 'triangle' | 'dot';
}

// Create array of decorative elements
const decorativeElements: DecorativeElementProps[] = [
  { x: '10%', y: '20%', rotate: 0, scale: 1, opacity: 0.3, delay: 0, duration: 20, type: 'circle' },
  { x: '85%', y: '15%', rotate: 45, scale: 0.8, opacity: 0.2, delay: 1, duration: 15, type: 'square' },
  { x: '20%', y: '80%', rotate: 180, scale: 1.2, opacity: 0.15, delay: 2, duration: 25, type: 'triangle' },
  { x: '70%', y: '70%', rotate: 90, scale: 0.7, opacity: 0.25, delay: 0.5, duration: 18, type: 'dot' },
  { x: '40%', y: '30%', rotate: 30, scale: 0.9, opacity: 0.1, delay: 1.5, duration: 22, type: 'circle' },
];

// Create the DecorativeElement component
const DecorativeElement = ({ x, y, rotate, scale, opacity, delay, duration, type }: DecorativeElementProps) => {
  let element;
  
  switch (type) {
    case 'circle':
      element = <div className="w-16 h-16 rounded-full bg-white/5" />;
      break;
    case 'square':
      element = <div className="w-12 h-12 bg-white/5" />;
      break;
    case 'triangle':
      element = (
        <div className="w-0 h-0 
                      border-l-[10px] border-l-transparent
                      border-b-[16px] border-b-white/5
                      border-r-[10px] border-r-transparent" />
      );
      break;
    case 'dot':
      element = <div className="w-3 h-3 rounded-full bg-white/10" />;
      break;
  }
  
  return (
    <motion.div
      className="absolute z-0"
      style={{ left: x, top: y }}
      initial={{ opacity: 0, rotate, scale: 0 }}
      animate={{
        opacity,
        rotate: rotate + 360,
        scale,
      }}
      transition={{
        duration,
        delay,
        repeat: Infinity,
        repeatType: "reverse",
        ease: "easeInOut"
      }}
    >
      {element}
    </motion.div>
  );
};

const Index = () => {
  const [searchResults, setSearchResults] = useState<typeof recipes | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [visibleCategories, setVisibleCategories] = useState<string[]>([]);
  const [favoriteRecipes, setFavoriteRecipes] = useState<typeof recipes>([]);
  const [mostCookedRecipes, setMostCookedRecipes] = useState<typeof recipes>([]);
  const [topRatedRecipes, setTopRatedRecipes] = useState<typeof recipes>([]);
  const { toast } = useToast();
  
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
    
    // Load user favorites from localStorage
    const loadFavorites = () => {
      try {
        const storedFavorites = localStorage.getItem('user-favorite-recipes');
        if (storedFavorites) {
          const favoriteIds = JSON.parse(storedFavorites) as string[];
          const userFavorites = recipes.filter(recipe => favoriteIds.includes(recipe.id));
          setFavoriteRecipes(userFavorites);
        }
      } catch (error) {
        console.error('Error loading favorites:', error);
      }
    };
    
    // Load most cooked recipes based on visit count
    const loadMostCooked = () => {
      try {
        const visitCounts = {};
        const completedCounts = {};
        
        // Get all localStorage keys
        for (let i = 0; i < localStorage.length; i++) {
          const key = localStorage.key(i);
          
          // Track visit counts
          if (key && key.startsWith('recipe-visit-count-')) {
            const recipeId = key.replace('recipe-visit-count-', '');
            visitCounts[recipeId] = parseInt(localStorage.getItem(key) || '0');
          }
          
          // Track completion counts
          if (key && key.startsWith('recipe-completed-count-')) {
            const recipeId = key.replace('recipe-completed-count-', '');
            completedCounts[recipeId] = parseInt(localStorage.getItem(key) || '0');
          }
        }
        
        // Sort recipes by completion count first, then visit count
        const sortedRecipes = [...recipes].sort((a, b) => {
          const aCompleted = completedCounts[a.id] || 0;
          const bCompleted = completedCounts[b.id] || 0;
          
          if (aCompleted !== bCompleted) {
            return bCompleted - aCompleted;
          }
          
          const aVisits = visitCounts[a.id] || 0;
          const bVisits = visitCounts[b.id] || 0;
          return bVisits - aVisits;
        });
        
        setMostCookedRecipes(sortedRecipes.slice(0, 4));
      } catch (error) {
        console.error('Error loading most cooked recipes:', error);
      }
    };
    
    // Load highest rated recipes
    const loadTopRated = () => {
      try {
        const ratings = {};
        const ratingCounts = {};
        
        // Get all localStorage keys
        for (let i = 0; i < localStorage.length; i++) {
          const key = localStorage.key(i);
          
          // Track ratings
          if (key && key.startsWith('recipe-rating-')) {
            const recipeId = key.replace('recipe-rating-', '');
            ratings[recipeId] = parseFloat(localStorage.getItem(key) || '0');
            
            // Also get count of ratings
            const countKey = `recipe-rating-count-${recipeId}`;
            ratingCounts[recipeId] = parseInt(localStorage.getItem(countKey) || '1');
          }
        }
        
        // Sort recipes by rating (only include recipes with at least one rating)
        const ratedRecipes = recipes.filter(recipe => ratings[recipe.id] > 0);
        const sortedRecipes = [...ratedRecipes].sort((a, b) => {
          return (ratings[b.id] || 0) - (ratings[a.id] || 0);
        });
        
        setTopRatedRecipes(sortedRecipes.slice(0, 4));
      } catch (error) {
        console.error('Error loading top-rated recipes:', error);
      }
    };
    
    loadFavorites();
    loadMostCooked();
    loadTopRated();
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

  const EmptySectionPlaceholder = ({ icon: Icon, title, description }) => (
    <div className="bg-cookbook-50 rounded-xl p-8 text-center">
      <div className="mx-auto mb-4 h-12 w-12 rounded-full bg-cookbook-100 flex items-center justify-center">
        <Icon className="text-cookbook-700" size={24} />
      </div>
      <h3 className="text-xl font-medium text-cookbook-800 mb-2">{title}</h3>
      <p className="text-cookbook-600">{description}</p>
    </div>
  );

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Modern Hero section with animated background - now with white text */}
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
                  <span className="relative z-10 text-white">Ritas Kochbuch</span>
                  <motion.span 
                    className="absolute inset-x-0 bottom-0 h-3 bg-cookbook-500/30 rounded-full -z-10"
                    initial={{ width: 0 }}
                    animate={{ width: "100%" }}
                    transition={{ duration: 0.5, delay: 0.8 }}
                  />
                </motion.span>
              </motion.h1>
              
              <motion.p 
                className="mt-6 text-lg text-white"
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
      
      {/* User's favorite recipes - new section */}
      {!searchResults && !isLoading && (
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="mb-10 flex items-end justify-between">
              <FadeIn>
                <div className="flex items-center gap-3">
                  <div className="h-8 w-2 bg-cookbook-700 rounded-full"></div>
                  <h2 className="font-playfair text-3xl font-bold text-cookbook-800 flex items-center gap-2">
                    <Heart size={24} className="text-cookbook-500" />
                    Deine Favoriten
                  </h2>
                </div>
                <p className="mt-2 text-gray-600 ml-5">
                  Rezepte, die du als Favorit markiert hast
                </p>
              </FadeIn>
              
              {favoriteRecipes.length > 0 && (
                <FadeIn direction="left">
                  <Link to="/favoriten">
                    <Button variant="outline" className="group flex items-center gap-2">
                      <span>Alle Favoriten</span>
                      <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
                    </Button>
                  </Link>
                </FadeIn>
              )}
            </div>
            
            {favoriteRecipes.length > 0 ? (
              <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
                {favoriteRecipes.slice(0, 4).map((recipe, index) => (
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
                      isFavorite={true}
                    />
                  </FadeIn>
                ))}
              </div>
            ) : (
              <EmptySectionPlaceholder 
                icon={Heart} 
                title="Noch keine Favoriten" 
                description="Markiere Rezepte als Favorit, um sie hier zu sehen" 
              />
            )}
          </div>
        </section>
      )}
      
      {/* Most cooked recipes - new section */}
      {!searchResults && !isLoading && (
        <section className="py-16 bg-cookbook-50/50">
          <div className="container mx-auto px-4">
            <div className="mb-10 flex items-end justify-between">
              <FadeIn>
                <div className="flex items-center gap-3">
                  <div className="h-8 w-2 bg-cookbook-700 rounded-full"></div>
                  <h2 className="font-playfair text-3xl font-bold text-cookbook-800 flex items-center gap-2">
                    <Flame size={24} className="text-cookbook-600" />
                    Häufig gekocht
                  </h2>
                </div>
                <p className="mt-2 text-gray-600 ml-5">
                  Deine am häufigsten gekochten Rezepte
                </p>
              </FadeIn>
              
              <FadeIn direction="left">
                <Link to="/rezepte">
                  <Button variant="outline" className="group flex items-center gap-2">
                    <span>Alle Rezepte</span>
                    <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
                  </Button>
                </Link>
              </FadeIn>
            </div>
            
            {mostCookedRecipes.length > 0 && mostCookedRecipes.some(recipe => {
              const count = localStorage.getItem(`recipe-completed-count-${recipe.id}`);
              return count && parseInt(count) > 0;
            }) ? (
              <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
                {mostCookedRecipes.map((recipe, index) => {
                  const completedCount = localStorage.getItem(`recipe-completed-count-${recipe.id}`) || '0';
                  const visitCount = localStorage.getItem(`recipe-visit-count-${recipe.id}`) || '0';
                  
                  return (
                    <FadeIn key={recipe.id} delay={index * 0.1}>
                      <div className="relative">
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
                        {parseInt(completedCount) > 0 && (
                          <div className="absolute top-3 right-3 bg-cookbook-700 text-white text-xs px-2 py-1 rounded-full">
                            {completedCount}x gekocht
                          </div>
                        )}
                      </div>
                    </FadeIn>
                  );
                })}
              </div>
            ) : (
              <EmptySectionPlaceholder 
                icon={ChefHat} 
                title="Kochhistorie wird aufgezeichnet" 
                description="Hier erscheinen Rezepte, die du häufig kochst" 
              />
            )}
          </div>
        </section>
      )}
      
      {/* Featured recipes - updated with ratings */}
      {!searchResults && !isLoading && (
        <section className="py-16 bg-white">
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
          </div>
        </section>
      )}
      
      {/* Top rated recipes - new section */}
      {!searchResults && !isLoading && (
        <section className="py-16 bg-cookbook-50/50">
          <div className="container mx-auto px-4">
            <div className="mb-10 flex items-end justify-between">
              <FadeIn>
                <div className="flex items-center gap-3">
                  <div className="h-8 w-2 bg-cookbook-700 rounded-full"></div>
                  <h2 className="font-playfair text-3xl font-bold text-cookbook-800 flex items-center gap-2">
                    <Star size={24} className="text-amber-400 fill-amber-400" />
                    Bestbewertete Rezepte
                  </h2>
                </div>
                <p className="mt-2 text-gray-600 ml-5">
                  Rezepte mit den besten Bewertungen unserer Nutzer
                </p>
              </FadeIn>
              
              <FadeIn direction="left">
                <Link to="/rezepte">
                  <Button variant="outline" className="group flex items-center gap-2">
                    <span>Alle Rezepte</span>
                    <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
                  </Button>
                </Link>
              </FadeIn>
            </div>
            
            {topRatedRecipes.length > 0 ? (
              <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
                {topRatedRecipes.map((recipe, index) => {
                  const rating = localStorage.getItem(`recipe-rating-${recipe.id}`) || '0';
                  
                  return (
                    <FadeIn key={recipe.id} delay={index * 0.1}>
                      <div className="relative">
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
                        <div className="absolute top-3 right-3 bg-cookbook-700/90 backdrop-blur-sm text-white px-2 py-1 rounded-full flex items-center gap-1">
                          <Star size={14} className="fill-amber-400 text-amber-400" />
                          <span>{parseFloat(rating).toFixed(1)}</span>
                        </div>
                      </div>
                    </FadeIn>
                  );
                })}
              </div>
            ) : (
              <EmptySectionPlaceholder 
                icon={Star} 
                title="Noch keine Bewertungen" 
                description="Bewerte Rezepte nach dem Kochen, um sie hier zu sehen" 
              />
            )}
          </div>
        </section>
      )}
      
      {/* Categories preview with improved layout */}
      {!searchResults && !isLoading && (
        <section className="py-16 bg-white">
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


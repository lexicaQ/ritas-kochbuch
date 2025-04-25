
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Filter, Search, ChevronDown, X, Clock, ChefHat, Tag, User, Utensils, Leaf } from "lucide-react";
import { Button } from "@/components/ui/button";
import { RecipeCard } from "@/components/ui/recipe-card";
import { FadeIn } from "@/components/ui/fade-in";
import Header from "@/components/header";
import recipes from "@/data/recipes";
import { DropdownMenu, DropdownMenuContent, DropdownMenuCheckboxItem, DropdownMenuTrigger, DropdownMenuSeparator, DropdownMenuGroup, DropdownMenuLabel } from "@/components/ui/dropdown-menu";
import { cn } from "@/lib/utils";
import { LoadingSpinner } from "@/components/ui/loading-spinner";
import { SearchBar } from "@/components/search/search-bar";
import { useLocation } from "react-router-dom";

const extractAllIngredients = () => {
  const allIngredients = new Set<string>();
  recipes.forEach(recipe => {
    if (recipe.ingredients) {
      recipe.ingredients.forEach(ingredientGroup => {
        if (ingredientGroup.items) {
          ingredientGroup.items.forEach(item => {
            if (item.name) {
              allIngredients.add(item.name);
            }
          });
        }
      });
    }
  });
  return Array.from(allIngredients).sort();
};

const RecipeList = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [selectedDifficulties, setSelectedDifficulties] = useState<string[]>([]);
  const [selectedTags, setSelectedTags] = useState<string[]>([]);
  const [selectedIngredients, setSelectedIngredients] = useState<string[]>([]);
  const [selectedTime, setSelectedTime] = useState<string | null>(null);
  const [selectedDietType, setSelectedDietType] = useState<string[]>([]);
  const [selectedServings, setSelectedServings] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const location = useLocation();
  
  const categories = Array.from(new Set(recipes.map(recipe => recipe.category)));
  const difficulties = Array.from(new Set(recipes.map(recipe => recipe.difficulty)));
  const allTags = Array.from(new Set(recipes.flatMap(recipe => recipe.tags)));
  const timeRanges = ["< 30 Min", "30-60 Min", "> 60 Min"];
  const dietTypes = ["Vegetarisch", "Vegan", "Glutenfrei", "Laktosefrei", "Low Carb", "Paleo"];
  const servingsOptions = ["1-2", "3-4", "5-6", "7+"];
  const commonIngredients = extractAllIngredients().slice(0, 20);
  
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 500);
    
    const queryParams = new URLSearchParams(location.search);
    const searchQuery = queryParams.get('search');
    if (searchQuery) {
      setSearchTerm(searchQuery);
    }
    
    return () => clearTimeout(timer);
  }, [location]);
  
  const matchesTimeRange = (prepTime: string, range: string | null) => {
    if (!range) return true;
    
    const minutes = parseInt(prepTime.match(/\d+/)?.[0] || "0");
    
    switch (range) {
      case "< 30 Min":
        return minutes < 30;
      case "30-60 Min":
        return minutes >= 30 && minutes <= 60;
      case "> 60 Min":
        return minutes > 60;
      default:
        return true;
    }
  };
  
  const matchesServings = (portionSize: string | undefined, range: string | null) => {
    if (!range || !portionSize) return true;
    
    const portionMatch = portionSize.match(/\d+/);
    if (!portionMatch) return true;
    
    const portion = parseInt(portionMatch[0]);
    
    if (range.includes('+')) {
      const minValue = parseInt(range.replace('+', ''));
      return portion >= minValue;
    } else {
      const [min, max] = range.split('-').map(Number);
      return portion >= min && portion <= max;
    }
  };
  
  const matchesIngredients = (recipe: any) => {
    if (selectedIngredients.length === 0) return true;
    
    const recipeIngredientNames: string[] = [];
    recipe.ingredients?.forEach((group: any) => {
      if (group.items) {
        group.items.forEach((item: any) => {
          if (item.name) {
            recipeIngredientNames.push(item.name);
          }
        });
      }
    });
    
    return selectedIngredients.some(ingredient => 
      recipeIngredientNames.some((recipeIng: string) => 
        recipeIng.toLowerCase().includes(ingredient.toLowerCase())
      )
    );
  };
  
  const matchesDietType = (recipe: any) => {
    if (selectedDietType.length === 0) return true;
    
    const recipeTags = recipe.tags || [];
    return selectedDietType.some(diet => 
      recipeTags.some((tag: string) => 
        tag.toLowerCase().includes(diet.toLowerCase())
      )
    );
  };
  
  const filteredRecipes = recipes.filter(recipe => {
    const matchesSearch = searchTerm === "" || 
      recipe.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
      recipe.description.toLowerCase().includes(searchTerm.toLowerCase());
    
    const matchesCategory = selectedCategories.length === 0 || 
      selectedCategories.includes(recipe.category);
    
    const matchesDifficulty = selectedDifficulties.length === 0 || 
      selectedDifficulties.includes(recipe.difficulty);
    
    const matchesTags = selectedTags.length === 0 || 
      selectedTags.some(tag => recipe.tags && recipe.tags.includes(tag));
    
    const matchesTimeFilter = matchesTimeRange(recipe.prepTime, selectedTime);
    
    const matchesServingsFilter = matchesServings(recipe.portionSize, selectedServings);
    
    return matchesSearch && 
           matchesCategory && 
           matchesDifficulty && 
           matchesTags && 
           matchesTimeFilter && 
           matchesIngredients(recipe) && 
           matchesDietType(recipe) && 
           matchesServingsFilter;
  });
  
  const toggleCategory = (category: string) => {
    setSelectedCategories(prev => 
      prev.includes(category) ? prev.filter(c => c !== category) : [...prev, category]
    );
  };
  
  const toggleDifficulty = (difficulty: string) => {
    setSelectedDifficulties(prev => 
      prev.includes(difficulty) ? prev.filter(d => d !== difficulty) : [...prev, difficulty]
    );
  };
  
  const toggleTag = (tag: string) => {
    setSelectedTags(prev => 
      prev.includes(tag) ? prev.filter(t => t !== tag) : [...prev, tag]
    );
  };
  
  const toggleIngredient = (ingredient: string) => {
    setSelectedIngredients(prev => 
      prev.includes(ingredient) ? prev.filter(i => i !== ingredient) : [...prev, ingredient]
    );
  };
  
  const toggleDietType = (diet: string) => {
    setSelectedDietType(prev => 
      prev.includes(diet) ? prev.filter(d => d !== diet) : [...prev, diet]
    );
  };
  
  const setTimeRange = (time: string) => {
    setSelectedTime(prev => prev === time ? null : time);
  };
  
  const setServings = (servings: string) => {
    setSelectedServings(prev => prev === servings ? null : servings);
  };
  
  const resetFilters = () => {
    setSearchTerm("");
    setSelectedCategories([]);
    setSelectedDifficulties([]);
    setSelectedTags([]);
    setSelectedIngredients([]);
    setSelectedDietType([]);
    setSelectedTime(null);
    setSelectedServings(null);
  };
  
  const totalFilters = selectedCategories.length + 
                       selectedDifficulties.length + 
                       selectedTags.length + 
                       selectedIngredients.length + 
                       selectedDietType.length + 
                       (selectedTime ? 1 : 0) + 
                       (selectedServings ? 1 : 0);
  
  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      <div className="relative bg-white pt-48 pb-20 overflow-hidden">
        <div className="container mx-auto px-4 relative z-10">
          <div>
            <h1 className="font-playfair text-4xl font-bold text-cookbook-700 text-center md:text-5xl">
              Alle Rezepte
            </h1>
            <p className="mt-4 text-center text-cookbook-700/80 max-w-2xl mx-auto">
              Entdecke unsere vielfältige Sammlung an köstlichen Rezepten und finde deine nächste kulinarische Inspiration
            </p>
          </div>
        </div>
      </div>
      
      <div className="container mx-auto px-4 py-12">
        <div className="sticky top-24 z-30 -mt-8 bg-white rounded-lg shadow-lg border border-cookbook-100 p-4">
          <div className="flex gap-2 items-stretch">
            <SearchBar 
              variant="large"
              placeholder="Nach Rezepten suchen..."
              className="flex-1"
              maxResults={0}
              autoFocus
              value={searchTerm}
              onChange={(value) => setSearchTerm(value)}
              disableSuggestions
            />
            
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline" className="flex items-center gap-2">
                  <Filter size={16} />
                  <span>Filter</span>
                  {totalFilters > 0 && (
                    <span className="ml-1 rounded-full bg-primary px-2 py-0.5 text-xs font-medium text-primary-foreground">
                      {totalFilters}
                    </span>
                  )}
                  <ChevronDown size={14} className="ml-2 opacity-70" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-80 p-4 max-h-[80vh] overflow-auto border border-cookbook-200">
                <DropdownMenuLabel className="font-playfair text-lg text-cookbook-800">
                  Filter
                </DropdownMenuLabel>
                
                <DropdownMenuSeparator />
                
                <DropdownMenuGroup className="mb-4">
                  <DropdownMenuLabel className="text-sm font-semibold flex items-center">
                    <Tag size={16} className="mr-2 text-cookbook-700" />
                    Kategorien
                  </DropdownMenuLabel>
                  <div className="grid grid-cols-2 gap-2 mt-2">
                    {categories.map(category => (
                      <DropdownMenuCheckboxItem 
                        key={category} 
                        checked={selectedCategories.includes(category)} 
                        onCheckedChange={() => toggleCategory(category)} 
                        className="rounded-lg hover:bg-cookbook-50 border border-transparent hover:border-cookbook-100"
                      >
                        {category}
                      </DropdownMenuCheckboxItem>
                    ))}
                  </div>
                </DropdownMenuGroup>
                
                <DropdownMenuSeparator />
                
                <DropdownMenuGroup className="mb-4">
                  <DropdownMenuLabel className="text-sm font-semibold flex items-center">
                    <ChefHat size={16} className="mr-2 text-cookbook-700" />
                    Schwierigkeit
                  </DropdownMenuLabel>
                  <div className="flex gap-2 mt-2">
                    {difficulties.map(difficulty => (
                      <Button 
                        key={difficulty} 
                        variant="outline" 
                        size="sm" 
                        onClick={() => toggleDifficulty(difficulty)} 
                        className={cn(
                          "rounded-lg border", 
                          selectedDifficulties.includes(difficulty) 
                            ? "bg-cookbook-700 text-white border-cookbook-700" 
                            : "hover:bg-cookbook-50"
                        )}
                      >
                        {difficulty}
                      </Button>
                    ))}
                  </div>
                </DropdownMenuGroup>
                
                <DropdownMenuSeparator />
                
                <DropdownMenuGroup className="mb-4">
                  <DropdownMenuLabel className="text-sm font-semibold flex items-center">
                    <Clock size={16} className="mr-2 text-cookbook-700" />
                    Zubereitungszeit
                  </DropdownMenuLabel>
                  <div className="flex gap-2 mt-2 flex-wrap">
                    {timeRanges.map(time => (
                      <Button 
                        key={time} 
                        variant="outline" 
                        size="sm" 
                        onClick={() => setTimeRange(time)} 
                        className={cn(
                          "rounded-lg border flex items-center gap-1", 
                          selectedTime === time 
                            ? "bg-cookbook-700 text-white border-cookbook-700" 
                            : "hover:bg-cookbook-50"
                        )}
                      >
                        <Clock size={12} />
                        {time}
                      </Button>
                    ))}
                  </div>
                </DropdownMenuGroup>
                
                <DropdownMenuSeparator />
                
                <DropdownMenuGroup className="mb-4">
                  <DropdownMenuLabel className="text-sm font-semibold flex items-center">
                    <User size={16} className="mr-2 text-cookbook-700" />
                    Portionen
                  </DropdownMenuLabel>
                  <div className="flex gap-2 mt-2 flex-wrap">
                    {servingsOptions.map(serving => (
                      <Button 
                        key={serving} 
                        variant="outline" 
                        size="sm" 
                        onClick={() => setServings(serving)} 
                        className={cn(
                          "rounded-lg border flex items-center gap-1", 
                          selectedServings === serving 
                            ? "bg-cookbook-700 text-white border-cookbook-700" 
                            : "hover:bg-cookbook-50"
                        )}
                      >
                        <User size={12} />
                        {serving}
                      </Button>
                    ))}
                  </div>
                </DropdownMenuGroup>
                
                <DropdownMenuSeparator />
                
                <DropdownMenuGroup className="mb-4">
                  <DropdownMenuLabel className="text-sm font-semibold flex items-center">
                    <Leaf size={16} className="mr-2 text-cookbook-700" />
                    Ernährungsform
                  </DropdownMenuLabel>
                  <div className="grid grid-cols-2 gap-2 mt-2">
                    {dietTypes.map(diet => (
                      <DropdownMenuCheckboxItem 
                        key={diet} 
                        checked={selectedDietType.includes(diet)} 
                        onCheckedChange={() => toggleDietType(diet)} 
                        className="rounded-lg hover:bg-cookbook-50 border border-transparent hover:border-cookbook-100"
                      >
                        {diet}
                      </DropdownMenuCheckboxItem>
                    ))}
                  </div>
                </DropdownMenuGroup>
                
                <DropdownMenuSeparator />
                
                <DropdownMenuGroup className="mb-4">
                  <DropdownMenuLabel className="text-sm font-semibold flex items-center">
                    <Utensils size={16} className="mr-2 text-cookbook-700" />
                    Häufige Zutaten
                  </DropdownMenuLabel>
                  <div className="grid grid-cols-2 gap-2 mt-2 max-h-36 overflow-y-auto">
                    {commonIngredients.map(ingredient => (
                      <DropdownMenuCheckboxItem 
                        key={ingredient} 
                        checked={selectedIngredients.includes(ingredient)} 
                        onCheckedChange={() => toggleIngredient(ingredient)} 
                        className="rounded-lg hover:bg-cookbook-50 border border-transparent hover:border-cookbook-100"
                      >
                        {ingredient}
                      </DropdownMenuCheckboxItem>
                    ))}
                  </div>
                </DropdownMenuGroup>
                
                <DropdownMenuSeparator />
                
                <DropdownMenuGroup>
                  <DropdownMenuLabel className="text-sm font-semibold flex items-center">
                    <Tag size={16} className="mr-2 text-cookbook-700" />
                    Tags
                  </DropdownMenuLabel>
                  <div className="flex gap-2 mt-2 flex-wrap max-h-36 overflow-y-auto">
                    {allTags.map(tag => (
                      <Button 
                        key={tag} 
                        variant="outline" 
                        size="sm" 
                        onClick={() => toggleTag(tag)} 
                        className={cn(
                          "rounded-lg border text-xs", 
                          selectedTags.includes(tag) 
                            ? "bg-cookbook-700 text-white border-cookbook-700" 
                            : "hover:bg-cookbook-50"
                        )}
                      >
                        {tag}
                      </Button>
                    ))}
                  </div>
                </DropdownMenuGroup>
                
                <DropdownMenuSeparator className="my-4" />
                
                <Button 
                  variant="outline" 
                  className="w-full flex items-center justify-center gap-2" 
                  onClick={resetFilters}
                >
                  <X size={14} />
                  Filter zurücksetzen
                </Button>
              </DropdownMenuContent>
            </DropdownMenu>
            
            {(totalFilters > 0 || searchTerm) && (
              <Button variant="ghost" onClick={resetFilters} className="flex items-center gap-1">
                <X size={14} />
                Zurücksetzen
              </Button>
            )}
          </div>
          
          {totalFilters > 0 && (
            <div className="mt-4 flex flex-wrap gap-2">
              {selectedCategories.map(category => (
                <div key={category} className="flex items-center gap-1 rounded-full bg-cookbook-100 px-3 py-1 text-xs border border-cookbook-200">
                  <span>{category}</span>
                  <X 
                    size={14} 
                    onClick={() => toggleCategory(category)} 
                    className="cursor-pointer hover:text-cookbook-700" 
                  />
                </div>
              ))}
              
              {selectedDifficulties.map(difficulty => (
                <div key={difficulty} className="flex items-center gap-1 rounded-full bg-cookbook-100 px-3 py-1 text-xs border border-cookbook-200">
                  <ChefHat size={12} />
                  <span>{difficulty}</span>
                  <X 
                    size={14} 
                    onClick={() => toggleDifficulty(difficulty)} 
                    className="cursor-pointer hover:text-cookbook-700" 
                  />
                </div>
              ))}
              
              {selectedTags.map(tag => (
                <div key={tag} className="flex items-center gap-1 rounded-full bg-cookbook-100 px-3 py-1 text-xs border border-cookbook-200">
                  <span>{tag}</span>
                  <X 
                    size={14} 
                    onClick={() => toggleTag(tag)} 
                    className="cursor-pointer hover:text-cookbook-700" 
                  />
                </div>
              ))}
              
              {selectedIngredients.map(ingredient => (
                <div key={ingredient} className="flex items-center gap-1 rounded-full bg-cookbook-100 px-3 py-1 text-xs border border-cookbook-200">
                  <Utensils size={12} />
                  <span>{ingredient}</span>
                  <X 
                    size={14} 
                    onClick={() => toggleIngredient(ingredient)} 
                    className="cursor-pointer hover:text-cookbook-700" 
                  />
                </div>
              ))}
              
              {selectedDietType.map(diet => (
                <div key={diet} className="flex items-center gap-1 rounded-full bg-cookbook-100 px-3 py-1 text-xs border border-cookbook-200">
                  <Leaf size={12} />
                  <span>{diet}</span>
                  <X 
                    size={14} 
                    onClick={() => toggleDietType(diet)} 
                    className="cursor-pointer hover:text-cookbook-700" 
                  />
                </div>
              ))}
              
              {selectedTime && (
                <div className="flex items-center gap-1 rounded-full bg-cookbook-100 px-3 py-1 text-xs border border-cookbook-200">
                  <Clock size={12} />
                  <span>{selectedTime}</span>
                  <X 
                    size={14} 
                    onClick={() => setSelectedTime(null)} 
                    className="cursor-pointer hover:text-cookbook-700" 
                  />
                </div>
              )}
              
              {selectedServings && (
                <div className="flex items-center gap-1 rounded-full bg-cookbook-100 px-3 py-1 text-xs border border-cookbook-200">
                  <User size={12} />
                  <span>{selectedServings} Portionen</span>
                  <X 
                    size={14} 
                    onClick={() => setSelectedServings(null)} 
                    className="cursor-pointer hover:text-cookbook-700" 
                  />
                </div>
              )}
            </div>
          )}
        </div>
        
        {isLoading ? (
          <div className="flex justify-center items-center py-20">
            <LoadingSpinner size="lg" />
          </div>
        ) : filteredRecipes.length > 0 ? (
          <motion.div 
            initial={{ opacity: 0 }} 
            animate={{ opacity: 1 }} 
            className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
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
        ) : (
          <motion.div 
            initial={{ opacity: 0, y: 20 }} 
            animate={{ opacity: 1, y: 0 }} 
            className="mt-12 rounded-xl bg-white p-12 text-center shadow-lg border border-cookbook-100"
          >
            <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-cookbook-100">
              <Search size={32} className="text-cookbook-700" />
            </div>
            <h2 className="text-xl font-semibold text-cookbook-800">Keine Rezepte gefunden</h2>
            <p className="mt-2 text-gray-600">
              Versuche es mit anderen Filtereinstellungen oder Suchbegriffen.
            </p>
            <Button onClick={resetFilters} className="mt-6">
              Filter zurücksetzen
            </Button>
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default RecipeList;

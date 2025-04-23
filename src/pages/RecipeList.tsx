
import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Filter, Search, ChevronDown, X, Clock, ChefHat, Tag as TagIcon, Hash, Utensils, ChevronsUpDown, CheckCircle2 } from "lucide-react";

import { Button } from "@/components/ui/button";
import { RecipeCard } from "@/components/ui/recipe-card";
import { FadeIn } from "@/components/ui/fade-in";
import { Header } from "@/components/header";
import recipes from "@/data/recipes";
import { Input } from "@/components/ui/input";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuCheckboxItem,
  DropdownMenuTrigger,
  DropdownMenuSeparator,
  DropdownMenuGroup,
  DropdownMenuLabel
} from "@/components/ui/dropdown-menu";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList
} from "@/components/ui/command";
import { cn } from "@/lib/utils";
import { LoadingSpinner } from "@/components/ui/loading-spinner";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";

const RecipeList = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState<typeof recipes | null>(null);
  const [showSearchResults, setShowSearchResults] = useState(false);
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [selectedDifficulties, setSelectedDifficulties] = useState<string[]>([]);
  const [selectedTags, setSelectedTags] = useState<string[]>([]);
  const [selectedTime, setSelectedTime] = useState<string | null>(null);
  const [selectedIngredients, setSelectedIngredients] = useState<string[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const searchInputRef = useRef<HTMLInputElement>(null);
  
  // Extract unique categories, difficulties and tags
  const categories = Array.from(new Set(recipes.map(recipe => recipe.category)));
  const difficulties = Array.from(new Set(recipes.map(recipe => recipe.difficulty)));
  const allTags = Array.from(new Set(recipes.flatMap(recipe => recipe.tags)));
  const timeRanges = ["< 30 Min", "30-60 Min", "> 60 Min"];
  
  // Extract unique ingredients from all recipes
  const allIngredients = Array.from(
    new Set(
      recipes.flatMap(recipe => 
        recipe.ingredients.flatMap(group => 
          group.items.map(item => item.name)
        )
      )
    )
  ).sort();
  
  useEffect(() => {
    // Simulate loading for better UX
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 500);
    return () => clearTimeout(timer);
  }, []);
  
  useEffect(() => {
    if (searchTerm.length >= 2) {
      const results = recipes.filter(recipe =>
        recipe.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        recipe.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
        recipe.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()))
      );
      setSearchResults(results.slice(0, 5)); // Limit to top 5 results
      setShowSearchResults(true);
    } else {
      setShowSearchResults(false);
    }
  }, [searchTerm]);
  
  const matchesTimeRange = (prepTime: string, range: string | null) => {
    if (!range) return true;
    
    // Extract minutes from prepTime string
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
  
  const filteredRecipes = recipes.filter(recipe => {
    const matchesSearch = searchTerm === "" || 
      recipe.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      recipe.description.toLowerCase().includes(searchTerm.toLowerCase());
      
    const matchesCategory = selectedCategories.length === 0 || 
      selectedCategories.includes(recipe.category);
      
    const matchesDifficulty = selectedDifficulties.length === 0 || 
      selectedDifficulties.includes(recipe.difficulty);
      
    const matchesTags = selectedTags.length === 0 ||
      selectedTags.some(tag => recipe.tags.includes(tag));
    
    const matchesTimeFilter = matchesTimeRange(recipe.prepTime, selectedTime);
    
    const matchesIngredients = selectedIngredients.length === 0 ||
      selectedIngredients.every(ingredient => 
        recipe.ingredients.some(group => 
          group.items.some(item => 
            item.name.toLowerCase().includes(ingredient.toLowerCase())
          )
        )
      );
      
    return matchesSearch && matchesCategory && matchesDifficulty && matchesTags && matchesTimeFilter && matchesIngredients;
  });
  
  const toggleCategory = (category: string) => {
    setSelectedCategories(prev => 
      prev.includes(category)
        ? prev.filter(c => c !== category)
        : [...prev, category]
    );
  };
  
  const toggleDifficulty = (difficulty: string) => {
    setSelectedDifficulties(prev => 
      prev.includes(difficulty)
        ? prev.filter(d => d !== difficulty)
        : [...prev, difficulty]
    );
  };
  
  const toggleTag = (tag: string) => {
    setSelectedTags(prev => 
      prev.includes(tag)
        ? prev.filter(t => t !== tag)
        : [...prev, tag]
    );
  };
  
  const toggleIngredient = (ingredient: string) => {
    setSelectedIngredients(prev => 
      prev.includes(ingredient)
        ? prev.filter(i => i !== ingredient)
        : [...prev, ingredient]
    );
  };
  
  const setTimeRange = (time: string) => {
    setSelectedTime(prev => prev === time ? null : time);
  };
  
  const resetFilters = () => {
    setSearchTerm("");
    setSelectedCategories([]);
    setSelectedDifficulties([]);
    setSelectedTags([]);
    setSelectedTime(null);
    setSelectedIngredients([]);
  };
  
  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    setShowSearchResults(false);
  };
  
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      setShowSearchResults(false);
    }
  };
  
  const totalFilters = selectedCategories.length + selectedDifficulties.length + selectedTags.length + selectedIngredients.length + (selectedTime ? 1 : 0);

  return (
    <div className="min-h-screen bg-cookbook-50/20">
      <Header />
      
      {/* Hero section with animated elements */}
      <div className="relative bg-cookbook-700 py-20 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-cookbook-900/30"></div>
          
          {/* Decorative elements */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-cookbook-600 rounded-full -translate-y-1/2 translate-x-1/2 opacity-40 blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-80 h-80 bg-cookbook-600 rounded-full translate-y-1/2 -translate-x-1/2 opacity-30 blur-3xl"></div>
          
          {/* Animated circles */}
          <div className="absolute left-1/4 top-1/3 w-16 h-16 bg-cookbook-500/20 rounded-full animate-pulse"></div>
          <div className="absolute right-1/3 bottom-1/4 w-20 h-20 bg-cookbook-500/20 rounded-full animate-pulse" style={{ animationDelay: "1s" }}></div>
          <div className="absolute left-2/3 top-1/2 w-12 h-12 bg-cookbook-500/20 rounded-full animate-pulse" style={{ animationDelay: "1.5s" }}></div>
          
          {/* Floating icons */}
          <motion.div 
            className="absolute left-1/5 top-1/3 text-white/10"
            animate={{ y: [0, -15, 0] }}
            transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
          >
            <Utensils size={40} />
          </motion.div>
          <motion.div 
            className="absolute right-1/4 bottom-1/3 text-white/10"
            animate={{ y: [0, -20, 0] }}
            transition={{ repeat: Infinity, duration: 5, ease: "easeInOut", delay: 1 }}
          >
            <ChefHat size={48} />
          </motion.div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <FadeIn>
            <h1 className="font-playfair text-4xl font-bold text-white text-center md:text-5xl">
              Alle Rezepte
            </h1>
            <p className="mt-4 text-center text-white/80 max-w-2xl mx-auto">
              Entdecke unsere vielfältige Sammlung an köstlichen Rezepten und finde deine nächste kulinarische Inspiration
            </p>
          </FadeIn>
        </div>
      </div>
      
      <div className="container mx-auto px-4 py-12">
        {/* Filters */}
        <div className="sticky top-16 z-30 -mt-8 bg-white rounded-2xl shadow-lg border border-cookbook-100 p-5">
          <div className="flex flex-col gap-4 md:flex-row md:items-center">
            {/* Search with autocomplete */}
            <div className="relative flex-1">
              <form onSubmit={handleSearch} className="relative">
                <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                <Input
                  type="search"
                  placeholder="Nach Rezepten suchen..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  onKeyDown={handleKeyDown}
                  className="w-full pl-9 pr-4 py-2 border-cookbook-200 focus:border-cookbook-500"
                  ref={searchInputRef}
                />
                {searchTerm && (
                  <button
                    type="button"
                    onClick={() => setSearchTerm("")}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
                  >
                    <X size={16} />
                  </button>
                )}
              </form>
              
              {/* Search autocomplete dropdown */}
              {showSearchResults && searchResults && searchResults.length > 0 && (
                <div className="absolute top-full left-0 w-full mt-1 bg-white rounded-lg shadow-lg border border-cookbook-100 z-50 overflow-hidden">
                  <div className="p-2">
                    <p className="text-xs text-gray-500 mb-2 px-2">Rezeptvorschläge:</p>
                    {searchResults.map(recipe => (
                      <a 
                        key={recipe.id} 
                        href={`/rezept/${recipe.id}`}
                        className="flex items-center gap-3 p-2 hover:bg-cookbook-50 rounded-lg transition-colors"
                      >
                        <div className="h-12 w-12 rounded-md overflow-hidden flex-shrink-0">
                          <img src={recipe.image} alt={recipe.title} className="h-full w-full object-cover" />
                        </div>
                        <div className="flex-grow min-w-0">
                          <h4 className="font-medium text-sm text-cookbook-800 truncate">{recipe.title}</h4>
                          <p className="text-xs text-gray-500 truncate">{recipe.category} • {recipe.prepTime}</p>
                        </div>
                      </a>
                    ))}
                    <div className="mt-2 pt-2 border-t border-cookbook-100 text-center">
                      <button
                        className="text-xs text-cookbook-600 hover:text-cookbook-800 font-medium"
                        onClick={() => {
                          setShowSearchResults(false);
                          searchInputRef.current?.blur();
                        }}
                      >
                        Alle Ergebnisse anzeigen
                      </button>
                    </div>
                  </div>
                </div>
              )}
            </div>
            
            <div className="flex gap-2 flex-wrap md:flex-nowrap">
              {/* Enhanced Filter Menu */}
              <Popover open={isFilterOpen} onOpenChange={setIsFilterOpen}>
                <PopoverTrigger asChild>
                  <Button variant="outline" className="flex items-center gap-2 border-cookbook-200">
                    <Filter size={16} className="text-cookbook-800" />
                    <span>Filter</span>
                    {totalFilters > 0 && (
                      <Badge className="ml-1 bg-cookbook-600">
                        {totalFilters}
                      </Badge>
                    )}
                    <ChevronDown size={14} className="ml-2 opacity-70" />
                  </Button>
                </PopoverTrigger>
                <PopoverContent className="w-[360px] p-0" align="end" side="bottom">
                  <Tabs defaultValue="categories" className="border-b border-cookbook-100">
                    <div className="px-4 py-3 border-b border-cookbook-100">
                      <p className="font-playfair text-lg font-medium text-cookbook-800">Filter</p>
                    </div>
                    
                    <TabsList className="grid grid-cols-4 p-2 bg-white w-full rounded-none">
                      <TabsTrigger value="categories" className="text-xs">Kategorien</TabsTrigger>
                      <TabsTrigger value="difficulty" className="text-xs">Schwierigkeit</TabsTrigger>
                      <TabsTrigger value="time" className="text-xs">Zeit</TabsTrigger>
                      <TabsTrigger value="ingredients" className="text-xs">Zutaten</TabsTrigger>
                    </TabsList>
                    
                    {/* Categories Tab */}
                    <TabsContent value="categories" className="p-4">
                      <div className="space-y-4">
                        <div>
                          <h3 className="text-sm font-semibold text-cookbook-800 mb-2 flex items-center">
                            <Hash size={14} className="mr-1" /> Kategorien
                          </h3>
                          <div className="grid grid-cols-2 gap-2">
                            {categories.map((category) => (
                              <div 
                                key={category} 
                                className={cn(
                                  "flex items-center gap-2 p-2 rounded-lg border cursor-pointer transition-colors",
                                  selectedCategories.includes(category)
                                    ? "bg-cookbook-100 border-cookbook-200"
                                    : "border-cookbook-100 hover:bg-cookbook-50/50"
                                )}
                                onClick={() => toggleCategory(category)}
                              >
                                <div className={cn(
                                  "h-4 w-4 rounded-full border flex items-center justify-center transition-colors",
                                  selectedCategories.includes(category)
                                    ? "bg-cookbook-700 border-cookbook-700"
                                    : "border-cookbook-300"
                                )}>
                                  {selectedCategories.includes(category) && (
                                    <CheckCircle2 size={12} className="text-white" />
                                  )}
                                </div>
                                <span className="text-sm truncate">{category}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                        
                        <div className="pt-4 border-t border-cookbook-100">
                          <h3 className="text-sm font-semibold text-cookbook-800 mb-2 flex items-center">
                            <TagIcon size={14} className="mr-1" /> Tags
                          </h3>
                          <ScrollArea className="h-[200px] pr-4">
                            <div className="flex flex-wrap gap-2">
                              {allTags.map((tag) => (
                                <Badge 
                                  key={tag}
                                  variant={selectedTags.includes(tag) ? "default" : "outline"}
                                  className={cn(
                                    "cursor-pointer py-1 px-3",
                                    selectedTags.includes(tag)
                                      ? "bg-cookbook-700 hover:bg-cookbook-800"
                                      : "hover:bg-cookbook-100"
                                  )}
                                  onClick={() => toggleTag(tag)}
                                >
                                  {tag}
                                </Badge>
                              ))}
                            </div>
                          </ScrollArea>
                        </div>
                      </div>
                    </TabsContent>
                    
                    {/* Difficulty Tab */}
                    <TabsContent value="difficulty" className="p-4">
                      <h3 className="text-sm font-semibold text-cookbook-800 mb-2 flex items-center">
                        <ChefHat size={14} className="mr-1" /> Schwierigkeit
                      </h3>
                      <div className="grid grid-cols-3 gap-3 mt-2">
                        {difficulties.map((difficulty) => (
                          <Button
                            key={difficulty}
                            variant={selectedDifficulties.includes(difficulty) ? "default" : "outline"}
                            size="sm"
                            onClick={() => toggleDifficulty(difficulty)}
                            className={cn(
                              "rounded-lg border flex-grow justify-center",
                              selectedDifficulties.includes(difficulty) 
                                ? "bg-cookbook-700 text-white border-cookbook-700" 
                                : "hover:bg-cookbook-50"
                            )}
                          >
                            {difficulty}
                          </Button>
                        ))}
                      </div>
                    </TabsContent>
                    
                    {/* Time Tab */}
                    <TabsContent value="time" className="p-4">
                      <h3 className="text-sm font-semibold text-cookbook-800 mb-2 flex items-center">
                        <Clock size={14} className="mr-1" /> Zubereitungszeit
                      </h3>
                      <div className="grid grid-cols-3 gap-3 mt-2">
                        {timeRanges.map((time) => (
                          <Button
                            key={time}
                            variant={selectedTime === time ? "default" : "outline"}
                            size="sm"
                            onClick={() => setTimeRange(time)}
                            className={cn(
                              "rounded-lg border flex items-center justify-center gap-1",
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
                    </TabsContent>
                    
                    {/* Ingredients Tab */}
                    <TabsContent value="ingredients" className="p-4">
                      <h3 className="text-sm font-semibold text-cookbook-800 mb-2 flex items-center">
                        <Utensils size={14} className="mr-1" /> Zutaten
                      </h3>
                      <div className="mt-2">
                        <Command className="border rounded-lg">
                          <CommandInput placeholder="Nach Zutaten suchen..." />
                          <CommandList>
                            <CommandEmpty>Keine Zutaten gefunden.</CommandEmpty>
                            <CommandGroup heading="Verfügbare Zutaten">
                              <ScrollArea className="h-[200px]">
                                {allIngredients.map((ingredient) => (
                                  <CommandItem
                                    key={ingredient}
                                    onSelect={() => toggleIngredient(ingredient)}
                                    className="flex items-center gap-2 cursor-pointer"
                                  >
                                    <div className={cn(
                                      "h-4 w-4 rounded border flex-shrink-0 flex items-center justify-center",
                                      selectedIngredients.includes(ingredient)
                                        ? "bg-cookbook-700 border-cookbook-700"
                                        : "border-cookbook-300"
                                    )}>
                                      {selectedIngredients.includes(ingredient) && (
                                        <CheckCircle2 size={12} className="text-white" />
                                      )}
                                    </div>
                                    <span className="text-sm">{ingredient}</span>
                                  </CommandItem>
                                ))}
                              </ScrollArea>
                            </CommandGroup>
                          </CommandList>
                        </Command>
                        
                        {selectedIngredients.length > 0 && (
                          <div className="mt-3">
                            <p className="text-xs text-gray-500 mb-1">Ausgewählte Zutaten:</p>
                            <div className="flex flex-wrap gap-2">
                              {selectedIngredients.map(ingredient => (
                                <Badge 
                                  key={ingredient}
                                  className="bg-cookbook-700 hover:bg-cookbook-800"
                                >
                                  {ingredient}
                                  <button
                                    className="ml-1 hover:text-white/80"
                                    onClick={(e) => {
                                      e.stopPropagation();
                                      toggleIngredient(ingredient);
                                    }}
                                  >
                                    <X size={12} />
                                  </button>
                                </Badge>
                              ))}
                            </div>
                          </div>
                        )}
                      </div>
                    </TabsContent>
                    
                    {/* Footer actions */}
                    <div className="p-4 bg-cookbook-50/50 border-t border-cookbook-100 flex justify-between">
                      <p className="text-sm text-gray-500">
                        {totalFilters} {totalFilters === 1 ? 'Filter' : 'Filter'} ausgewählt
                      </p>
                      <Button 
                        variant="outline" 
                        size="sm"
                        onClick={resetFilters}
                        className="flex items-center justify-center gap-1"
                        disabled={totalFilters === 0}
                      >
                        <X size={14} />
                        Alle zurücksetzen
                      </Button>
                    </div>
                  </Tabs>
                </PopoverContent>
              </Popover>
              
              {(totalFilters > 0 || searchTerm) && (
                <Button variant="ghost" onClick={resetFilters} className="flex items-center gap-1">
                  <X size={14} />
                  Zurücksetzen
                </Button>
              )}
            </div>
          </div>
          
          {/* Active filters display */}
          {totalFilters > 0 && (
            <div className="mt-4 flex flex-wrap gap-2">
              {selectedCategories.map(category => (
                <div key={category} className="flex items-center gap-1 rounded-full bg-cookbook-100 px-3 py-1 text-xs">
                  <span>{category}</span>
                  <X size={14} onClick={() => toggleCategory(category)} className="cursor-pointer hover:text-cookbook-700" />
                </div>
              ))}
              {selectedDifficulties.map(difficulty => (
                <div key={difficulty} className="flex items-center gap-1 rounded-full bg-cookbook-100 px-3 py-1 text-xs">
                  <ChefHat size={12} />
                  <span>{difficulty}</span>
                  <X size={14} onClick={() => toggleDifficulty(difficulty)} className="cursor-pointer hover:text-cookbook-700" />
                </div>
              ))}
              {selectedTags.map(tag => (
                <div key={tag} className="flex items-center gap-1 rounded-full bg-cookbook-100 px-3 py-1 text-xs">
                  <span>{tag}</span>
                  <X size={14} onClick={() => toggleTag(tag)} className="cursor-pointer hover:text-cookbook-700" />
                </div>
              ))}
              {selectedTime && (
                <div className="flex items-center gap-1 rounded-full bg-cookbook-100 px-3 py-1 text-xs">
                  <Clock size={12} />
                  <span>{selectedTime}</span>
                  <X size={14} onClick={() => setSelectedTime(null)} className="cursor-pointer hover:text-cookbook-700" />
                </div>
              )}
              {selectedIngredients.map(ingredient => (
                <div key={ingredient} className="flex items-center gap-1 rounded-full bg-cookbook-100 px-3 py-1 text-xs">
                  <Utensils size={12} />
                  <span>{ingredient}</span>
                  <X size={14} onClick={() => toggleIngredient(ingredient)} className="cursor-pointer hover:text-cookbook-700" />
                </div>
              ))}
            </div>
          )}
        </div>
        
        {/* Recipe grid */}
        <div className="mt-8">
          {isLoading ? (
            <div className="flex justify-center items-center py-20">
              <LoadingSpinner size="lg" />
            </div>
          ) : filteredRecipes.length > 0 ? (
            <>
              <div className="flex justify-between items-center mb-6">
                <p className="text-cookbook-700">
                  <span className="font-semibold">{filteredRecipes.length}</span> Rezepte gefunden
                </p>
                <div className="flex items-center gap-2">
                  <span className="text-sm text-gray-500">Sortieren:</span>
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button variant="outline" size="sm" className="flex items-center gap-2">
                        <span>Neueste zuerst</span>
                        <ChevronsUpDown size={14} />
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                      <DropdownMenuCheckboxItem checked>
                        Neueste zuerst
                      </DropdownMenuCheckboxItem>
                      <DropdownMenuCheckboxItem>
                        Älteste zuerst
                      </DropdownMenuCheckboxItem>
                      <DropdownMenuCheckboxItem>
                        A-Z
                      </DropdownMenuCheckboxItem>
                      <DropdownMenuCheckboxItem>
                        Z-A
                      </DropdownMenuCheckboxItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </div>
              </div>
            
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
            </>
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
    </div>
  );
};

export default RecipeList;

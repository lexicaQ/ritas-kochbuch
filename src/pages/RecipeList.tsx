
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Filter, Search, ChevronDown, X, Clock, ChefHat } from "lucide-react";

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
import { cn } from "@/lib/utils";
import { LoadingSpinner } from "@/components/ui/loading-spinner";

const RecipeList = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [selectedDifficulties, setSelectedDifficulties] = useState<string[]>([]);
  const [selectedTags, setSelectedTags] = useState<string[]>([]);
  const [selectedTime, setSelectedTime] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  
  // Extract unique categories, difficulties and tags
  const categories = Array.from(new Set(recipes.map(recipe => recipe.category)));
  const difficulties = Array.from(new Set(recipes.map(recipe => recipe.difficulty)));
  const allTags = Array.from(new Set(recipes.flatMap(recipe => recipe.tags)));
  const timeRanges = ["< 30 Min", "30-60 Min", "> 60 Min"];
  
  useEffect(() => {
    // Simulate loading for better UX
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 500);
    return () => clearTimeout(timer);
  }, []);
  
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
      
    return matchesSearch && matchesCategory && matchesDifficulty && matchesTags && matchesTimeFilter;
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
  
  const setTimeRange = (time: string) => {
    setSelectedTime(prev => prev === time ? null : time);
  };
  
  const resetFilters = () => {
    setSearchTerm("");
    setSelectedCategories([]);
    setSelectedDifficulties([]);
    setSelectedTags([]);
    setSelectedTime(null);
  };
  
  const totalFilters = selectedCategories.length + selectedDifficulties.length + selectedTags.length + (selectedTime ? 1 : 0);

  return (
    <div className="min-h-screen bg-cookbook-50/20">
      <Header />
      
      {/* Hero section with decorative elements */}
      <div className="relative bg-cookbook-700 py-20 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-cookbook-900/30"></div>
          
          {/* Decorative circles */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-cookbook-600 rounded-full -translate-y-1/2 translate-x-1/2 opacity-40 blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-80 h-80 bg-cookbook-600 rounded-full translate-y-1/2 -translate-x-1/2 opacity-30 blur-3xl"></div>
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
        <div className="sticky top-16 z-30 -mt-8 bg-white rounded-2xl shadow-lg border border-cookbook-100 p-4">
          <div className="flex flex-col gap-4 md:flex-row md:items-center">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
              <Input
                type="search"
                placeholder="Nach Rezepten suchen..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-9"
              />
            </div>
            
            <div className="flex gap-2 flex-wrap md:flex-nowrap">
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
                <DropdownMenuContent align="end" className="w-72 p-4">
                  <DropdownMenuLabel className="font-playfair text-lg text-cookbook-800">
                    Filter
                  </DropdownMenuLabel>
                  
                  <DropdownMenuSeparator />
                  
                  {/* Category filter */}
                  <DropdownMenuGroup className="mb-4">
                    <DropdownMenuLabel className="text-sm font-semibold">Kategorien</DropdownMenuLabel>
                    <div className="grid grid-cols-2 gap-2 mt-2">
                      {categories.map((category) => (
                        <DropdownMenuCheckboxItem
                          key={category}
                          checked={selectedCategories.includes(category)}
                          onCheckedChange={() => toggleCategory(category)}
                          className="rounded-lg hover:bg-cookbook-50"
                        >
                          {category}
                        </DropdownMenuCheckboxItem>
                      ))}
                    </div>
                  </DropdownMenuGroup>
                  
                  <DropdownMenuSeparator />
                  
                  {/* Difficulty filter */}
                  <DropdownMenuGroup className="mb-4">
                    <DropdownMenuLabel className="text-sm font-semibold">Schwierigkeit</DropdownMenuLabel>
                    <div className="flex gap-2 mt-2">
                      {difficulties.map((difficulty) => (
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
                  
                  {/* Time filter */}
                  <DropdownMenuGroup className="mb-4">
                    <DropdownMenuLabel className="text-sm font-semibold">Zubereitungszeit</DropdownMenuLabel>
                    <div className="flex gap-2 mt-2 flex-wrap">
                      {timeRanges.map((time) => (
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
                  
                  {/* Tags filter */}
                  <DropdownMenuGroup>
                    <DropdownMenuLabel className="text-sm font-semibold">Tags</DropdownMenuLabel>
                    <div className="flex gap-2 mt-2 flex-wrap max-h-32 overflow-y-auto">
                      {allTags.map((tag) => (
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
    </div>
  );
};

export default RecipeList;

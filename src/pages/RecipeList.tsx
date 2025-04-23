
import { useState } from "react";
import { motion } from "framer-motion";
import { Filter } from "lucide-react";

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
  DropdownMenuTrigger
} from "@/components/ui/dropdown-menu";

const RecipeList = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [selectedDifficulties, setSelectedDifficulties] = useState<string[]>([]);
  
  // Extract unique categories and difficulties
  const categories = Array.from(new Set(recipes.map(recipe => recipe.category)));
  const difficulties = Array.from(new Set(recipes.map(recipe => recipe.difficulty)));
  
  const filteredRecipes = recipes.filter(recipe => {
    const matchesSearch = searchTerm === "" || 
      recipe.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      recipe.description.toLowerCase().includes(searchTerm.toLowerCase());
      
    const matchesCategory = selectedCategories.length === 0 || 
      selectedCategories.includes(recipe.category);
      
    const matchesDifficulty = selectedDifficulties.length === 0 || 
      selectedDifficulties.includes(recipe.difficulty);
      
    return matchesSearch && matchesCategory && matchesDifficulty;
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
  
  const resetFilters = () => {
    setSearchTerm("");
    setSelectedCategories([]);
    setSelectedDifficulties([]);
  };

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      <div className="container mx-auto mt-20 px-4 py-12">
        <FadeIn>
          <h1 className="font-playfair text-3xl font-bold text-cookbook-800 md:text-4xl">
            Alle Rezepte
          </h1>
          <p className="mt-2 text-gray-600">
            Entdecke unsere vielfältige Sammlung an köstlichen Rezepten
          </p>
        </FadeIn>
        
        {/* Filters */}
        <div className="mt-8">
          <div className="flex flex-col gap-4 md:flex-row md:items-center">
            <div className="relative flex-1">
              <Input
                type="search"
                placeholder="Nach Rezepten suchen..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full"
              />
            </div>
            
            <div className="flex gap-2">
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="outline" className="flex items-center gap-2">
                    <Filter size={16} />
                    <span>Kategorien</span>
                    {selectedCategories.length > 0 && (
                      <span className="ml-1 rounded-full bg-primary px-2 py-0.5 text-xs font-medium text-primary-foreground">
                        {selectedCategories.length}
                      </span>
                    )}
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end" className="w-56">
                  {categories.map((category) => (
                    <DropdownMenuCheckboxItem
                      key={category}
                      checked={selectedCategories.includes(category)}
                      onCheckedChange={() => toggleCategory(category)}
                    >
                      {category}
                    </DropdownMenuCheckboxItem>
                  ))}
                </DropdownMenuContent>
              </DropdownMenu>
              
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="outline" className="flex items-center gap-2">
                    <Filter size={16} />
                    <span>Schwierigkeit</span>
                    {selectedDifficulties.length > 0 && (
                      <span className="ml-1 rounded-full bg-primary px-2 py-0.5 text-xs font-medium text-primary-foreground">
                        {selectedDifficulties.length}
                      </span>
                    )}
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end" className="w-56">
                  {difficulties.map((difficulty) => (
                    <DropdownMenuCheckboxItem
                      key={difficulty}
                      checked={selectedDifficulties.includes(difficulty)}
                      onCheckedChange={() => toggleDifficulty(difficulty)}
                    >
                      {difficulty}
                    </DropdownMenuCheckboxItem>
                  ))}
                </DropdownMenuContent>
              </DropdownMenu>
              
              {(selectedCategories.length > 0 || selectedDifficulties.length > 0 || searchTerm) && (
                <Button variant="ghost" onClick={resetFilters}>
                  Zurücksetzen
                </Button>
              )}
            </div>
          </div>
        </div>
        
        {/* Recipe grid */}
        <div className="mt-8">
          {filteredRecipes.length > 0 ? (
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
            <div className="mt-12 rounded-lg bg-muted p-8 text-center">
              <h2 className="text-xl font-semibold text-cookbook-800">Keine Rezepte gefunden</h2>
              <p className="mt-2 text-gray-600">
                Versuche es mit anderen Filtereinstellungen oder Suchbegriffen.
              </p>
              <Button onClick={resetFilters} className="mt-4">
                Filter zurücksetzen
              </Button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default RecipeList;

import { useState, useEffect, useRef } from "react";
import { Search, X } from "lucide-react";
import { Input } from "@/components/ui/input";
import { SearchSuggestions } from "./search-suggestions";
import recipes from "@/data/recipes";
import { useNavigate } from "react-router-dom";
import { cn } from "@/lib/utils";
import { useToast } from "@/hooks/use-toast";
import { SearchResult } from "@/types/search";
import { motion, AnimatePresence } from "framer-motion";

interface SearchBarProps {
  className?: string;
  variant?: "default" | "large" | "minimal";
  autoFocus?: boolean;
  placeholder?: string;
  maxResults?: number;
}

export const SearchBar = ({
  className,
  variant = "default",
  autoFocus = false,
  placeholder = "Rezepte suchen...",
  maxResults = 6,
}: SearchBarProps) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [isActive, setIsActive] = useState(false);
  const [searchResults, setSearchResults] = useState<SearchResult[]>([]);
  const searchRef = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();
  const { toast } = useToast();
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (autoFocus && inputRef.current) {
      inputRef.current.focus();
    }
    
    const handleClickOutside = (event: MouseEvent) => {
      if (searchRef.current && !searchRef.current.contains(event.target as Node)) {
        setIsActive(false);
      }
    };
    
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [autoFocus]);

  useEffect(() => {
    if (searchTerm.trim() === "") {
      setSearchResults([]);
      return;
    }

    const normalizedSearchTerm = searchTerm.toLowerCase();
    
    const titleMatches: SearchResult[] = [];
    const categoryMatches: SearchResult[] = [];
    const tagMatches: SearchResult[] = [];
    const descriptionMatches: SearchResult[] = [];
    
    recipes.forEach(recipe => {
      if (recipe.title.toLowerCase().includes(normalizedSearchTerm)) {
        titleMatches.push({
          id: recipe.id,
          title: recipe.title,
          image: recipe.image,
          category: recipe.category,
          matchType: "title",
          difficulty: recipe.difficulty,
          prepTime: recipe.prepTime,
          tags: recipe.tags.slice(0, 2)
        });
        return;
      }
      
      if (recipe.category.toLowerCase().includes(normalizedSearchTerm)) {
        categoryMatches.push({
          id: recipe.id,
          title: recipe.title,
          image: recipe.image,
          category: recipe.category,
          matchType: "category",
          difficulty: recipe.difficulty,
          prepTime: recipe.prepTime,
          tags: recipe.tags.slice(0, 2)
        });
        return;
      }
      
      if (recipe.tags.some(tag => tag.toLowerCase().includes(normalizedSearchTerm))) {
        tagMatches.push({
          id: recipe.id,
          title: recipe.title,
          image: recipe.image,
          category: recipe.category,
          matchType: "tag",
          difficulty: recipe.difficulty,
          prepTime: recipe.prepTime,
          tags: recipe.tags.filter(tag => 
            tag.toLowerCase().includes(normalizedSearchTerm)
          ).slice(0, 2)
        });
        return;
      }
      
      if (recipe.description.toLowerCase().includes(normalizedSearchTerm)) {
        descriptionMatches.push({
          id: recipe.id,
          title: recipe.title,
          image: recipe.image,
          category: recipe.category,
          matchType: "description",
          difficulty: recipe.difficulty,
          prepTime: recipe.prepTime,
          tags: recipe.tags.slice(0, 2)
        });
      }
    });
    
    const combinedResults = [
      ...titleMatches,
      ...categoryMatches, 
      ...tagMatches,
      ...descriptionMatches
    ].slice(0, maxResults);
    
    setSearchResults(combinedResults);
  }, [searchTerm, maxResults]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
    setIsActive(true);
  };
  
  const handleClear = () => {
    setSearchTerm("");
    setIsActive(false);
    if (inputRef.current) {
      inputRef.current.focus();
    }
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (searchTerm.trim() === "") {
      toast({
        title: "Bitte gib einen Suchbegriff ein",
        description: "Gib einen Begriff ein, um nach Rezepten zu suchen."
      });
      return;
    }
    
    navigate(`/rezepte?search=${encodeURIComponent(searchTerm)}`);
    setIsActive(false);
  };

  const handleSelectResult = (result: SearchResult) => {
    navigate(`/rezept/${result.id}`);
    setSearchTerm("");
    setIsActive(false);
  };

  const variantClasses = {
    default: "w-full max-w-md",
    large: "w-full max-w-2xl",
    minimal: "w-full max-w-sm"
  };
  
  return (
    <div className={cn("relative z-30", variantClasses[variant], className)} ref={searchRef}>
      <form onSubmit={handleSubmit}>
        <div className="relative">
          <div className="absolute left-3.5 top-1/2 -translate-y-1/2 z-10 text-cookbook-700">
            <Search size={20} />
          </div>
          
          <Input
            ref={inputRef}
            type="search"
            placeholder={placeholder}
            value={searchTerm}
            onChange={handleInputChange}
            onClick={() => setIsActive(true)}
            className={cn(
              "pl-10 pr-9 border-2 border-cookbook-800/70 bg-white/80 backdrop-blur-sm",
              "focus:border-cookbook-800 focus:ring-4 focus:ring-cookbook-800/20",
              "transition-all duration-300 ease-in-out",
              variant === "large" ? "h-12 text-lg rounded-2xl" : "h-10 rounded-xl",
              variant === "minimal" ? "rounded-full bg-background/80" : "",
              "shadow-[0_4px_8px_-2px_rgba(0,0,0,0.25)]"
            )}
          />
          
          {searchTerm && (
            <button
              type="button"
              onClick={handleClear}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-cookbook-700 hover:text-cookbook-800"
            >
              <X className="h-4 w-4" />
            </button>
          )}
        </div>
      </form>
      
      <AnimatePresence>
        {isActive && searchResults.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
          >
            <SearchSuggestions
              results={searchResults}
              onSelect={handleSelectResult}
              searchTerm={searchTerm}
              className="border-2 border-cookbook-800/40 shadow-[0_8px_16px_-4px_rgba(0,0,0,0.3)]"
            />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

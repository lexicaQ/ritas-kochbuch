
import { useState } from "react";
import { Search, Filter, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuCheckboxItem,
  DropdownMenuTrigger,
  DropdownMenuGroup,
  DropdownMenuLabel,
  DropdownMenuSeparator
} from "@/components/ui/dropdown-menu";
import { FadeIn } from "@/components/ui/fade-in";
import { cn } from "@/lib/utils";

interface SearchBarProps {
  onSearch: (query: string, filters: string[]) => void;
  className?: string;
}

export function SearchBar({ onSearch, className }: SearchBarProps) {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedFilters, setSelectedFilters] = useState<string[]>([]);
  
  const categories = [
    "Dessert",
    "Hauptgericht",
    "Vorspeise",
    "Brot & Gebäck",
    "Salat",
    "Vegetarisch",
    "Fleisch",
  ];
  
  const difficulties = [
    "Leicht",
    "Mittel",
    "Schwer"
  ];
  
  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    onSearch(searchQuery, selectedFilters);
  };
  
  const clearSearch = () => {
    setSearchQuery("");
    setSelectedFilters([]);
    onSearch("", []);
  };
  
  const toggleFilter = (filter: string) => {
    setSelectedFilters((prev) => 
      prev.includes(filter)
        ? prev.filter(item => item !== filter)
        : [...prev, filter]
    );
  };

  return (
    <FadeIn className={className}>
      <form onSubmit={handleSearch} className="flex w-full flex-col items-stretch gap-3 md:flex-row md:items-center">
        <div className="relative flex-1">
          <div className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-white">
            <Search className="h-5 w-5" />
          </div>
          <Input
            type="search"
            placeholder="Nach Rezepten suchen..."
            className="pl-10 bg-white/20 border-white/30 text-white placeholder:text-white/70 focus:border-white focus:ring-white"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          {searchQuery && (
            <button
              type="button"
              onClick={() => setSearchQuery("")}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-white/70 hover:text-white"
            >
              <X size={16} />
            </button>
          )}
        </div>
        
        <div className="flex gap-2">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button 
                type="button"
                variant="secondary" 
                className="flex items-center gap-2 bg-white/20 text-white border-white/30 hover:bg-white/30"
              >
                <Filter size={16} />
                <span>Filter</span>
                {selectedFilters.length > 0 && (
                  <span className="ml-1 rounded-full bg-white/20 px-2 py-0.5 text-xs font-medium">
                    {selectedFilters.length}
                  </span>
                )}
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-64">
              <DropdownMenuLabel>Filter auswählen</DropdownMenuLabel>
              <DropdownMenuSeparator />
              
              <DropdownMenuGroup>
                <DropdownMenuLabel className="text-xs text-muted-foreground">Kategorien</DropdownMenuLabel>
                {categories.map((category) => (
                  <DropdownMenuCheckboxItem
                    key={category}
                    checked={selectedFilters.includes(category)}
                    onCheckedChange={() => toggleFilter(category)}
                  >
                    {category}
                  </DropdownMenuCheckboxItem>
                ))}
              </DropdownMenuGroup>
              
              <DropdownMenuSeparator />
              
              <DropdownMenuGroup>
                <DropdownMenuLabel className="text-xs text-muted-foreground">Schwierigkeit</DropdownMenuLabel>
                {difficulties.map((difficulty) => (
                  <DropdownMenuCheckboxItem
                    key={difficulty}
                    checked={selectedFilters.includes(difficulty)}
                    onCheckedChange={() => toggleFilter(difficulty)}
                  >
                    {difficulty}
                  </DropdownMenuCheckboxItem>
                ))}
              </DropdownMenuGroup>
              
              {selectedFilters.length > 0 && (
                <>
                  <DropdownMenuSeparator />
                  <div className="px-2 py-1.5">
                    <Button 
                      variant="ghost" 
                      size="sm" 
                      className="w-full text-xs"
                      onClick={() => setSelectedFilters([])}
                    >
                      Filter zurücksetzen
                    </Button>
                  </div>
                </>
              )}
            </DropdownMenuContent>
          </DropdownMenu>
          
          <Button 
            type="submit" 
            className="bg-white text-cookbook-700 hover:bg-white/90 hover:text-cookbook-800"
          >
            Suchen
          </Button>
          
          {(searchQuery || selectedFilters.length > 0) && (
            <Button 
              type="button"
              variant="ghost"
              onClick={clearSearch}
              className="text-white/70 hover:text-white hover:bg-white/10"
            >
              <X size={16} className="mr-1" />
              Zurücksetzen
            </Button>
          )}
        </div>
      </form>
      
      {/* Display selected filters */}
      {selectedFilters.length > 0 && (
        <div className="flex flex-wrap gap-2 mt-3">
          {selectedFilters.map(filter => (
            <span 
              key={filter} 
              className="inline-flex items-center rounded-full bg-white/20 px-2.5 py-0.5 text-sm text-white"
            >
              {filter}
              <button 
                type="button" 
                onClick={() => toggleFilter(filter)}
                className="ml-1 rounded-full p-0.5 hover:bg-white/20"
              >
                <X size={12} />
              </button>
            </span>
          ))}
        </div>
      )}
    </FadeIn>
  );
}

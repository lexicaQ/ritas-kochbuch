
import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { Command, CommandEmpty, CommandGroup, CommandItem, CommandList } from "@/components/ui/command";
import { Card } from "@/components/ui/card";
import { Clock, ChefHat } from "lucide-react";
import { cn } from "@/lib/utils";

interface SearchSuggestionsProps {
  query: string;
  suggestions: Array<{
    id: string;
    title: string;
    image: string;
    description: string;
    category: string;
    prepTime: string;
    difficulty: string;
    tags: string[];
  }>;
  onSelect: (id: string) => void;
  className?: string;
}

export function SearchSuggestions({ query, suggestions, onSelect, className }: SearchSuggestionsProps) {
  const navigate = useNavigate();

  if (!query) return null;

  // Diese Funktion wird aufgerufen, wenn ein Vorschlag ausgewählt wird
  const handleSuggestionSelect = (id: string, event: React.MouseEvent) => {
    // Stoppe die Event-Propagation, um zu verhindern, dass andere onClick-Handler ausgelöst werden
    event.preventDefault();
    event.stopPropagation();
    
    // Suchvorschläge schließen über die onSelect-Funktion
    onSelect(id);
    
    // Nach einer kurzen Verzögerung zur Rezeptseite navigieren
    // Dies gibt dem UI Zeit, die Vorschläge auszublenden, bevor die Navigation stattfindet
    setTimeout(() => {
      navigate(`/rezept/${id}`);
    }, 10);
  };

  return (
    <Card className={cn(
      "absolute left-0 top-full w-full mt-2 z-50 overflow-hidden shadow-lg border border-cookbook-200 bg-white/95 backdrop-blur-sm",
      className
    )}>
      <Command>
        <CommandList>
          <CommandEmpty>Keine Rezepte gefunden</CommandEmpty>
          <CommandGroup heading="Rezepte">
            {suggestions.map((suggestion) => (
              <CommandItem
                key={suggestion.id}
                value={suggestion.title}
                className="flex items-center gap-4 p-3 cursor-pointer hover:bg-cookbook-50/80"
                onSelect={(value) => {
                  const selected = suggestions.find(s => s.title.toLowerCase() === value);
                  if (selected) {
                    onSelect(selected.id);
                    navigate(`/rezept/${selected.id}`);
                  }
                }}
              >
                <div 
                  className="flex items-center gap-4 flex-1"
                  onClick={(e) => handleSuggestionSelect(suggestion.id, e)}
                >
                  <img
                    src={suggestion.image}
                    alt={suggestion.title}
                    className="w-16 h-16 object-cover rounded-lg"
                  />
                  <div className="flex-1 min-w-0">
                    <p className="font-medium text-base truncate text-cookbook-800">
                      {suggestion.title}
                    </p>
                    <p className="text-sm text-muted-foreground truncate mt-1 text-left">
                      {suggestion.category}
                    </p>
                    <div className="flex flex-wrap gap-2 mt-1">
                      <div className="flex items-center gap-1 text-xs text-cookbook-600">
                        <Clock size={12} />
                        <span>{suggestion.prepTime}</span>
                      </div>
                      <div className="flex items-center gap-1 text-xs text-cookbook-600">
                        <ChefHat size={12} />
                        <span>{suggestion.difficulty}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </CommandItem>
            ))}
          </CommandGroup>
        </CommandList>
      </Command>
    </Card>
  );
}


import React from "react";
import { Command, CommandEmpty, CommandGroup, CommandItem, CommandList } from "@/components/ui/command";
import { Card } from "@/components/ui/card";
import { Clock, ChefHat, Tag } from "lucide-react";
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
  if (!query) return null;

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
                onSelect={() => onSelect(suggestion.id)}
                className="flex items-center gap-4 p-3 cursor-pointer hover:bg-cookbook-50/80"
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
              </CommandItem>
            ))}
          </CommandGroup>
        </CommandList>
      </Command>
    </Card>
  );
}

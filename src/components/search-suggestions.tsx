
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
      "absolute left-0 top-full w-full mt-2 z-50 overflow-hidden shadow-lg border border-cookbook-200",
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
                className="flex items-start gap-4 p-3 cursor-pointer hover:bg-cookbook-50"
              >
                <img
                  src={suggestion.image}
                  alt={suggestion.title}
                  className="w-24 h-24 object-cover rounded-lg"
                />
                <div className="flex-1 min-w-0 text-left">
                  <p className="font-medium text-base truncate text-cookbook-800">
                    {suggestion.title}
                  </p>
                  <p className="text-sm text-muted-foreground truncate mt-1">
                    {suggestion.category}
                  </p>
                  <div className="flex flex-wrap gap-2 mt-2">
                    <div className="flex items-center gap-1 text-xs text-cookbook-600">
                      <Clock size={14} />
                      <span>{suggestion.prepTime}</span>
                    </div>
                    <div className="flex items-center gap-1 text-xs text-cookbook-600">
                      <ChefHat size={14} />
                      <span>{suggestion.difficulty}</span>
                    </div>
                  </div>
                  <div className="flex flex-wrap gap-1 mt-2">
                    {suggestion.tags.slice(0, 3).map((tag) => (
                      <div 
                        key={tag}
                        className="inline-flex items-center gap-1 px-2 py-0.5 bg-cookbook-50 text-cookbook-700 rounded-full text-xs"
                      >
                        <Tag size={12} />
                        {tag}
                      </div>
                    ))}
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

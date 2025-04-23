
import React from "react";
import { Command, CommandEmpty, CommandGroup, CommandInput, CommandItem, CommandList } from "@/components/ui/command";
import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";

interface SearchSuggestionsProps {
  query: string;
  suggestions: Array<{
    id: string;
    title: string;
    image: string;
    description: string;
    category: string;
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
                className="flex items-center gap-3 p-2 cursor-pointer hover:bg-cookbook-50"
              >
                <img
                  src={suggestion.image}
                  alt={suggestion.title}
                  className="w-12 h-12 object-cover rounded"
                />
                <div className="flex-1 min-w-0">
                  <p className="font-medium text-sm truncate">{suggestion.title}</p>
                  <p className="text-xs text-muted-foreground truncate">
                    {suggestion.category}
                  </p>
                </div>
              </CommandItem>
            ))}
          </CommandGroup>
        </CommandList>
      </Command>
    </Card>
  );
}

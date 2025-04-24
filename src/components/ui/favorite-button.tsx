
import { useState, useEffect } from "react";
import { Heart } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "./button";
import { useToast } from "@/hooks/use-toast";

interface FavoriteButtonProps {
  isFavorite: boolean;
  recipeId: string;
  onToggle?: () => void;
  className?: string;
}

export function FavoriteButton({ isFavorite: initialIsFavorite, recipeId, onToggle, className }: FavoriteButtonProps) {
  const [isFavorite, setIsFavorite] = useState(initialIsFavorite);
  const { toast } = useToast();
  
  // Load initial state from localStorage
  useEffect(() => {
    const userFavorites = localStorage.getItem('user-favorite-recipes');
    if (userFavorites) {
      try {
        const favoriteIds = JSON.parse(userFavorites);
        setIsFavorite(favoriteIds.includes(recipeId));
      } catch (e) {
        console.error("Error parsing favorites:", e);
      }
    }
  }, [recipeId]);
  
  const handleToggle = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    
    // Get current favorites
    const userFavorites = localStorage.getItem('user-favorite-recipes');
    let favoriteIds: string[] = [];
    
    if (userFavorites) {
      try {
        favoriteIds = JSON.parse(userFavorites);
      } catch (e) {
        console.error("Error parsing favorites:", e);
      }
    }
    
    // Toggle favorite state
    const newIsFavorite = !isFavorite;
    setIsFavorite(newIsFavorite);
    
    // Update localStorage
    if (newIsFavorite) {
      favoriteIds.push(recipeId);
    } else {
      favoriteIds = favoriteIds.filter(id => id !== recipeId);
    }
    
    localStorage.setItem('user-favorite-recipes', JSON.stringify(favoriteIds));
    
    // Call onToggle callback if provided
    if (onToggle) onToggle();
    
    toast({
      title: newIsFavorite ? "Zu Favoriten hinzugefügt" : "Aus Favoriten entfernt",
      description: newIsFavorite ? "Das Rezept wurde zu deinen Favoriten hinzugefügt." : "Das Rezept wurde aus deinen Favoriten entfernt.",
      variant: "default",
      duration: 2000,
    });
  };
  
  return (
    <Button
      variant="outline"
      size="icon"
      className={cn(
        "rounded-full transition-colors bg-white/80 backdrop-blur-sm hover:bg-white z-10",
        isFavorite && "bg-cookbook-50 text-cookbook-700",
        className
      )}
      onClick={handleToggle}
      type="button"
    >
      <Heart
        size={20}
        className={cn(
          "transition-all",
          isFavorite ? "fill-cookbook-500 text-cookbook-500" : "text-gray-600"
        )}
      />
    </Button>
  );
}

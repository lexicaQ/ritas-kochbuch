
import { useState } from "react";
import { Heart } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "./button";
import { useToast } from "@/hooks/use-toast";

interface FavoriteButtonProps {
  isFavorite: boolean;
  onToggle: () => void;
  className?: string;
}

export function FavoriteButton({ isFavorite, onToggle, className }: FavoriteButtonProps) {
  const { toast } = useToast();
  
  const handleToggle = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    onToggle();
    
    toast({
      title: isFavorite ? "Aus Favoriten entfernt" : "Zu Favoriten hinzugefügt",
      description: isFavorite ? "Das Rezept wurde aus deinen Favoriten entfernt." : "Das Rezept wurde zu deinen Favoriten hinzugefügt.",
      variant: isFavorite ? "default" : "cookbook",
      duration: 2000,
    });
  };
  
  return (
    <Button
      variant="outline"
      size="icon"
      className={cn(
        "rounded-full transition-colors bg-white/80 backdrop-blur-sm hover:bg-white",
        isFavorite && "bg-cookbook-50 text-cookbook-700",
        className
      )}
      onClick={handleToggle}
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

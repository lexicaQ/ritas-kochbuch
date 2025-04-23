
import { useState } from "react";
import { Heart } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "./button";

interface FavoriteButtonProps {
  isFavorite: boolean;
  onToggle: () => void;
  className?: string;
}

export function FavoriteButton({ isFavorite, onToggle, className }: FavoriteButtonProps) {
  return (
    <Button
      variant="outline"
      size="icon"
      className={cn(
        "rounded-full transition-colors bg-white/80 backdrop-blur-sm hover:bg-white",
        isFavorite && "bg-cookbook-50 text-cookbook-700",
        className
      )}
      onClick={(e) => {
        e.preventDefault();
        e.stopPropagation();
        onToggle();
      }}
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


import { Star } from "lucide-react";
import { cn } from "@/lib/utils";

interface RecipeRatingDisplayProps {
  recipeId: string;
  size?: "sm" | "md" | "lg";
  showCount?: boolean;
  className?: string;
}

export function RecipeRatingDisplay({
  recipeId,
  size = "md",
  showCount = false,
  className
}: RecipeRatingDisplayProps) {
  // Get rating from localStorage
  const ratingString = localStorage.getItem(`recipe-rating-${recipeId}`) || '0';
  const rating = parseFloat(ratingString);
  const ratingCountString = localStorage.getItem(`recipe-rating-count-${recipeId}`) || '0';
  const ratingCount = parseInt(ratingCountString);
  
  // If no ratings yet, return null or just show empty stars
  if (ratingCount === 0) {
    return null;
  }
  
  const starSizes = {
    sm: 12,
    md: 16,
    lg: 20
  };
  
  const starSize = starSizes[size];
  
  // Calculate full, half, and empty stars
  const fullStars = Math.floor(rating);
  const hasHalfStar = rating % 1 >= 0.5;
  const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0);
  
  return (
    <div className={cn("flex items-center gap-1", className)}>
      {/* Full stars */}
      {Array.from({ length: fullStars }).map((_, i) => (
        <Star key={`full-${i}`} size={starSize} className="text-amber-400 fill-amber-400" />
      ))}
      
      {/* Half star */}
      {hasHalfStar && (
        <div className="relative">
          <Star size={starSize} className="text-amber-400 fill-amber-400" />
          <div className="absolute inset-0 overflow-hidden right-1/2">
            <Star size={starSize} className="text-gray-300 fill-gray-200" />
          </div>
        </div>
      )}
      
      {/* Empty stars */}
      {Array.from({ length: emptyStars }).map((_, i) => (
        <Star key={`empty-${i}`} size={starSize} className="text-gray-300 fill-gray-200" />
      ))}
      
      {/* Show count if requested */}
      {showCount && ratingCount > 0 && (
        <span className="text-xs text-gray-500 ml-1">
          ({rating.toFixed(1)}, {ratingCount} {ratingCount === 1 ? 'Bewertung' : 'Bewertungen'})
        </span>
      )}
    </div>
  );
}

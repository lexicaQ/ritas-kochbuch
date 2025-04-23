
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Star } from "lucide-react";
import { cn } from "@/lib/utils";

interface RecipeRatingProps {
  recipeId: string;
  className?: string;
}

export function RecipeRating({ recipeId, className }: RecipeRatingProps) {
  const [rating, setRating] = useState<number | null>(null);
  const [hoveredRating, setHoveredRating] = useState<number | null>(null);
  const [hasRated, setHasRated] = useState(false);
  
  // Load saved rating
  useEffect(() => {
    const savedRating = localStorage.getItem(`recipe-rating-${recipeId}`);
    if (savedRating) {
      setRating(parseInt(savedRating));
      setHasRated(true);
    }
  }, [recipeId]);
  
  // Handle rating selection
  const handleRating = (value: number) => {
    setRating(value);
    localStorage.setItem(`recipe-rating-${recipeId}`, value.toString());
    setHasRated(true);
  };
  
  return (
    <div className={cn("rounded-xl bg-white p-6 shadow-lg border border-cookbook-100", className)}>
      <h2 className="font-playfair text-xl font-bold text-cookbook-800 mb-4">
        {hasRated ? "Deine Bewertung" : "Wie hat es geschmeckt?"}
      </h2>
      
      <div className="flex items-center justify-center gap-2">
        {[1, 2, 3, 4, 5].map((star) => (
          <motion.button
            key={star}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="focus:outline-none"
            onMouseEnter={() => !hasRated && setHoveredRating(star)}
            onMouseLeave={() => !hasRated && setHoveredRating(null)}
            onClick={() => !hasRated && handleRating(star)}
            disabled={hasRated}
          >
            <Star
              size={32}
              className={cn(
                "transition-all",
                (hoveredRating !== null && star <= hoveredRating) || (rating !== null && star <= rating)
                  ? "fill-yellow-400 text-yellow-400"
                  : "text-gray-300"
              )}
            />
          </motion.button>
        ))}
      </div>
      
      {hasRated && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mt-4 text-sm text-cookbook-700"
        >
          Vielen Dank für deine Bewertung!
        </motion.div>
      )}
    </div>
  );
}


import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Check, ChefHat, Star, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { useToast } from "@/hooks/use-toast";

interface RecipeSuccessProps {
  show: boolean;
  onClose: () => void;
  completionTime: string;
  recipeId: string;
}

export function RecipeSuccess({
  show,
  onClose,
  completionTime,
  recipeId,
}: RecipeSuccessProps) {
  const [rating, setRating] = useState<number>(0);
  const [hoveredRating, setHoveredRating] = useState<number>(0);
  const [congratsText, setCongratsText] = useState<string>("");
  const navigate = useNavigate();
  const { toast } = useToast();

  const congratulations = [
    "Großartig gemacht! Das sieht köstlich aus.",
    "Ein kulinarischer Erfolg! Genieß deine Mahlzeit.",
    "Du hast dich selbst übertroffen! Guten Appetit.",
    "Meisterhaft zubereitet! Zeit zum Genießen.",
    "Perfekt gekocht! Lass es dir schmecken.",
  ];

  useEffect(() => {
    if (show) {
      // Track recipe completion in localStorage
      try {
        // Increment completion count
        const completedCount = localStorage.getItem(`recipe-completed-count-${recipeId}`) || '0';
        localStorage.setItem(
          `recipe-completed-count-${recipeId}`, 
          (parseInt(completedCount) + 1).toString()
        );
        
        // Set random congratulation text
        setCongratsText(congratulations[Math.floor(Math.random() * congratulations.length)]);
      } catch (error) {
        console.error("Error tracking recipe completion:", error);
      }
    }
  }, [show, recipeId]);

  const handleRating = (value: number) => {
    setRating(value);
    
    // Save rating to localStorage
    try {
      // Get existing rating if any
      const existingRatingString = localStorage.getItem(`recipe-rating-${recipeId}`);
      const existingRating = existingRatingString ? parseFloat(existingRatingString) : 0;
      const existingCountString = localStorage.getItem(`recipe-rating-count-${recipeId}`);
      const existingCount = existingCountString ? parseInt(existingCountString) : 0;
      
      // Calculate new average rating
      const newCount = existingCount + 1;
      const newRating = ((existingRating * existingCount) + value) / newCount;
      
      // Save new rating and count
      localStorage.setItem(`recipe-rating-${recipeId}`, newRating.toString());
      localStorage.setItem(`recipe-rating-count-${recipeId}`, newCount.toString());
      
      toast({
        title: "Bewertung gespeichert",
        description: `Vielen Dank für deine ${value}-Sterne Bewertung!`,
      });
    } catch (error) {
      console.error("Error saving rating:", error);
    }
  };

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/60"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.div
            className="w-full max-w-md rounded-2xl bg-white p-6 shadow-xl"
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            transition={{ type: "spring", bounce: 0.3 }}
          >
            <button
              onClick={onClose}
              className="absolute right-4 top-4 text-gray-500 hover:text-gray-700"
              aria-label="Schließen"
            >
              <X size={20} />
            </button>

            <div className="flex flex-col items-center text-center">
              <div className="mb-4 rounded-full bg-green-100 p-3">
                <div className="rounded-full bg-green-600 p-3 text-white">
                  <Check size={24} />
                </div>
              </div>
              <h3 className="mb-2 text-2xl font-semibold text-cookbook-800">
                Rezept abgeschlossen!
              </h3>
              <p className="mb-4 text-gray-600">{congratsText}</p>

              <div className="mb-4 mt-2 flex items-center justify-center rounded-lg bg-cookbook-50 px-4 py-2">
                <ChefHat className="mr-2 text-cookbook-700" size={20} />
                <span className="text-gray-700">
                  {completionTime
                    ? `Kochzeit: ${completionTime}`
                    : "Wunderbare Leistung!"}
                </span>
              </div>
              
              {/* Rating stars */}
              <div className="mb-6 mt-4">
                <p className="mb-2 font-medium text-cookbook-800">Wie hat dir das Rezept geschmeckt?</p>
                <div className="flex justify-center space-x-1">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <button
                      key={star}
                      type="button"
                      className={cn(
                        "transition-transform hover:scale-110",
                        (hoveredRating >= star || rating >= star) ? "text-amber-400" : "text-gray-300"
                      )}
                      onMouseEnter={() => setHoveredRating(star)}
                      onMouseLeave={() => setHoveredRating(0)}
                      onClick={() => handleRating(star)}
                    >
                      <Star 
                        size={28} 
                        className={cn(
                          "transition-colors",
                          (hoveredRating >= star || rating >= star) ? "fill-amber-400" : "fill-gray-100"
                        )} 
                      />
                    </button>
                  ))}
                </div>
                <p className="mt-2 text-sm text-gray-500">
                  {rating ? `${rating} von 5 Sternen` : "Tippe, um zu bewerten"}
                </p>
              </div>

              <div className="flex w-full justify-center space-x-3">
                <Button onClick={onClose} className="w-full">
                  Zurück zum Rezept
                </Button>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

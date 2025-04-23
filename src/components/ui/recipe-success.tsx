
import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Check, Clock, Star } from "lucide-react";
import { Button } from "./button";
import { Progress } from "./progress";
import { cn } from "@/lib/utils";

interface RecipeSuccessProps {
  show: boolean;
  onClose: () => void;
  completionTime?: string;
  recipeId: string;
}

export function RecipeSuccess({ show, onClose, completionTime, recipeId }: RecipeSuccessProps) {
  const [isVisible, setIsVisible] = useState(false);
  const [rating, setRating] = useState<number | null>(null);
  const [hasRated, setHasRated] = useState(false);
  const [timeSpent, setTimeSpent] = useState<string>("");
  
  useEffect(() => {
    if (show) {
      // Check if popup has been shown and closed for this recipe
      const popupClosed = localStorage.getItem(`recipe-popup-closed-${recipeId}`);
      if (popupClosed !== "true") {
        setIsVisible(true);
        
        // Calculate time spent
        const startTimeStr = localStorage.getItem(`recipe-start-time-${recipeId}`);
        if (startTimeStr) {
          const startTime = new Date(startTimeStr).getTime();
          const endTime = new Date().getTime();
          const timeSpentMs = endTime - startTime;
          
          // Format time spent
          const minutes = Math.floor(timeSpentMs / (1000 * 60));
          if (minutes < 60) {
            setTimeSpent(`${minutes} Minuten`);
          } else {
            const hours = Math.floor(minutes / 60);
            const remainingMinutes = minutes % 60;
            setTimeSpent(`${hours} Std ${remainingMinutes} Min`);
          }
        }
      }
    }
    
    // Load saved rating when popup is shown
    const savedRating = localStorage.getItem(`recipe-rating-${recipeId}`);
    if (savedRating) {
      setRating(parseInt(savedRating));
      setHasRated(true);
    }
  }, [show, recipeId]);
  
  const handleClose = () => {
    setIsVisible(false);
    // Mark this popup as closed for this recipe
    localStorage.setItem(`recipe-popup-closed-${recipeId}`, "true");
    setTimeout(() => onClose(), 300); // Allow exit animation to complete
  };
  
  // Handle rating selection
  const handleRating = (value: number) => {
    setRating(value);
    localStorage.setItem(`recipe-rating-${recipeId}`, value.toString());
    setHasRated(true);
  };
  
  if (!isVisible) return null;
  
  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm"
          onClick={handleClose}
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            transition={{ type: "spring", duration: 0.5 }}
            className="relative max-w-md w-full mx-4 bg-white rounded-2xl shadow-xl p-6"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex flex-col items-center text-center">
              <motion.div 
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ 
                  type: "spring", 
                  stiffness: 260, 
                  damping: 20,
                  delay: 0.2 
                }}
                className="flex items-center justify-center w-20 h-20 bg-cookbook-100 rounded-full mb-6"
              >
                <motion.div 
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 0.4, type: "spring", stiffness: 260, damping: 15 }}
                  className="flex items-center justify-center w-16 h-16 bg-cookbook-600 rounded-full text-white"
                >
                  <Check size={32} />
                </motion.div>
              </motion.div>
              
              <motion.h2 
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="font-playfair text-2xl font-bold text-cookbook-800 mb-2"
              >
                Rezept abgeschlossen!
              </motion.h2>
              
              <motion.p 
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
                className="text-gray-600 mb-6"
              >
                Du hast alle Schritte dieses Rezepts erfolgreich abgeschlossen.
              </motion.p>
              
              <motion.div 
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7 }}
                className="flex flex-col gap-2 w-full mb-6"
              >
                <div className="flex items-center gap-2 py-2 px-4 bg-cookbook-50 rounded-full text-cookbook-700 text-sm font-medium">
                  <Clock size={16} />
                  <span>Abgeschlossen in {completionTime}</span>
                </div>
                
                {timeSpent && (
                  <div className="flex items-center gap-2 py-2 px-4 bg-cookbook-50 rounded-full text-cookbook-700 text-sm font-medium">
                    <Clock size={16} />
                    <span>Zeit auf dieser Seite: {timeSpent}</span>
                  </div>
                )}
              </motion.div>
              
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.8 }}
                className="w-full mb-6"
              >
                <div className="flex justify-between text-sm font-medium mb-1">
                  <span>Fortschritt</span>
                  <span>100%</span>
                </div>
                <Progress className="h-2 bg-cookbook-100" value={100} />
              </motion.div>
              
              {/* Rating Section */}
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.9 }}
                className="w-full mb-6 bg-cookbook-50 rounded-xl p-4"
              >
                <h3 className="text-lg font-medium text-cookbook-800 mb-3">
                  {hasRated ? "Deine Bewertung" : "Wie hat es geschmeckt?"}
                </h3>
                
                <div className="flex items-center justify-center gap-2 mb-2">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <motion.button
                      key={star}
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      className="focus:outline-none"
                      onClick={() => !hasRated && handleRating(star)}
                      disabled={hasRated}
                    >
                      <Star
                        size={32}
                        className={cn(
                          "transition-all",
                          (rating !== null && star <= rating)
                            ? "fill-yellow-400 text-yellow-400"
                            : "text-gray-300"
                        )}
                      />
                    </motion.button>
                  ))}
                </div>
                
                {hasRated && (
                  <div className="text-center mt-2 text-sm text-cookbook-700">
                    Vielen Dank für deine Bewertung!
                  </div>
                )}
              </motion.div>
              
              <Button onClick={handleClose}>Schließen</Button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

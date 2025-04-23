
import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Check, Clock } from "lucide-react";
import { Button } from "./button";
import { Progress } from "./progress";
import { cn } from "@/lib/utils";

interface RecipeSuccessProps {
  show: boolean;
  onClose: () => void;
  completionTime?: string;
}

export function RecipeSuccess({ show, onClose, completionTime }: RecipeSuccessProps) {
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    if (show) {
      setIsVisible(true);
    }
  }, [show]);
  
  const handleClose = () => {
    setIsVisible(false);
    setTimeout(() => onClose(), 300); // Allow exit animation to complete
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
              
              {completionTime && (
                <motion.div 
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.7 }}
                  className="flex items-center gap-2 py-2 px-4 bg-cookbook-50 rounded-full text-cookbook-700 text-sm font-medium mb-6"
                >
                  <Clock size={16} />
                  <span>Abgeschlossen in {completionTime}</span>
                </motion.div>
              )}
              
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
              
              <Button onClick={handleClose}>Schließen</Button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

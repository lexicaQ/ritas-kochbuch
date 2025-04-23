
import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Clock, ChefHat, ArrowLeft, Heart, Tag, Check, Edit, Star, MessageSquare, Award, Send } from "lucide-react";
import confetti from "canvas-confetti";

import { Button } from "@/components/ui/button";
import { FadeIn } from "@/components/ui/fade-in";
import { CheckboxItem, CheckboxStepItem } from "@/components/ui/checkbox-item";
import { Header } from "@/components/header";
import recipes from "@/data/recipes";
import { cn } from "@/lib/utils";
import { Textarea } from "@/components/ui/textarea";
import { Input } from "@/components/ui/input";
import { toast } from "@/hooks/use-toast";

const RecipeDetail = () => {
  const { id } = useParams<{ id: string }>();
  const [recipe, setRecipe] = useState(recipes.find(r => r.id === id));
  const [isFavorite, setIsFavorite] = useState(recipe?.isFavorite || false);
  
  // Track completed steps and ingredients
  const [completedSteps, setCompletedSteps] = useState<{[key: string]: boolean}>({});
  const [completedIngredients, setCompletedIngredients] = useState<{[key: string]: boolean}>({});
  
  // Track progress
  const [progress, setProgress] = useState(0);
  const [showCompletionModal, setShowCompletionModal] = useState(false);
  const [userNotes, setUserNotes] = useState("");
  const [userRating, setUserRating] = useState(0);
  const [userTips, setUserTips] = useState("");
  const [completionTime, setCompletionTime] = useState<Date | null>(null);
  const [startTime, setStartTime] = useState<Date | null>(null);
  
  useEffect(() => {
    // This would typically be a fetch from an API
    const foundRecipe = recipes.find(r => r.id === id);
    setRecipe(foundRecipe);
    setIsFavorite(foundRecipe?.isFavorite || false);
    window.scrollTo(0, 0);
    setStartTime(new Date());
  }, [id]);
  
  useEffect(() => {
    if (recipe) {
      let totalItems = 0;
      let completedCount = 0;
      
      // Count total steps and completed steps
      recipe.steps.forEach((group, gIndex) => {
        group.items.forEach((_, sIndex) => {
          const stepId = `step-${gIndex}-${sIndex}`;
          totalItems++;
          if (completedSteps[stepId]) completedCount++;
        });
      });
      
      // Count ingredients
      recipe.ingredients.forEach((group, gIndex) => {
        group.items.forEach((_, iIndex) => {
          const ingredientId = `ingredient-${gIndex}-${iIndex}`;
          totalItems++;
          if (completedIngredients[ingredientId]) completedCount++;
        });
      });
      
      // Calculate progress percentage
      const newProgress = totalItems > 0 ? (completedCount / totalItems) * 100 : 0;
      setProgress(newProgress);
      
      // Check if recipe is complete
      if (newProgress === 100 && !showCompletionModal) {
        setCompletionTime(new Date());
        setTimeout(() => {
          triggerConfetti();
          setShowCompletionModal(true);
        }, 500);
      }
    }
  }, [recipe, completedSteps, completedIngredients, showCompletionModal]);
  
  const triggerConfetti = () => {
    confetti({
      particleCount: 100,
      spread: 70,
      origin: { y: 0.6 }
    });
  };
  
  if (!recipe) {
    return (
      <div className="flex min-h-screen flex-col items-center justify-center">
        <h2 className="text-2xl font-bold">Rezept nicht gefunden</h2>
        <Link to="/" className="mt-4 text-primary hover:underline">
          Zurück zur Startseite
        </Link>
      </div>
    );
  }
  
  const toggleFavorite = () => {
    setIsFavorite(!isFavorite);
    // Here you would typically update this in your backend
    toast({
      title: isFavorite ? "Aus Favoriten entfernt" : "Zu Favoriten hinzugefügt",
      description: `${recipe.title} wurde ${isFavorite ? "aus deinen Favoriten entfernt" : "zu deinen Favoriten hinzugefügt"}.`,
      variant: isFavorite ? "destructive" : "default",
    });
  };
  
  const toggleStep = (id: string) => {
    setCompletedSteps(prev => ({
      ...prev,
      [id]: !prev[id]
    }));
  };
  
  const toggleIngredient = (id: string) => {
    setCompletedIngredients(prev => ({
      ...prev,
      [id]: !prev[id]
    }));
  };
  
  const handleNotesChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setUserNotes(e.target.value);
  };
  
  const handleRatingChange = (rating: number) => {
    setUserRating(rating);
  };
  
  const handleTipsSubmit = () => {
    if (userTips.trim()) {
      toast({
        title: "Tipp gespeichert",
        description: "Dein Tipp wurde gespeichert und wird beim nächsten Besuch angezeigt.",
      });
      setUserTips("");
    }
  };
  
  const calculateTimeElapsed = () => {
    if (!startTime || !completionTime) return "0 Minuten";
    const diff = Math.abs(completionTime.getTime() - startTime.getTime());
    const minutes = Math.floor(diff / 60000);
    return minutes === 1 ? "1 Minute" : `${minutes} Minuten`;
  };
  
  const closeCompletionModal = () => {
    setShowCompletionModal(false);
  };
  
  return (
    <div className="min-h-screen bg-cookbook-50/20">
      <Header />
      
      <div className="container mx-auto mt-20 px-4 pt-8">
        {/* Back button and actions */}
        <div className="mb-6 flex items-center justify-between">
          <Link to="/rezepte">
            <Button variant="ghost" className="group flex items-center gap-2">
              <ArrowLeft size={16} className="transition-transform group-hover:-translate-x-1" />
              <span>Alle Rezepte</span>
            </Button>
          </Link>
          
          <Button
            variant="outline"
            size="icon"
            className={cn(
              "rounded-full transition-colors",
              isFavorite && "bg-cookbook-50 text-cookbook-700"
            )}
            onClick={toggleFavorite}
          >
            <Heart
              size={20}
              className={cn(
                "transition-all",
                isFavorite ? "fill-cookbook-500 text-cookbook-500" : ""
              )}
            />
          </Button>
        </div>
        
        {/* Recipe header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="relative"
        >
          <div className="relative aspect-[21/9] w-full overflow-hidden rounded-3xl shadow-xl">
            <img
              src={recipe.image}
              alt={recipe.title}
              className="h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
            <div className="absolute bottom-0 w-full p-6 text-white">
              <h1 className="font-playfair text-3xl font-bold text-white md:text-4xl">
                {recipe.title}
              </h1>
              <div className="mt-2 flex flex-wrap gap-x-6 gap-y-3 text-sm">
                <div className="flex items-center gap-1.5 text-white/90">
                  <Clock size={18} />
                  <span>{recipe.totalTime || recipe.prepTime}</span>
                </div>
                
                <div className="flex items-center gap-1.5 text-white/90">
                  <ChefHat size={18} />
                  <span>{recipe.difficulty}</span>
                </div>
                
                <div className="flex items-center gap-1.5 rounded-full bg-white/20 backdrop-blur-sm px-2.5 py-1 text-white">
                  {recipe.category}
                </div>
              </div>
            </div>
          </div>
        </motion.div>
        
        {/* Recipe info */}
        <div className="mt-8">
          <FadeIn>
            <p className="text-lg text-gray-700">
              {recipe.description}
            </p>
            
            {/* Recipe meta */}
            <div className="mt-6 flex flex-wrap gap-2">
              {recipe.tags && recipe.tags.map(tag => (
                <span
                  key={tag}
                  className="inline-flex items-center rounded-full bg-cookbook-100/80 px-3 py-1 text-sm font-medium text-cookbook-800"
                >
                  <Tag size={14} className="mr-2" />
                  {tag}
                </span>
              ))}
              
              {recipe.portionSize && (
                <div className="rounded-full bg-cookbook-200/60 px-3 py-1 text-sm font-medium text-cookbook-800">
                  <span>Portionen: {recipe.portionSize}</span>
                </div>
              )}
            </div>
          </FadeIn>
          
          {/* Progress bar */}
          {progress > 0 && (
            <FadeIn delay={0.2}>
              <div className="mt-8">
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium text-cookbook-800">Fortschritt</span>
                  <span className="text-sm font-medium text-cookbook-800">{Math.round(progress)}%</span>
                </div>
                <div className="mt-2 h-2.5 w-full rounded-full bg-cookbook-200">
                  <motion.div 
                    className="h-2.5 rounded-full bg-cookbook-600" 
                    style={{ width: `${progress}%` }}
                    initial={{ width: 0 }}
                    animate={{ width: `${progress}%` }}
                    transition={{ duration: 0.5 }}
                  ></motion.div>
                </div>
              </div>
            </FadeIn>
          )}
          
          {/* Main content */}
          <div className="mt-10 grid gap-8 md:grid-cols-12 md:gap-12">
            {/* Ingredients */}
            <FadeIn className="md:col-span-4" delay={0.1}>
              <div className="rounded-xl bg-white p-6 shadow-lg border border-cookbook-100">
                <div className="mb-6 flex items-center justify-between">
                  <h2 className="font-playfair text-2xl font-bold text-cookbook-800">Zutaten</h2>
                  <div className="h-1 flex-grow mx-4 bg-cookbook-200 rounded-full"></div>
                  {recipe.portionSize && (
                    <span className="text-cookbook-700 font-medium bg-cookbook-100/60 px-3 py-1 rounded-full text-sm">
                      {recipe.portionSize}
                    </span>
                  )}
                </div>
                
                {recipe.ingredients.map((group, groupIndex) => (
                  <div key={groupIndex} className="mt-6">
                    {group.group && (
                      <h3 className="mb-3 inline-block font-medium text-white bg-cookbook-700 px-3 py-1 rounded-lg">
                        {group.group}
                      </h3>
                    )}
                    
                    <ul className="space-y-2 pl-1">
                      {group.items.map((item, itemIndex) => {
                        const ingredientId = `ingredient-${groupIndex}-${itemIndex}`;
                        return (
                          <li key={itemIndex}>
                            <div 
                              className={cn(
                                "flex items-start gap-2 p-2 rounded-lg transition-colors cursor-pointer",
                                completedIngredients[ingredientId] ? "bg-cookbook-100/50" : "hover:bg-cookbook-50/50"
                              )}
                            >
                              <div 
                                className={cn(
                                  "flex h-5 w-5 rounded-md items-center justify-center border transition-colors cursor-pointer",
                                  completedIngredients[ingredientId] 
                                    ? "bg-cookbook-700 border-cookbook-700" 
                                    : "border-cookbook-300"
                                )}
                                onClick={() => toggleIngredient(ingredientId)}
                              >
                                {completedIngredients[ingredientId] && <Check size={12} className="text-white" />}
                              </div>
                              <span 
                                className={cn(
                                  "text-sm",
                                  completedIngredients[ingredientId] && "line-through text-gray-400"
                                )}
                                onClick={() => toggleIngredient(ingredientId)}
                              >
                                {`${item.name}${item.amount ? ` (${item.amount})` : ''}`}
                              </span>
                            </div>
                          </li>
                        );
                      })}
                    </ul>
                  </div>
                ))}
              </div>
            </FadeIn>
            
            {/* Steps */}
            <FadeIn className="md:col-span-8" delay={0.2}>
              <div className="rounded-xl bg-white p-6 shadow-lg border border-cookbook-100">
                <h2 className="font-playfair text-2xl font-bold text-cookbook-800 mb-6 pb-2 border-b border-cookbook-100">
                  Zubereitung
                </h2>
                
                {recipe.steps.map((group, groupIndex) => (
                  <div key={groupIndex} className="mt-8">
                    {group.group && (
                      <h3 className="mb-4 font-medium text-cookbook-700 bg-cookbook-100 inline-block px-4 py-1 rounded-lg">
                        {group.group}
                      </h3>
                    )}
                    
                    <div className="space-y-4">
                      {group.items.map((step, stepIndex) => {
                        const stepId = `step-${groupIndex}-${stepIndex}`;
                        return (
                          <div
                            key={stepIndex}
                            className={cn(
                              "flex items-start gap-3 rounded-lg p-4 transition-all",
                              completedSteps[stepId] 
                                ? "bg-cookbook-100/50 border border-cookbook-200" 
                                : "hover:bg-cookbook-50/50 border border-cookbook-100/50"
                            )}
                          >
                            <div className={cn(
                              "flex h-6 w-6 shrink-0 items-center justify-center rounded-full font-medium transition-colors cursor-pointer",
                              completedSteps[stepId] 
                                ? "bg-cookbook-700 text-white" 
                                : "bg-cookbook-200 text-cookbook-700"
                            )}
                            onClick={() => toggleStep(stepId)}
                            >
                              <span className={completedSteps[stepId] ? "opacity-0" : "opacity-100"}>
                                {stepIndex + 1}
                              </span>
                              {completedSteps[stepId] && <Check size={14} className="absolute" />}
                            </div>
                            <span 
                              className={cn(
                                "text-sm flex-grow",
                                completedSteps[stepId] && "text-gray-500 line-through"
                              )}
                              onClick={() => toggleStep(stepId)}
                            >
                              {step}
                            </span>
                            <div 
                              className={cn(
                                "flex h-5 w-5 rounded-md items-center justify-center border transition-colors cursor-pointer",
                                completedSteps[stepId] 
                                  ? "bg-cookbook-700 border-cookbook-700" 
                                  : "border-cookbook-300"
                              )}
                              onClick={() => toggleStep(stepId)}
                            >
                              {completedSteps[stepId] && <Check size={12} className="text-white" />}
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="mt-8 grid gap-8 md:grid-cols-2">
                {/* Tips */}
                {recipe.tips && recipe.tips.length > 0 && (
                  <div className="rounded-xl bg-cookbook-50/70 p-6 border border-cookbook-200">
                    <h2 className="font-playfair text-xl font-bold text-cookbook-800 mb-4 flex items-center">
                      <div className="bg-cookbook-700 text-white p-1 rounded-full mr-3">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <circle cx="12" cy="12" r="10"></circle>
                          <line x1="12" y1="16" x2="12" y2="12"></line>
                          <line x1="12" y1="8" x2="12.01" y2="8"></line>
                        </svg>
                      </div>
                      Tipps & Tricks
                    </h2>
                    
                    <ul className="mt-4 space-y-3">
                      {recipe.tips.map((tip, index) => (
                        <li key={index} className="flex items-start gap-3 bg-white p-3 rounded-lg shadow-sm">
                          <div className="bg-cookbook-100 text-cookbook-700 h-6 w-6 flex items-center justify-center rounded-full font-semibold text-sm">
                            {index + 1}
                          </div>
                          <p className="text-sm">{tip}</p>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
                
                {/* User Notes Section */}
                <div className="rounded-xl bg-cookbook-50/70 p-6 border border-cookbook-200">
                  <h2 className="font-playfair text-xl font-bold text-cookbook-800 mb-4 flex items-center">
                    <div className="bg-cookbook-700 text-white p-1 rounded-full mr-3">
                      <Edit size={20} />
                    </div>
                    Meine Notizen
                  </h2>
                  
                  <div className="space-y-3">
                    <Textarea 
                      placeholder="Füge hier deine eigenen Notizen hinzu..." 
                      className="min-h-[100px] bg-white"
                      value={userNotes}
                      onChange={handleNotesChange}
                    />
                    
                    <div className="flex justify-end">
                      <Button 
                        size="sm" 
                        onClick={() => {
                          toast({
                            title: "Notizen gespeichert",
                            description: "Deine Notizen wurden für dieses Rezept gespeichert.",
                          });
                        }}
                      >
                        <MessageSquare size={14} className="mr-1" />
                        Notiz speichern
                      </Button>
                    </div>
                  </div>
                  
                  <div className="mt-5 pt-5 border-t border-cookbook-200">
                    <h3 className="font-medium text-cookbook-800 mb-2">Dein Tipp für andere</h3>
                    <div className="space-y-3">
                      <Textarea 
                        placeholder="Teile einen hilfreichen Tipp für dieses Rezept..." 
                        className="min-h-[60px] bg-white"
                        value={userTips}
                        onChange={(e) => setUserTips(e.target.value)}
                      />
                      
                      <div className="flex justify-end">
                        <Button 
                          size="sm" 
                          variant="outline" 
                          onClick={handleTipsSubmit}
                        >
                          <Send size={14} className="mr-1" />
                          Tipp teilen
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </div>
      
      {/* Completion Modal */}
      <AnimatePresence>
        {showCompletionModal && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/50 flex items-center justify-center p-4"
            onClick={closeCompletionModal}
          >
            <motion.div
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              className="bg-white rounded-xl shadow-xl max-w-md w-full p-6"
              onClick={e => e.stopPropagation()}
            >
              <div className="text-center mb-6">
                <div className="mx-auto w-16 h-16 bg-cookbook-100 rounded-full flex items-center justify-center mb-4">
                  <Award size={32} className="text-cookbook-700" />
                </div>
                <h2 className="font-playfair text-2xl font-bold text-cookbook-800">
                  Rezept abgeschlossen!
                </h2>
                <p className="text-gray-600 mt-2">
                  Glückwunsch! Du hast das Rezept erfolgreich zubereitet.
                </p>
              </div>
              
              <div className="space-y-4 mb-6">
                <div className="bg-cookbook-50/70 rounded-lg p-3">
                  <p className="text-sm text-cookbook-800">
                    <span className="font-medium">Benötigte Zeit:</span> {calculateTimeElapsed()}
                  </p>
                </div>
                
                <div>
                  <p className="text-sm font-medium text-cookbook-800 mb-2">Wie hat es geschmeckt?</p>
                  <div className="flex items-center gap-1">
                    {[1, 2, 3, 4, 5].map(star => (
                      <button
                        key={star}
                        type="button"
                        onClick={() => handleRatingChange(star)}
                        className={cn(
                          "rounded-full p-1 transition-colors",
                          userRating >= star ? "text-yellow-400" : "text-gray-300 hover:text-yellow-200"
                        )}
                      >
                        <Star size={24} className={userRating >= star ? "fill-yellow-400" : ""} />
                      </button>
                    ))}
                  </div>
                </div>
              </div>
              
              <div className="flex justify-end gap-3">
                <Button variant="outline" onClick={closeCompletionModal}>
                  Schließen
                </Button>
                <Button onClick={() => {
                  toast({
                    title: "Bewertung gespeichert",
                    description: "Vielen Dank für deine Bewertung!",
                  });
                  closeCompletionModal();
                }}>
                  Bewertung speichern
                </Button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default RecipeDetail;

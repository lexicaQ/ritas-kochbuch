
import { useState, useEffect, useRef } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { FadeIn } from "@/components/ui/fade-in";
import { CheckboxItem, CheckboxStepItem } from "@/components/ui/checkbox-item";
import { Header } from "@/components/header";
import { FavoriteButton } from "@/components/ui/favorite-button";
import { RecipeSuccess } from "@/components/ui/recipe-success";
import { RecipeNotes } from "@/components/ui/recipe-notes";
import { RecipeRatingDisplay } from "@/components/ui/recipe-rating-display";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import recipes from "@/data/recipes";
import { cn } from "@/lib/utils";
import { Input } from "@/components/ui/input";
import { toast } from "sonner";
import { ProgressSection } from "@/components/recipe-detail/progress-section";
import { RecipeHeader } from "@/components/recipe-detail/recipe-header";
import { RecipeIngredients } from "@/components/recipe-detail/recipe-ingredients";
import { RecipeSteps } from "@/components/recipe-detail/recipe-steps";

const RecipeDetail = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [recipe, setRecipe] = useState(recipes.find(r => r.id === id));
  const [isFavorite, setIsFavorite] = useState(false);
  const startTimeRef = useRef(new Date());
  const [dialogOpen, setDialogOpen] = useState(false);
  
  const [completedSteps, setCompletedSteps] = useState<{[key: string]: boolean}>({});
  const [completedIngredients, setCompletedIngredients] = useState<{[key: string]: boolean}>({});
  
  const [progress, setProgress] = useState(0);
  const [ingredientsProgress, setIngredientsProgress] = useState(0);
  const [showSuccess, setShowSuccess] = useState(false);
  const [completionTime, setCompletionTime] = useState<string>("");
  
  const [notes, setNotes] = useState<{id: string; text: string}[]>([]);
  const [newNote, setNewNote] = useState("");
  const [editingNoteId, setEditingNoteId] = useState<string | null>(null);
  
  const handleBackToRecipes = () => {
    navigate('/rezepte');
  };

  useEffect(() => {
    setRecipe(recipes.find(r => r.id === id));
    window.scrollTo(0, 0);
    
    if (id) {
      try {
        const visitCount = localStorage.getItem(`recipe-visit-count-${id}`) || '0';
        localStorage.setItem(`recipe-visit-count-${id}`, (parseInt(visitCount) + 1).toString());
        
        const favorites = JSON.parse(localStorage.getItem('user-favorite-recipes') || '[]');
        setIsFavorite(favorites.includes(id));
      } catch (error) {
        console.error("Error tracking recipe visit:", error);
      }
      
      startTimeRef.current = new Date();
      localStorage.setItem(`recipe-start-time-${id}`, startTimeRef.current.toString());
      
      const savedSteps = localStorage.getItem(`recipe-steps-${id}`);
      const savedIngredients = localStorage.getItem(`recipe-ingredients-${id}`);
      
      if (savedSteps) {
        setCompletedSteps(JSON.parse(savedSteps));
      } else {
        setCompletedSteps({});
      }
      
      if (savedIngredients) {
        setCompletedIngredients(JSON.parse(savedIngredients));
      } else {
        setCompletedIngredients({});
      }
      
      const savedNotes = localStorage.getItem(`recipe-bullet-notes-${id}`);
      if (savedNotes) {
        setNotes(JSON.parse(savedNotes));
      }
    }
  }, [id]);
  
  useEffect(() => {
    if (recipe) {
      try {
        const favorites = JSON.parse(localStorage.getItem('user-favorite-recipes') || '[]');
        setIsFavorite(favorites.includes(id));
      } catch (error) {
        console.error("Error checking favorites:", error);
      }
      
      let totalSteps = 0;
      let completedCount = 0;
      
      recipe.steps.forEach((group, gIndex) => {
        group.items.forEach((_, sIndex) => {
          const stepId = `step-${gIndex}-${sIndex}`;
          totalSteps++;
          if (completedSteps[stepId]) completedCount++;
        });
      });
      
      const newProgress = totalSteps > 0 ? (completedCount / totalSteps) * 100 : 0;
      setProgress(newProgress);
      
      if (recipe.ingredients) {
        let totalIngredients = 0;
        let completedIngredientCount = 0;
        
        recipe.ingredients.forEach((group, gIndex) => {
          group.items.forEach((_, iIndex) => {
            const ingredientId = `ingredient-${gIndex}-${iIndex}`;
            totalIngredients++;
            if (completedIngredients[ingredientId]) completedIngredientCount++;
          });
        });
        
        const newIngredientsProgress = totalIngredients > 0 ? 
          (completedIngredientCount / totalIngredients) * 100 : 0;
        setIngredientsProgress(newIngredientsProgress);
      }
      
      if (newProgress === 100 && totalSteps > 0 && !showSuccess) {
        const endTime = new Date();
        const timeDiff = Math.floor((endTime.getTime() - startTimeRef.current.getTime()) / 1000 / 60);
        
        if (timeDiff < 60) {
          setCompletionTime(`${timeDiff} Minuten`);
        } else {
          const hours = Math.floor(timeDiff / 60);
          const minutes = timeDiff % 60;
          setCompletionTime(`${hours} Std ${minutes} Min`);
        }
        
        setTimeout(() => {
          setShowSuccess(true);
        }, 500);
      }
      
      if (id) {
        localStorage.setItem(`recipe-steps-${id}`, JSON.stringify(completedSteps));
        localStorage.setItem(`recipe-ingredients-${id}`, JSON.stringify(completedIngredients));
      }
    }
  }, [recipe, completedSteps, completedIngredients, id, showSuccess]);
  
  useEffect(() => {
    if (id && notes.length > 0) {
      localStorage.setItem(`recipe-bullet-notes-${id}`, JSON.stringify(notes));
    }
  }, [notes, id]);
  
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
    
    try {
      const favorites = JSON.parse(localStorage.getItem('user-favorite-recipes') || '[]');
      if (!isFavorite) {
        if (!favorites.includes(recipe.id)) {
          favorites.push(recipe.id);
        }
      } else {
        const index = favorites.indexOf(recipe.id);
        if (index !== -1) {
          favorites.splice(index, 1);
        }
      }
      localStorage.setItem('user-favorite-recipes', JSON.stringify(favorites));
    } catch (error) {
      console.error("Error updating favorites:", error);
    }
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
  
  const handleAddNote = () => {
    if (newNote.trim()) {
      if (editingNoteId) {
        setNotes(prev => 
          prev.map(note => 
            note.id === editingNoteId 
              ? { ...note, text: newNote } 
              : note
          )
        );
        setEditingNoteId(null);
      } else {
        setNotes(prev => [...prev, { id: Date.now().toString(), text: newNote }]);
      }
      setNewNote("");
      setDialogOpen(false);
      toast.success("Notiz wurde gespeichert");
    }
  };
  
  const handleEditNote = (note: { id: string; text: string }) => {
    setNewNote(note.text);
    setEditingNoteId(note.id);
    setDialogOpen(true);
  };
  
  const handleDeleteNote = (id: string) => {
    setNotes(prev => prev.filter(note => note.id !== id));
    if (editingNoteId === id) {
      setEditingNoteId(null);
      setNewNote("");
    }
    toast.success("Notiz wurde gelöscht");
  };
  
  return (
    <div className="min-h-screen bg-cookbook-50/20">
      <Header />
      
      <div className="container mx-auto px-4 pt-40 md:pt-48">
        <div className="mb-6 flex items-center justify-between">
          <Button 
            variant="ghost" 
            className="group flex items-center gap-2" 
            onClick={() => navigate('/rezepte')}
          >
            <ArrowLeft size={16} className="transition-transform group-hover:-translate-x-1" />
            <span>Alle Rezepte</span>
          </Button>
          
          <div className="flex items-center gap-2">
            <RecipeRatingDisplay recipeId={recipe.id} showCount size="md" className="mr-2" />
            <FavoriteButton 
              recipeId={recipe.id}
              isFavorite={isFavorite} 
              onToggle={toggleFavorite}
            />
          </div>
        </div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="relative"
        >
          <RecipeHeader recipe={recipe} />
          
          <ProgressSection 
            stepsProgress={progress} 
            ingredientsProgress={ingredientsProgress}
          />
        </motion.div>
        
        <div className="mt-10 grid gap-8 md:grid-cols-12 md:gap-12">
          <FadeIn className="md:col-span-4" delay={0.1}>
            <RecipeIngredients
              recipe={recipe}
              completedIngredients={completedIngredients}
              onToggleIngredient={toggleIngredient}
            />
          </FadeIn>
          
          <FadeIn className="md:col-span-8" delay={0.2}>
            <RecipeSteps
              recipe={recipe}
              completedSteps={completedSteps}
              onToggleStep={toggleStep}
            />
            
            <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-8">
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
              
              <RecipeNotes recipeId={recipe.id} />
            </div>
          </FadeIn>
        </div>
      </div>
      
      <RecipeSuccess 
        show={showSuccess} 
        onClose={() => setShowSuccess(false)}
        completionTime={completionTime}
        recipeId={recipe.id}
      />
    </div>
  );
};

export default RecipeDetail;

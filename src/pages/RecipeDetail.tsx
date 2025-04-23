import { useState, useEffect, useRef } from "react";
import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft, Tag, Check, BarChart, PlusCircle, Trash2, Pencil, Star, Clock, ChefHat } from "lucide-react";

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
  
  // Notes state
  const [notes, setNotes] = useState<{id: string; text: string}[]>([]);
  const [newNote, setNewNote] = useState("");
  const [editingNoteId, setEditingNoteId] = useState<string | null>(null);
  
  useEffect(() => {
    setRecipe(recipes.find(r => r.id === id));
    window.scrollTo(0, 0);
    
    // Record visit to this recipe
    if (id) {
      try {
        const visitCount = localStorage.getItem(`recipe-visit-count-${id}`) || '0';
        localStorage.setItem(`recipe-visit-count-${id}`, (parseInt(visitCount) + 1).toString());
        
        // Check if recipe is favorited
        const favorites = JSON.parse(localStorage.getItem('user-favorite-recipes') || '[]');
        setIsFavorite(favorites.includes(id));
      } catch (error) {
        console.error("Error tracking recipe visit:", error);
      }
      
      // Record start time for this recipe
      startTimeRef.current = new Date();
      localStorage.setItem(`recipe-start-time-${id}`, startTimeRef.current.toString());
      
      // Load saved steps and ingredients
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
      
      // Load saved notes
      const savedNotes = localStorage.getItem(`recipe-bullet-notes-${id}`);
      if (savedNotes) {
        setNotes(JSON.parse(savedNotes));
      }
    }
  }, [id]);
  
  useEffect(() => {
    if (recipe) {
      // Check if recipe is favorited
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
      
      // Calculate ingredients progress
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
  
  // Save notes when they change
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
    // Update local state
    setIsFavorite(!isFavorite);
    
    // Save to localStorage
    try {
      const favorites = JSON.parse(localStorage.getItem('user-favorite-recipes') || '[]');
      if (!isFavorite) {
        // Add to favorites if not already there
        if (!favorites.includes(recipe.id)) {
          favorites.push(recipe.id);
        }
      } else {
        // Remove from favorites
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
        // Update existing note
        setNotes(prev => 
          prev.map(note => 
            note.id === editingNoteId 
              ? { ...note, text: newNote } 
              : note
          )
        );
        setEditingNoteId(null);
      } else {
        // Add new note
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
      
      <div className="container mx-auto mt-20 px-4 pt-8">
        <div className="mb-6 flex items-center justify-between">
          <Link to="/rezepte">
            <Button variant="ghost" className="group flex items-center gap-2">
              <ArrowLeft size={16} className="transition-transform group-hover:-translate-x-1" />
              <span>Alle Rezepte</span>
            </Button>
          </Link>
          
          <div className="flex items-center gap-2">
            {/* Recipe rating display */}
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
        
        <div className="mt-8">
          <FadeIn>
            <p className="text-lg text-gray-700">
              {recipe.description}
            </p>
            
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
              
              {recipe.tips && recipe.tips.length > 0 && (
                <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-8">
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
                  
                  <RecipeNotes recipeId={recipe.id} />
                </div>
              )}
              
              <div className="mt-8 rounded-xl bg-white p-6 shadow-lg border border-cookbook-100">
                <div className="flex justify-between items-center mb-4">
                  <h2 className="font-playfair text-xl font-bold text-cookbook-800 flex items-center">
                    <div className="bg-cookbook-700 text-white p-1 rounded-full mr-3">
                      <PlusCircle size={20} />
                    </div>
                    Meine Notizen
                  </h2>
                  
                  <Dialog open={dialogOpen} onOpenChange={setDialogOpen}>
                    <DialogTrigger asChild>
                      <Button variant="outline" className="flex items-center gap-2">
                        <PlusCircle size={16} />
                        <span>Notiz hinzufügen</span>
                      </Button>
                    </DialogTrigger>
                    <DialogContent>
                      <DialogHeader>
                        <DialogTitle>{editingNoteId ? "Notiz bearbeiten" : "Neue Notiz hinzufügen"}</DialogTitle>
                      </DialogHeader>
                      <div className="flex flex-col gap-4">
                        <Input 
                          value={newNote}
                          onChange={(e) => setNewNote(e.target.value)}
                          placeholder="Deine Notiz..."
                          className="w-full"
                        />
                        <div className="flex justify-end">
                          <Button onClick={handleAddNote}>
                            {editingNoteId ? "Speichern" : "Hinzufügen"}
                          </Button>
                        </div>
                      </div>
                    </DialogContent>
                  </Dialog>
                </div>
                
                {notes.length > 0 ? (
                  <ul className="space-y-3 mt-4">
                    {notes.map((note) => (
                      <li 
                        key={note.id}
                        className="flex items-start gap-3 p-3 rounded-lg bg-cookbook-50 border border-cookbook-100"
                      >
                        <div className="bg-cookbook-100 text-cookbook-700 h-6 w-6 flex items-center justify-center rounded-full font-semibold text-sm">
                          •
                        </div>
                        <p className="flex-grow text-sm">{note.text}</p>
                        <div className="flex gap-2">
                          <Button 
                            variant="ghost" 
                            size="sm"
                            className="h-8 w-8 p-0"
                            onClick={() => handleEditNote(note)}
                          >
                            <Pencil size={16} />
                          </Button>
                          <Button 
                            variant="ghost" 
                            size="sm"
                            className="h-8 w-8 p-0 text-red-500 hover:text-red-600"
                            onClick={() => handleDeleteNote(note.id)}
                          >
                            <Trash2 size={16} />
                          </Button>
                        </div>
                      </li>
                    ))}
                  </ul>
                ) : (
                  <div className="text-center py-8 bg-cookbook-50/50 rounded-lg">
                    <p className="text-gray-500">Du hast noch keine Notizen hinzugefügt.</p>
                    <p className="text-sm text-gray-400 mt-1">Klicke auf "Notiz hinzufügen", um loszulegen.</p>
                  </div>
                )}
              </div>
            </FadeIn>
          </div>
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

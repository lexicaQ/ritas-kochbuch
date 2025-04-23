
import { useState, useEffect, useRef } from "react";
import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Clock, ChefHat, ArrowLeft, Tag, Check, BarChart, PlusCircle, Trash2, Pencil } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { FadeIn } from "@/components/ui/fade-in";
import { CheckboxItem, CheckboxStepItem } from "@/components/ui/checkbox-item";
import { Header } from "@/components/header";
import { FavoriteButton } from "@/components/ui/favorite-button";
import { RecipeSuccess } from "@/components/ui/recipe-success";
import { RecipeNotes } from "@/components/ui/recipe-notes";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import recipes from "@/data/recipes";
import { cn } from "@/lib/utils";
import { Input } from "@/components/ui/input";

const RecipeDetail = () => {
  const { id } = useParams<{ id: string }>();
  const [recipe, setRecipe] = useState(recipes.find(r => r.id === id));
  const [isFavorite, setIsFavorite] = useState(recipe?.isFavorite || false);
  const startTimeRef = useRef(new Date());
  
  const [completedSteps, setCompletedSteps] = useState<{[key: string]: boolean}>({});
  const [completedIngredients, setCompletedIngredients] = useState<{[key: string]: boolean}>({});
  
  const [progress, setProgress] = useState(0);
  const [showSuccess, setShowSuccess] = useState(false);
  const [completionTime, setCompletionTime] = useState<string>("");
  
  // Notes state
  const [notes, setNotes] = useState<{id: string; text: string}[]>([]);
  const [newNote, setNewNote] = useState("");
  const [editingNoteId, setEditingNoteId] = useState<string | null>(null);
  
  useEffect(() => {
    setRecipe(recipes.find(r => r.id === id));
    window.scrollTo(0, 0);
    
    // Record start time for this recipe
    if (id) {
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
      setIsFavorite(recipe.isFavorite || false);
      
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
  }, [recipe, completedSteps, id, showSuccess]);
  
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
    const recipeIndex = recipes.findIndex(r => r.id === recipe.id);
    if (recipeIndex !== -1) {
      recipes[recipeIndex].isFavorite = !isFavorite;
    }
    
    setIsFavorite(!isFavorite);
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
    }
  };
  
  const handleEditNote = (note: { id: string; text: string }) => {
    setNewNote(note.text);
    setEditingNoteId(note.id);
  };
  
  const handleDeleteNote = (id: string) => {
    setNotes(prev => prev.filter(note => note.id !== id));
    if (editingNoteId === id) {
      setEditingNoteId(null);
      setNewNote("");
    }
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
          
          <FavoriteButton 
            recipeId={recipe.id}
            isFavorite={isFavorite} 
            onToggle={toggleFavorite}
          />
        </div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="relative"
        >
          <div className="relative w-full overflow-hidden rounded-2xl shadow-lg" style={{maxHeight: "400px"}}>
            <img
              src={recipe.image}
              alt={recipe.title}
              className="h-full w-full object-cover object-center"
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
          
          <div className="mt-6 bg-white rounded-xl p-6 shadow-sm border border-cookbook-100">
            <div className="flex items-center justify-between mb-2">
              <div className="flex items-center gap-2 text-cookbook-800">
                <BarChart size={18} />
                <span className="font-medium">Fortschritt</span>
              </div>
              <span className="text-sm font-medium text-cookbook-600">{Math.round(progress)}%</span>
            </div>
            <Progress value={progress} className="h-2" />
            <p className="mt-2 text-sm text-gray-600">
              {progress === 0 ? "Beginne mit der Zubereitung" :
               progress === 100 ? "Rezept abgeschlossen!" :
               `${Math.round(progress)}% der Schritte abgeschlossen`}
            </p>
          </div>
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
          
          <div className="mt-8">
            <div className="flex items-center justify-between">
              <span className="text-sm font-medium text-cookbook-800">Fortschritt</span>
              <span className="text-sm font-medium text-cookbook-800">{Math.round(progress)}%</span>
            </div>
            <div className="mt-2 h-2 w-full rounded-full bg-cookbook-200">
              <div 
                className="h-2 rounded-full bg-cookbook-600 transition-all duration-1000" 
                style={{ width: `${progress}%` }}
              ></div>
            </div>
          </div>
          
          <div className="mt-10 grid gap-8 md:grid-cols-12 md:gap-12">
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
                          <li key={itemIndex} onClick={() => toggleIngredient(ingredientId)}>
                            <div 
                              className={cn(
                                "flex items-start gap-2 p-2 rounded-lg transition-colors cursor-pointer",
                                completedIngredients[ingredientId] ? "bg-cookbook-100/50" : "hover:bg-cookbook-50/50"
                              )}
                            >
                              <div className={cn(
                                "flex h-5 w-5 rounded-full items-center justify-center border transition-colors",
                                completedIngredients[ingredientId] 
                                  ? "bg-cookbook-700 border-cookbook-700" 
                                  : "border-cookbook-300"
                              )}>
                                {completedIngredients[ingredientId] && <Check size={12} className="text-white" />}
                              </div>
                              <span className={cn(
                                "text-sm",
                                completedIngredients[ingredientId] && "line-through text-gray-400"
                              )}>
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
                            onClick={() => toggleStep(stepId)}
                            className={cn(
                              "flex items-start gap-3 rounded-lg p-4 transition-all cursor-pointer",
                              completedSteps[stepId] 
                                ? "bg-cookbook-100/50 border border-cookbook-200" 
                                : "hover:bg-cookbook-50/50 border border-cookbook-100/50"
                            )}
                          >
                            <div className={cn(
                              "flex h-6 w-6 shrink-0 items-center justify-center rounded-full font-medium transition-colors",
                              completedSteps[stepId] 
                                ? "bg-cookbook-700 text-white" 
                                : "bg-cookbook-200 text-cookbook-700"
                            )}>
                              {completedSteps[stepId] ? <Check size={14} /> : stepIndex + 1}
                            </div>
                            <span className={cn(
                              "text-sm",
                              completedSteps[stepId] && "text-gray-500 line-through"
                            )}>
                              {step}
                            </span>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                ))}
              </div>
              
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
              
              {/* Notes Container - Replacing Recipe Rating */}
              <div className="mt-8 rounded-xl bg-white p-6 shadow-lg border border-cookbook-100">
                <div className="flex justify-between items-center mb-4">
                  <h2 className="font-playfair text-xl font-bold text-cookbook-800 flex items-center">
                    <div className="bg-cookbook-700 text-white p-1 rounded-full mr-3">
                      <PlusCircle size={20} />
                    </div>
                    Meine Notizen
                  </h2>
                  
                  <Dialog>
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

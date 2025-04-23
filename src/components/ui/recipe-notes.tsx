
import React, { useState, useEffect } from "react";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Save } from "lucide-react";
import { cn } from "@/lib/utils";

interface RecipeNotesProps {
  recipeId: string;
  className?: string;
}

export function RecipeNotes({ recipeId, className }: RecipeNotesProps) {
  const [notes, setNotes] = useState("");
  const [isSaved, setIsSaved] = useState(true);
  
  // Load saved notes for this recipe
  useEffect(() => {
    const savedNotes = localStorage.getItem(`recipe-notes-${recipeId}`);
    if (savedNotes) {
      setNotes(savedNotes);
    }
  }, [recipeId]);
  
  // Track changes to know when to save
  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setNotes(e.target.value);
    setIsSaved(false);
  };
  
  // Save notes to localStorage
  const saveNotes = () => {
    localStorage.setItem(`recipe-notes-${recipeId}`, notes);
    setIsSaved(true);
    
    // Show saved feedback briefly
    setTimeout(() => {
      const saveButton = document.getElementById('save-notes-button');
      if (saveButton) {
        saveButton.classList.add('bg-cookbook-600');
        setTimeout(() => {
          saveButton.classList.remove('bg-cookbook-600');
        }, 1000);
      }
    }, 100);
  };
  
  return (
    <div className={cn("rounded-xl bg-cookbook-50/70 p-6 border border-cookbook-200", className)}>
      <h2 className="font-playfair text-xl font-bold text-cookbook-800 mb-4 flex items-center">
        <div className="bg-cookbook-700 text-white p-1 rounded-full mr-3">
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"></path>
            <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"></path>
          </svg>
        </div>
        Meine Notizen
      </h2>
      
      <div className="bg-white rounded-lg shadow-sm p-2">
        <Textarea 
          value={notes}
          onChange={handleChange}
          placeholder="Hier kannst du deine persönlichen Notizen zum Rezept machen..."
          className="min-h-[120px] border-0 focus-visible:ring-0 focus-visible:ring-offset-0 resize-y"
        />
        
        <div className="flex justify-end mt-2">
          <Button
            id="save-notes-button"
            size="sm" 
            onClick={saveNotes} 
            disabled={isSaved}
            className="transition-colors duration-300"
          >
            <Save size={16} />
            <span>{isSaved ? "Gespeichert" : "Speichern"}</span>
          </Button>
        </div>
      </div>
    </div>
  );
}

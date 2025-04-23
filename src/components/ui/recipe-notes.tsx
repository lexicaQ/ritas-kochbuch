
import React, { useState, useEffect } from "react";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Save, FileText, List, Tags } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { cn } from "@/lib/utils";

interface RecipeNotesProps {
  recipeId: string;
  className?: string;
}

export function RecipeNotes({ recipeId, className }: RecipeNotesProps) {
  const [generalNotes, setGeneralNotes] = useState("");
  const [ingredients, setIngredients] = useState("");
  const [tips, setTips] = useState("");
  const [isSaved, setIsSaved] = useState(true);
  
  useEffect(() => {
    const loadNotes = () => {
      const savedNotes = localStorage.getItem(`recipe-notes-${recipeId}`);
      if (savedNotes) {
        const parsed = JSON.parse(savedNotes);
        setGeneralNotes(parsed.general || "");
        setIngredients(parsed.ingredients || "");
        setTips(parsed.tips || "");
      }
    };
    
    loadNotes();
  }, [recipeId]);
  
  const handleChange = (
    value: string,
    type: "general" | "ingredients" | "tips"
  ) => {
    switch (type) {
      case "general":
        setGeneralNotes(value);
        break;
      case "ingredients":
        setIngredients(value);
        break;
      case "tips":
        setTips(value);
        break;
    }
    setIsSaved(false);
  };
  
  const saveNotes = () => {
    const notesToSave = {
      general: generalNotes,
      ingredients: ingredients,
      tips: tips,
    };
    
    localStorage.setItem(
      `recipe-notes-${recipeId}`,
      JSON.stringify(notesToSave)
    );
    setIsSaved(true);
    
    // Visual feedback animation
    const saveButton = document.getElementById('save-notes-button');
    if (saveButton) {
      saveButton.classList.add('bg-cookbook-600');
      setTimeout(() => {
        saveButton.classList.remove('bg-cookbook-600');
      }, 1000);
    }
  };
  
  return (
    <div className={cn("rounded-xl bg-cookbook-50/70 p-6 border border-cookbook-200", className)}>
      <h2 className="font-playfair text-xl font-bold text-cookbook-800 mb-4 flex items-center">
        <div className="bg-cookbook-700 text-white p-1 rounded-full mr-3">
          <FileText size={20} />
        </div>
        Meine Notizen
      </h2>
      
      <Tabs defaultValue="general" className="w-full">
        <TabsList className="w-full mb-4 bg-white">
          <TabsTrigger value="general" className="flex-1">
            <FileText size={16} className="mr-2" />
            Allgemein
          </TabsTrigger>
          <TabsTrigger value="ingredients" className="flex-1">
            <List size={16} className="mr-2" />
            Zutaten
          </TabsTrigger>
          <TabsTrigger value="tips" className="flex-1">
            <Tags size={16} className="mr-2" />
            Tipps
          </TabsTrigger>
        </TabsList>
        
        <div className="bg-white rounded-lg shadow-sm p-4">
          <TabsContent value="general">
            <Textarea
              value={generalNotes}
              onChange={(e) => handleChange(e.target.value, "general")}
              placeholder="Allgemeine Notizen zum Rezept..."
              className="min-h-[150px] border-0 focus-visible:ring-0 resize-y"
            />
          </TabsContent>
          
          <TabsContent value="ingredients">
            <Textarea
              value={ingredients}
              onChange={(e) => handleChange(e.target.value, "ingredients")}
              placeholder="Notizen zu Zutaten und Mengen..."
              className="min-h-[150px] border-0 focus-visible:ring-0 resize-y"
            />
          </TabsContent>
          
          <TabsContent value="tips">
            <Textarea
              value={tips}
              onChange={(e) => handleChange(e.target.value, "tips")}
              placeholder="Eigene Tipps und Variationen..."
              className="min-h-[150px] border-0 focus-visible:ring-0 resize-y"
            />
          </TabsContent>
          
          <div className="flex justify-end mt-4">
            <Button
              id="save-notes-button"
              onClick={saveNotes}
              disabled={isSaved}
              className="transition-colors duration-300"
            >
              <Save size={16} className="mr-2" />
              {isSaved ? "Gespeichert" : "Speichern"}
            </Button>
          </div>
        </div>
      </Tabs>
    </div>
  );
}

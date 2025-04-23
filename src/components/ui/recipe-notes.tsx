
import React, { useState, useEffect } from "react";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Save, FileText, List, Plus, Tag, Trash2, Pencil } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { cn } from "@/lib/utils";
import { toast } from "sonner";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";

interface Note {
  id: string;
  text: string;
  type: "general" | "ingredients" | "tips";
}

interface RecipeNotesProps {
  recipeId: string;
  className?: string;
}

export function RecipeNotes({ recipeId, className }: RecipeNotesProps) {
  const [generalText, setGeneralText] = useState("");
  const [ingredientsText, setIngredientsText] = useState("");
  const [tipsText, setTipsText] = useState("");
  const [notes, setNotes] = useState<Note[]>([]);
  const [isSaved, setIsSaved] = useState(true);
  const [dialogOpen, setDialogOpen] = useState(false);
  const [newNote, setNewNote] = useState("");
  const [activeTab, setActiveTab] = useState<"general" | "ingredients" | "tips">("general");
  const [editingNoteId, setEditingNoteId] = useState<string | null>(null);

  useEffect(() => {
    const loadNotes = () => {
      try {
        const savedTextNotes = localStorage.getItem(`recipe-notes-${recipeId}`);
        const savedBulletNotes = localStorage.getItem(`recipe-bullet-notes-${recipeId}`);

        if (savedTextNotes) {
          const parsed = JSON.parse(savedTextNotes);
          setGeneralText(parsed.general || "");
          setIngredientsText(parsed.ingredients || "");
          setTipsText(parsed.tips || "");
        }

        if (savedBulletNotes) {
          setNotes(JSON.parse(savedBulletNotes));
        }
      } catch (error) {
        console.error("Error loading notes:", error);
        localStorage.removeItem(`recipe-notes-${recipeId}`);
        localStorage.removeItem(`recipe-bullet-notes-${recipeId}`);
      }
    };
    
    loadNotes();
  }, [recipeId]);

  const handleTextChange = (
    value: string,
    type: "general" | "ingredients" | "tips"
  ) => {
    switch (type) {
      case "general":
        setGeneralText(value);
        break;
      case "ingredients":
        setIngredientsText(value);
        break;
      case "tips":
        setTipsText(value);
        break;
    }
    setIsSaved(false);
  };

  const saveNotes = () => {
    try {
      const notesToSave = {
        general: generalText,
        ingredients: ingredientsText,
        tips: tipsText,
      };
      
      localStorage.setItem(
        `recipe-notes-${recipeId}`,
        JSON.stringify(notesToSave)
      );

      localStorage.setItem(
        `recipe-bullet-notes-${recipeId}`,
        JSON.stringify(notes)
      );

      setIsSaved(true);
      toast.success("Notizen wurden gespeichert");
    } catch (error) {
      console.error("Error saving notes:", error);
      toast.error("Fehler beim Speichern der Notizen");
    }
  };

  const handleAddNote = () => {
    if (newNote.trim()) {
      if (editingNoteId) {
        setNotes(prev => 
          prev.map(note => 
            note.id === editingNoteId 
              ? { ...note, text: newNote, type: activeTab } 
              : note
          )
        );
        setEditingNoteId(null);
      } else {
        setNotes(prev => [...prev, { 
          id: Date.now().toString(),
          text: newNote,
          type: activeTab
        }]);
      }
      setNewNote("");
      setDialogOpen(false);
      setIsSaved(false);
    }
  };

  const handleEditNote = (note: Note) => {
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
    setIsSaved(false);
    toast.success("Notiz wurde gelöscht");
  };

  const filteredNotes = notes.filter(note => note.type === activeTab);
  
  return (
    <div className={cn("rounded-xl bg-cookbook-50/70 p-6 border border-cookbook-200", className)}>
      <h2 className="font-playfair text-xl font-bold text-cookbook-800 mb-4 flex items-center">
        <div className="bg-cookbook-700 text-white p-1 rounded-full mr-3">
          <FileText size={20} />
        </div>
        Meine Notizen
      </h2>
      
      <Tabs value={activeTab} onValueChange={(v: "general" | "ingredients" | "tips") => setActiveTab(v)} className="w-full">
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
            <Tag size={16} className="mr-2" />
            Tipps
          </TabsTrigger>
        </TabsList>
        
        <div className="bg-white rounded-lg shadow-sm p-4">
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-sm font-medium text-gray-700">Notizen als Liste</h3>
            <Dialog open={dialogOpen} onOpenChange={setDialogOpen}>
              <DialogTrigger asChild>
                <Button variant="outline" className="flex items-center gap-2">
                  <Plus size={16} />
                  <span>Notiz hinzufügen</span>
                </Button>
              </DialogTrigger>
              <DialogContent>
                <DialogHeader>
                  <DialogTitle>
                    {editingNoteId ? "Notiz bearbeiten" : "Neue Notiz hinzufügen"}
                  </DialogTitle>
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

          {filteredNotes.length > 0 ? (
            <ul className="space-y-3 mb-6">
              {filteredNotes.map((note) => (
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
            <div className="text-center py-4 bg-cookbook-50/50 rounded-lg mb-6">
              <p className="text-gray-500">Keine Notizen vorhanden</p>
              <p className="text-sm text-gray-400 mt-1">
                Klicke auf "Notiz hinzufügen", um loszulegen
              </p>
            </div>
          )}

          <TabsContent value="general">
            <Textarea
              value={generalText}
              onChange={(e) => handleTextChange(e.target.value, "general")}
              placeholder="Allgemeine Notizen zum Rezept..."
              className="min-h-[150px] border-0 focus-visible:ring-0 resize-y"
            />
          </TabsContent>
          
          <TabsContent value="ingredients">
            <Textarea
              value={ingredientsText}
              onChange={(e) => handleTextChange(e.target.value, "ingredients")}
              placeholder="Notizen zu Zutaten und Mengen..."
              className="min-h-[150px] border-0 focus-visible:ring-0 resize-y"
            />
          </TabsContent>
          
          <TabsContent value="tips">
            <Textarea
              value={tipsText}
              onChange={(e) => handleTextChange(e.target.value, "tips")}
              placeholder="Eigene Tipps und Variationen..."
              className="min-h-[150px] border-0 focus-visible:ring-0 resize-y"
            />
          </TabsContent>
          
          <div className="flex justify-end mt-4">
            <Button
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


export interface Recipe {
  id: string;
  title: string;
  description: string;
  image: string;
  portionSize: string;
  prepTime: string;
  cookTime?: string;
  totalTime?: string;
  difficulty: "Leicht" | "Normal" | "Schwer" | "Mittel" | "Anspruchsvoll";
  category: string;
  tags: string[];
  calories?: string;
  ingredients: {
    group?: string;
    items: {
      name: string;
      amount?: string;
    }[];
  }[];
  steps: {
    group?: string;
    items: string[];
  }[];
  tips?: string[];
  utensils?: string[];
  isFavorite?: boolean;
}

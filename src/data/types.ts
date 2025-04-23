
export interface Recipe {
  id: string;
  title: string;
  description: string;
  image: string;
  portionSize: string;
  prepTime: string;
  cookTime?: string;
  totalTime?: string;
  difficulty: "leicht" | "normal" | "schwer" | "mittel" | "anspruchsvoll";
  category: string;
  tags: string[];
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
  isFavorite?: boolean;
}

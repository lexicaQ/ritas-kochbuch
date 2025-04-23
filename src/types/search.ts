
export interface SearchResult {
  id: string;
  title: string;
  image: string;
  category: string;
  matchType?: "title" | "category" | "tag" | "description";
  difficulty: string;
  prepTime: string;
  tags: string[];
}

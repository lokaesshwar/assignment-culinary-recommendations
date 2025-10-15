export interface Recipe {
  id: string;
  name: string;
  cuisine: string;
  ingredients: string[];
  steps: string[];
  nutrition: {
    calories: number;
    protein: number;
    carbs: number;
    fat: number;
  };
  tags: string[];
  timeMinutes: number;
  difficulty: "easy" | "medium" | "hard";
  diet: string[];
  imageUrl?: string;
}

export interface Rating {
  recipeId: string;
  stars: number;
  createdAt: number;
}

export interface UserPreferences {
  diets: string[];
  disliked: string[];
  cuisines: string[];
}

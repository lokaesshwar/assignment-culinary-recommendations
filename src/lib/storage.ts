import { Rating, UserPreferences } from "@/types/recipe";

const FAVORITES_KEY = "recipe-favorites";
const RATINGS_KEY = "recipe-ratings";
const PREFERENCES_KEY = "user-preferences";

export const storage = {
  getFavorites: (): string[] => {
    const stored = localStorage.getItem(FAVORITES_KEY);
    return stored ? JSON.parse(stored) : [];
  },

  toggleFavorite: (recipeId: string): boolean => {
    const favorites = storage.getFavorites();
    const index = favorites.indexOf(recipeId);
    
    if (index > -1) {
      favorites.splice(index, 1);
    } else {
      favorites.push(recipeId);
    }
    
    localStorage.setItem(FAVORITES_KEY, JSON.stringify(favorites));
    return index === -1;
  },

  isFavorite: (recipeId: string): boolean => {
    return storage.getFavorites().includes(recipeId);
  },

  getRatings: (): Rating[] => {
    const stored = localStorage.getItem(RATINGS_KEY);
    return stored ? JSON.parse(stored) : [];
  },

  setRating: (recipeId: string, stars: number): void => {
    const ratings = storage.getRatings();
    const existingIndex = ratings.findIndex(r => r.recipeId === recipeId);
    
    const newRating: Rating = {
      recipeId,
      stars,
      createdAt: Date.now()
    };
    
    if (existingIndex > -1) {
      ratings[existingIndex] = newRating;
    } else {
      ratings.push(newRating);
    }
    
    localStorage.setItem(RATINGS_KEY, JSON.stringify(ratings));
  },

  getRating: (recipeId: string): number | null => {
    const ratings = storage.getRatings();
    const rating = ratings.find(r => r.recipeId === recipeId);
    return rating ? rating.stars : null;
  },

  getPreferences: (): UserPreferences => {
    const stored = localStorage.getItem(PREFERENCES_KEY);
    return stored ? JSON.parse(stored) : {
      diets: [],
      disliked: [],
      cuisines: []
    };
  },

  setPreferences: (preferences: UserPreferences): void => {
    localStorage.setItem(PREFERENCES_KEY, JSON.stringify(preferences));
  }
};

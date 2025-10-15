import { Recipe } from "@/types/recipe";
import { getSubstitutions } from "@/data/substitutions";

export interface MatchedRecipe extends Recipe {
  matchScore: number;
  missingIngredients: string[];
  suggestedSubstitutions?: Array<{ ingredient: string; alternatives: string[] }>;
}

export function matchRecipes(
  availableIngredients: string[],
  recipes: Recipe[],
  dietPreferences: string[] = [],
  disliked: string[] = []
): MatchedRecipe[] {
  const normalizedAvailable = availableIngredients.map(i => i.toLowerCase().trim());
  const normalizedDisliked = disliked.map(i => i.toLowerCase().trim());

  const scored = recipes.map(recipe => {
    const recipeIngredients = recipe.ingredients.map(i => i.toLowerCase());
    
    // Check for disliked ingredients
    const hasDisliked = recipeIngredients.some(ing => 
      normalizedDisliked.some(dis => ing.includes(dis))
    );
    
    // Check diet compatibility
    const isDietCompatible = dietPreferences.length === 0 || 
      dietPreferences.every(diet => recipe.diet.includes(diet));
    
    // Calculate match score
    const matches = recipeIngredients.filter(ing =>
      normalizedAvailable.some(avail => ing.includes(avail) || avail.includes(ing))
    ).length;
    
    const missingIngredients = recipeIngredients.filter(ing =>
      !normalizedAvailable.some(avail => ing.includes(avail) || avail.includes(ing))
    );
    
    // Calculate weighted score
    let score = (matches / recipeIngredients.length) * 100;
    
    if (isDietCompatible) score += 10;
    if (hasDisliked) score -= 50;
    
    // Find substitutions for missing ingredients
    const suggestedSubstitutions = missingIngredients
      .map(ing => ({
        ingredient: ing,
        alternatives: getSubstitutions(ing, dietPreferences)
      }))
      .filter(s => s.alternatives.length > 0);
    
    return {
      ...recipe,
      matchScore: Math.max(0, score),
      missingIngredients,
      suggestedSubstitutions
    };
  });

  return scored
    .filter(r => r.matchScore > 0)
    .sort((a, b) => b.matchScore - a.matchScore);
}

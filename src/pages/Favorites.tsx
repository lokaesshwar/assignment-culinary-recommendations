import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { RecipeCard } from "@/components/RecipeCard";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ChefHat, ArrowLeft, Heart } from "lucide-react";
import { recipes } from "@/data/recipes";
import { storage } from "@/lib/storage";
import { Recipe } from "@/types/recipe";

export default function Favorites() {
  const navigate = useNavigate();
  const [favoriteRecipes, setFavoriteRecipes] = useState<Recipe[]>([]);
  const [suggestedRecipes, setSuggestedRecipes] = useState<Recipe[]>([]);

  useEffect(() => {
    const favoriteIds = storage.getFavorites();
    const favorites = recipes.filter(r => favoriteIds.includes(r.id));
    setFavoriteRecipes(favorites);

    // Get user preferences and ratings for suggestions
    const ratings = storage.getRatings();
    const preferences = storage.getPreferences();
    
    // Simple suggestion algorithm: high-rated recipes + preference matching
    const ratedRecipeIds = new Set(ratings.map(r => r.recipeId));
    const highRatedIds = new Set(
      ratings.filter(r => r.stars >= 4).map(r => r.recipeId)
    );
    
    const suggestions = recipes
      .filter(r => !favoriteIds.includes(r.id)) // Not already a favorite
      .map(recipe => {
        let score = 0;
        
        // Boost if matches dietary preferences
        if (preferences.diets.length > 0) {
          const matchingDiets = recipe.diet.filter(d => 
            preferences.diets.includes(d)
          ).length;
          score += matchingDiets * 10;
        }
        
        // Boost if similar to highly rated recipes
        if (ratedRecipeIds.has(recipe.id)) {
          score -= 50; // Already rated, lower priority
        }
        
        // Boost if same cuisine as favorites
        const favoriteCuisines = favorites.map(f => f.cuisine);
        if (favoriteCuisines.includes(recipe.cuisine)) {
          score += 5;
        }
        
        return { recipe, score };
      })
      .sort((a, b) => b.score - a.score)
      .slice(0, 6)
      .map(item => item.recipe);
    
    setSuggestedRecipes(suggestions);
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <header className="border-b bg-card">
        <div className="container mx-auto px-4 py-4 flex items-center gap-4">
          <Button variant="ghost" size="icon" onClick={() => navigate('/')}>
            <ArrowLeft className="h-5 w-5" />
          </Button>
          <div className="flex items-center gap-2">
            <Heart className="h-6 w-6 text-primary" />
            <h1 className="text-xl font-semibold">Your Collection</h1>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        <Tabs defaultValue="favorites" className="w-full">
          <TabsList className="mb-6">
            <TabsTrigger value="favorites">
              Favorites ({favoriteRecipes.length})
            </TabsTrigger>
            <TabsTrigger value="suggestions">
              Suggestions for you
            </TabsTrigger>
          </TabsList>

          <TabsContent value="favorites">
            {favoriteRecipes.length === 0 ? (
              <div className="text-center py-12">
                <Heart className="h-16 w-16 mx-auto text-muted-foreground/30 mb-4" />
                <h3 className="text-xl font-semibold mb-2">No favorites yet</h3>
                <p className="text-muted-foreground mb-6">
                  Save your favorite recipes to find them easily later
                </p>
                <Button onClick={() => navigate('/')}>
                  Discover recipes
                </Button>
              </div>
            ) : (
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {favoriteRecipes.map((recipe) => (
                  <RecipeCard
                    key={recipe.id}
                    recipe={recipe}
                    onClick={() => navigate(`/recipe/${recipe.id}`)}
                  />
                ))}
              </div>
            )}
          </TabsContent>

          <TabsContent value="suggestions">
            <div className="mb-6">
              <h2 className="text-2xl font-bold mb-2">Personalized for you</h2>
              <p className="text-muted-foreground">
                Based on your ratings and preferences
              </p>
            </div>
            
            {suggestedRecipes.length === 0 ? (
              <div className="text-center py-12">
                <ChefHat className="h-16 w-16 mx-auto text-muted-foreground/30 mb-4" />
                <h3 className="text-xl font-semibold mb-2">No suggestions yet</h3>
                <p className="text-muted-foreground mb-6">
                  Rate some recipes to get personalized suggestions
                </p>
                <Button onClick={() => navigate('/')}>
                  Browse recipes
                </Button>
              </div>
            ) : (
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {suggestedRecipes.map((recipe) => (
                  <RecipeCard
                    key={recipe.id}
                    recipe={recipe}
                    onClick={() => navigate(`/recipe/${recipe.id}`)}
                  />
                ))}
              </div>
            )}
          </TabsContent>
        </Tabs>
      </main>
    </div>
  );
}

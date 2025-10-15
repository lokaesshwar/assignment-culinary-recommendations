import { useState, useEffect } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { RecipeCard } from "@/components/RecipeCard";
import { RecipeFilters } from "@/components/RecipeFilters";
import { ChefHat, ArrowLeft } from "lucide-react";
import { recipes } from "@/data/recipes";
import { matchRecipes, MatchedRecipe } from "@/lib/recipeMatching";

export default function Recipes() {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const [difficulty, setDifficulty] = useState("all");
  const [maxTime, setMaxTime] = useState("all");
  const [matchedRecipes, setMatchedRecipes] = useState<MatchedRecipe[]>([]);

  useEffect(() => {
    const ingredientsParam = searchParams.get('ingredients');
    const dietsParam = searchParams.get('diets');
    
    const ingredients = ingredientsParam ? ingredientsParam.split(',') : [];
    const diets = dietsParam ? dietsParam.split(',').filter(Boolean) : [];
    
    let matched = matchRecipes(ingredients, recipes, diets, []);
    
    // Apply filters
    if (difficulty !== "all") {
      matched = matched.filter(r => r.difficulty === difficulty);
    }
    
    if (maxTime !== "all") {
      const maxMinutes = parseInt(maxTime);
      matched = matched.filter(r => r.timeMinutes <= maxMinutes);
    }
    
    setMatchedRecipes(matched);
  }, [searchParams, difficulty, maxTime]);

  return (
    <div className="min-h-screen bg-background">
      <header className="border-b bg-card sticky top-0 z-10">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <Button variant="ghost" size="icon" onClick={() => navigate('/')}>
              <ArrowLeft className="h-5 w-5" />
            </Button>
            <div className="flex items-center gap-2">
              <ChefHat className="h-6 w-6 text-primary" />
              <h1 className="text-xl font-semibold">Recipe Results</h1>
            </div>
          </div>
          <Button variant="ghost" onClick={() => navigate('/favorites')}>
            Favorites
          </Button>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        <div className="mb-6">
          <h2 className="text-2xl font-bold mb-1">
            {matchedRecipes.length} recipes found
          </h2>
          <p className="text-muted-foreground">
            Based on your ingredients and preferences
          </p>
        </div>

        <div className="mb-6">
          <RecipeFilters
            difficulty={difficulty}
            maxTime={maxTime}
            onDifficultyChange={setDifficulty}
            onMaxTimeChange={setMaxTime}
          />
        </div>

        {matchedRecipes.length === 0 ? (
          <div className="text-center py-12">
            <ChefHat className="h-16 w-16 mx-auto text-muted-foreground/30 mb-4" />
            <h3 className="text-xl font-semibold mb-2">No recipes found</h3>
            <p className="text-muted-foreground mb-6">
              Try adjusting your filters or adding more ingredients
            </p>
            <Button onClick={() => navigate('/')}>
              Back to search
            </Button>
          </div>
        ) : (
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {matchedRecipes.map((recipe) => (
              <RecipeCard
                key={recipe.id}
                recipe={recipe}
                matchScore={recipe.matchScore}
                onClick={() => navigate(`/recipe/${recipe.id}`)}
              />
            ))}
          </div>
        )}
      </main>
    </div>
  );
}

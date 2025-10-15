import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { ChefHat, ArrowLeft, Clock, Heart, Star, Users } from "lucide-react";
import { recipes } from "@/data/recipes";
import { storage } from "@/lib/storage";
import { Recipe } from "@/types/recipe";
import { cn } from "@/lib/utils";
import { toast } from "sonner";

export default function RecipeDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [recipe, setRecipe] = useState<Recipe | null>(null);
  const [servings, setServings] = useState(4);
  const [isFavorite, setIsFavorite] = useState(false);
  const [rating, setRating] = useState<number | null>(null);
  const [hoveredStar, setHoveredStar] = useState<number | null>(null);

  useEffect(() => {
    const found = recipes.find(r => r.id === id);
    if (found) {
      setRecipe(found);
      setIsFavorite(storage.isFavorite(found.id));
      setRating(storage.getRating(found.id));
    }
  }, [id]);

  if (!recipe) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <ChefHat className="h-16 w-16 mx-auto text-muted-foreground/30 mb-4" />
          <h2 className="text-xl font-semibold mb-2">Recipe not found</h2>
          <Button onClick={() => navigate('/')}>Back to home</Button>
        </div>
      </div>
    );
  }

  const handleFavoriteToggle = () => {
    const newState = storage.toggleFavorite(recipe.id);
    setIsFavorite(newState);
    toast.success(newState ? "Added to favorites" : "Removed from favorites");
  };

  const handleRating = (stars: number) => {
    storage.setRating(recipe.id, stars);
    setRating(stars);
    toast.success(`Rated ${stars} stars`);
  };

  const adjustedNutrition = {
    calories: Math.round((recipe.nutrition.calories / 4) * servings),
    protein: Math.round((recipe.nutrition.protein / 4) * servings),
    carbs: Math.round((recipe.nutrition.carbs / 4) * servings),
    fat: Math.round((recipe.nutrition.fat / 4) * servings)
  };

  return (
    <div className="min-h-screen bg-background">
      <header className="border-b bg-card">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <Button variant="ghost" size="icon" onClick={() => navigate(-1)}>
            <ArrowLeft className="h-5 w-5" />
          </Button>
          <div className="flex gap-2">
            <Button
              variant={isFavorite ? "default" : "outline"}
              onClick={handleFavoriteToggle}
              className="gap-2"
            >
              <Heart className={cn("h-4 w-4", isFavorite && "fill-current")} />
              {isFavorite ? "Saved" : "Save"}
            </Button>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8 max-w-4xl">
        <div className="h-64 rounded-lg bg-gradient-to-br from-primary/20 via-accent/20 to-secondary/30 mb-6 flex items-center justify-center">
          <ChefHat className="h-32 w-32 text-primary/40" />
        </div>

        <div className="mb-6">
          <div className="flex items-start justify-between mb-3">
            <div>
              <h1 className="text-3xl font-bold mb-2">{recipe.name}</h1>
              <p className="text-lg text-muted-foreground">{recipe.cuisine} Cuisine</p>
            </div>
          </div>
          
          <div className="flex flex-wrap gap-2 mb-4">
            {recipe.diet.map(diet => (
              <Badge key={diet} variant="secondary" className="capitalize">
                {diet}
              </Badge>
            ))}
            {recipe.tags.map(tag => (
              <Badge key={tag} variant="outline">
                {tag}
              </Badge>
            ))}
          </div>

          <div className="flex items-center gap-6 text-muted-foreground mb-4">
            <div className="flex items-center gap-2">
              <Clock className="h-5 w-5" />
              <span>{recipe.timeMinutes} minutes</span>
            </div>
            <Badge variant="outline" className="capitalize">
              {recipe.difficulty}
            </Badge>
          </div>

          <div className="flex items-center gap-2">
            <span className="text-sm font-medium">Rate this recipe:</span>
            {Array.from({ length: 5 }).map((_, i) => (
              <button
                key={i}
                onClick={() => handleRating(i + 1)}
                onMouseEnter={() => setHoveredStar(i + 1)}
                onMouseLeave={() => setHoveredStar(null)}
              >
                <Star
                  className={cn(
                    "h-5 w-5 transition-colors cursor-pointer",
                    (hoveredStar ? i < hoveredStar : rating && i < rating)
                      ? "fill-accent text-accent"
                      : "text-muted-foreground/30"
                  )}
                />
              </button>
            ))}
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-8">
          <Card className="md:col-span-2">
            <CardHeader>
              <CardTitle>Ingredients</CardTitle>
              <div className="flex items-center gap-2 mt-2">
                <Users className="h-4 w-4 text-muted-foreground" />
                <span className="text-sm text-muted-foreground">Servings:</span>
                <div className="flex gap-2">
                  <Button
                    size="sm"
                    variant="outline"
                    onClick={() => setServings(Math.max(1, servings - 1))}
                  >
                    -
                  </Button>
                  <span className="w-8 text-center flex items-center justify-center font-medium">
                    {servings}
                  </span>
                  <Button
                    size="sm"
                    variant="outline"
                    onClick={() => setServings(servings + 1)}
                  >
                    +
                  </Button>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2">
                {recipe.ingredients.map((ingredient, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <span className="text-primary mt-1.5">•</span>
                    <span className="capitalize">{ingredient}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Nutrition</CardTitle>
              <p className="text-sm text-muted-foreground">Per serving</p>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="flex justify-between">
                <span className="text-muted-foreground">Calories</span>
                <span className="font-medium">{adjustedNutrition.calories}</span>
              </div>
              <Separator />
              <div className="flex justify-between">
                <span className="text-muted-foreground">Protein</span>
                <span className="font-medium">{adjustedNutrition.protein}g</span>
              </div>
              <Separator />
              <div className="flex justify-between">
                <span className="text-muted-foreground">Carbs</span>
                <span className="font-medium">{adjustedNutrition.carbs}g</span>
              </div>
              <Separator />
              <div className="flex justify-between">
                <span className="text-muted-foreground">Fat</span>
                <span className="font-medium">{adjustedNutrition.fat}g</span>
              </div>
            </CardContent>
          </Card>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>Instructions</CardTitle>
          </CardHeader>
          <CardContent>
            <ol className="space-y-4">
              {recipe.steps.map((step, i) => (
                <li key={i} className="flex gap-4">
                  <span className="flex-shrink-0 w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-semibold">
                    {i + 1}
                  </span>
                  <p className="pt-1">{step}</p>
                </li>
              ))}
            </ol>
          </CardContent>
        </Card>
      </main>
    </div>
  );
}

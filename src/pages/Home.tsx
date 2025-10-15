import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { IngredientInput } from "@/components/IngredientInput";
import { DietSelector } from "@/components/DietSelector";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ChefHat } from "lucide-react";

export default function Home() {
  const [ingredients, setIngredients] = useState<string[]>([]);
  const [diets, setDiets] = useState<string[]>([]);
  const navigate = useNavigate();

  const handleFindRecipes = () => {
    if (ingredients.length === 0) {
      return;
    }
    
    const params = new URLSearchParams({
      ingredients: ingredients.join(','),
      diets: diets.join(',')
    });
    
    navigate(`/recipes?${params.toString()}`);
  };

  return (
    <div className="min-h-screen bg-background">
      <header className="border-b bg-card">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <ChefHat className="h-6 w-6 text-primary" />
            <h1 className="text-xl font-semibold"> Smart Recipe Generator</h1>
          </div>
          <nav className="flex gap-4">
            <Button variant="ghost" onClick={() => navigate('/favorites')}>
              Favorites
            </Button>
          </nav>
        </div>
      </header>

      <main className="container mx-auto px-4 py-12 max-w-4xl">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
            Discover Recipes from Your Ingredients
          </h2>
          <p className="text-lg text-muted-foreground">
            Upload a photo or type ingredients to get personalized recipe suggestions
          </p>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>What's in your kitchen?</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <IngredientInput
              ingredients={ingredients}
              onIngredientsChange={setIngredients}
            />
            
            <DietSelector selected={diets} onChange={setDiets} />
            
            <Button
              onClick={handleFindRecipes}
              disabled={ingredients.length === 0}
              size="lg"
              className="w-full"
            >
              Find recipes
            </Button>
            
            {ingredients.length === 0 && (
              <p className="text-sm text-center text-muted-foreground">
                Add a photo or type a few ingredients to get started
              </p>
            )}
          </CardContent>
        </Card>

        <div className="mt-12 grid md:grid-cols-3 gap-6">
          <Card>
            <CardContent className="pt-6 text-center">
              <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-3">
                <ChefHat className="h-6 w-6 text-primary" />
              </div>
              <h3 className="font-semibold mb-2">Smart Matching</h3>
              <p className="text-sm text-muted-foreground">
                AI-powered ingredient recognition and recipe matching
              </p>
            </CardContent>
          </Card>
          
          <Card>
            <CardContent className="pt-6 text-center">
              <div className="h-12 w-12 rounded-full bg-accent/10 flex items-center justify-center mx-auto mb-3">
                <ChefHat className="h-6 w-6 text-accent" />
              </div>
              <h3 className="font-semibold mb-2">Dietary Options</h3>
              <p className="text-sm text-muted-foreground">
                Filter by vegan, vegetarian, gluten-free, and more
              </p>
            </CardContent>
          </Card>
          
          <Card>
            <CardContent className="pt-6 text-center">
              <div className="h-12 w-12 rounded-full bg-secondary/20 flex items-center justify-center mx-auto mb-3">
                <ChefHat className="h-6 w-6 text-primary" />
              </div>
              <h3 className="font-semibold mb-2">Personalized</h3>
              <p className="text-sm text-muted-foreground">
                Save favorites and get suggestions based on your taste
              </p>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  );
}

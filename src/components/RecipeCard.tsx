import { Recipe } from "@/types/recipe";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Clock, ChefHat, Star, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { storage } from "@/lib/storage";
import { useState } from "react";
import { cn } from "@/lib/utils";

interface RecipeCardProps {
  recipe: Recipe;
  onClick: () => void;
  matchScore?: number;
}

export function RecipeCard({ recipe, onClick, matchScore }: RecipeCardProps) {
  const [isFavorite, setIsFavorite] = useState(storage.isFavorite(recipe.id));
  const rating = storage.getRating(recipe.id);

  const handleFavoriteClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    const newState = storage.toggleFavorite(recipe.id);
    setIsFavorite(newState);
  };

  return (
    <Card 
      className="cursor-pointer hover:shadow-lg transition-all group overflow-hidden"
      onClick={onClick}
    >
      <div className="h-40 bg-gradient-to-br from-primary/20 via-accent/20 to-secondary/30 relative">
        <div className="absolute inset-0 flex items-center justify-center">
          <ChefHat className="h-16 w-16 text-primary/40" />
        </div>
        {matchScore !== undefined && matchScore > 0 && (
          <Badge className="absolute top-2 left-2 bg-accent text-accent-foreground">
            {Math.round(matchScore)}% match
          </Badge>
        )}
        <Button
          size="icon"
          variant="ghost"
          className={cn(
            "absolute top-2 right-2 h-8 w-8",
            isFavorite ? "text-destructive" : "text-muted-foreground hover:text-destructive"
          )}
          onClick={handleFavoriteClick}
        >
          <Heart className={cn("h-5 w-5", isFavorite && "fill-current")} />
        </Button>
      </div>
      
      <CardHeader className="pb-3">
        <h3 className="font-semibold text-lg line-clamp-1">{recipe.name}</h3>
        <p className="text-sm text-muted-foreground">{recipe.cuisine}</p>
      </CardHeader>
      
      <CardContent className="space-y-3">
        <div className="flex items-center gap-4 text-sm text-muted-foreground">
          <div className="flex items-center gap-1">
            <Clock className="h-4 w-4" />
            <span>{recipe.timeMinutes} min</span>
          </div>
          <Badge variant="outline" className="capitalize">
            {recipe.difficulty}
          </Badge>
        </div>
        
        {rating && (
          <div className="flex items-center gap-1">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star
                key={i}
                className={cn(
                  "h-4 w-4",
                  i < rating ? "fill-accent text-accent" : "text-muted-foreground/30"
                )}
              />
            ))}
          </div>
        )}
        
        <div className="flex flex-wrap gap-1.5">
          {recipe.tags.slice(0, 2).map(tag => (
            <Badge key={tag} variant="secondary" className="text-xs">
              {tag}
            </Badge>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}

import { useState, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Upload, X, Plus } from "lucide-react";
import { toast } from "sonner";

interface IngredientInputProps {
  ingredients: string[];
  onIngredientsChange: (ingredients: string[]) => void;
}

export function IngredientInput({ ingredients, onIngredientsChange }: IngredientInputProps) {
  const [inputValue, setInputValue] = useState("");
  const [isProcessing, setIsProcessing] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleAddIngredient = () => {
    if (!inputValue.trim()) return;
    
    const newIngredients = inputValue
      .split(',')
      .map(i => i.trim().toLowerCase())
      .filter(i => i && !ingredients.includes(i));
    
    if (newIngredients.length > 0) {
      onIngredientsChange([...ingredients, ...newIngredients]);
      setInputValue("");
    }
  };

  const handleRemoveIngredient = (ingredient: string) => {
    onIngredientsChange(ingredients.filter(i => i !== ingredient));
  };

  const handleImageUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    if (!file.type.startsWith('image/')) {
      toast.error("Please upload an image file");
      return;
    }

    setIsProcessing(true);
    
    // Mock AI extraction - replace with real API call
    setTimeout(() => {
      const mockExtracted = ["tomato"];
      const newIngredients = mockExtracted.filter(i => !ingredients.includes(i));
      
      if (newIngredients.length > 0) {
        onIngredientsChange([...ingredients, ...newIngredients]);
        toast.success(`Detected ${newIngredients.length} ingredients from photo`);
      } else {
        toast.info("No new ingredients detected");
      }
      
      setIsProcessing(false);
    }, 1500);
  };

  return (
    <div className="space-y-4">
      <div className="flex gap-2">
        <Input
          placeholder="Type ingredients (comma separated)"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          onKeyDown={(e) => e.key === 'Enter' && handleAddIngredient()}
          className="flex-1"
        />
        <Button onClick={handleAddIngredient} size="icon" variant="secondary">
          <Plus className="h-4 w-4" />
        </Button>
        <Button
          onClick={() => fileInputRef.current?.click()}
          disabled={isProcessing}
          variant="outline"
          className="gap-2"
        >
          <Upload className="h-4 w-4" />
          {isProcessing ? "Processing..." : "Upload photo"}
        </Button>
        <input
          ref={fileInputRef}
          type="file"
          accept="image/*"
          onChange={handleImageUpload}
          className="hidden"
        />
      </div>

      {ingredients.length > 0 && (
        <div className="flex flex-wrap gap-2">
          {ingredients.map((ingredient) => (
            <Badge key={ingredient} variant="secondary" className="gap-1 pl-3 pr-2 py-1.5">
              {ingredient}
              <button
                onClick={() => handleRemoveIngredient(ingredient)}
                className="ml-1 hover:bg-background/20 rounded-full p-0.5"
              >
                <X className="h-3 w-3" />
              </button>
            </Badge>
          ))}
        </div>
      )}
    </div>
  );
}

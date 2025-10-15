import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Label } from "@/components/ui/label";

interface RecipeFiltersProps {
  difficulty: string;
  maxTime: string;
  onDifficultyChange: (value: string) => void;
  onMaxTimeChange: (value: string) => void;
}

export function RecipeFilters({
  difficulty,
  maxTime,
  onDifficultyChange,
  onMaxTimeChange
}: RecipeFiltersProps) {
  return (
    <div className="flex gap-4 flex-wrap">
      <div className="flex-1 min-w-[150px]">
        <Label className="text-sm mb-2 block">Difficulty</Label>
        <Select value={difficulty} onValueChange={onDifficultyChange}>
          <SelectTrigger>
            <SelectValue placeholder="Any difficulty" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All</SelectItem>
            <SelectItem value="easy">Easy</SelectItem>
            <SelectItem value="medium">Medium</SelectItem>
            <SelectItem value="hard">Hard</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div className="flex-1 min-w-[150px]">
        <Label className="text-sm mb-2 block">Max Time</Label>
        <Select value={maxTime} onValueChange={onMaxTimeChange}>
          <SelectTrigger>
            <SelectValue placeholder="Any time" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All</SelectItem>
            <SelectItem value="30">Under 30 min</SelectItem>
            <SelectItem value="45">Under 45 min</SelectItem>
            <SelectItem value="60">Under 1 hour</SelectItem>
          </SelectContent>
        </Select>
      </div>
    </div>
  );
}

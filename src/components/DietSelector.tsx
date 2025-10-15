import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";

const DIET_OPTIONS = [
  { id: "vegetarian", label: "Vegetarian" },
  { id: "vegan", label: "Vegan" },
  { id: "gluten-free", label: "Gluten-Free" },
  { id: "pescatarian", label: "Pescatarian" }
];

interface DietSelectorProps {
  selected: string[];
  onChange: (diets: string[]) => void;
}

export function DietSelector({ selected, onChange }: DietSelectorProps) {
  const handleToggle = (dietId: string) => {
    if (selected.includes(dietId)) {
      onChange(selected.filter(d => d !== dietId));
    } else {
      onChange([...selected, dietId]);
    }
  };

  return (
    <div className="space-y-3">
      <h3 className="text-sm font-medium">Dietary Preferences</h3>
      <div className="grid grid-cols-2 gap-3">
        {DIET_OPTIONS.map(diet => (
          <div key={diet.id} className="flex items-center space-x-2">
            <Checkbox
              id={diet.id}
              checked={selected.includes(diet.id)}
              onCheckedChange={() => handleToggle(diet.id)}
            />
            <Label
              htmlFor={diet.id}
              className="text-sm font-normal cursor-pointer"
            >
              {diet.label}
            </Label>
          </div>
        ))}
      </div>
    </div>
  );
}

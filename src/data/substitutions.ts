export const substitutions: Record<string, string[]> = {
  "yogurt": ["coconut yogurt", "soy yogurt"],
  "milk": ["almond milk", "oat milk", "soy milk"],
  "butter": ["coconut oil", "olive oil", "vegan butter"],
  "eggs": ["flax eggs", "chia eggs", "applesauce"],
  "cheese": ["nutritional yeast", "vegan cheese", "cashew cream"],
  "parmesan": ["nutritional yeast", "vegan parmesan"],
  "mozzarella": ["vegan mozzarella", "cashew cheese"],
  "feta": ["tofu feta", "almond feta"],
  "cream": ["coconut cream", "cashew cream", "oat cream"],
  "sour cream": ["coconut cream", "cashew sour cream"],
  "chicken": ["tofu", "tempeh", "seitan", "mushrooms"],
  "beef": ["lentils", "black beans", "mushrooms", "beyond meat"],
  "shrimp": ["hearts of palm", "king oyster mushrooms"],
  "fish": ["tofu", "tempeh"],
  "wheat flour": ["oat flour", "rice flour", "almond flour"],
  "pasta": ["rice noodles", "zucchini noodles", "chickpea pasta"],
  "bread": ["gluten-free bread", "lettuce wraps"],
  "soy sauce": ["tamari", "coconut aminos"],
  "paneer": ["tofu", "halloumi"],
  "honey": ["maple syrup", "agave nectar"]
};

export function getSubstitutions(ingredient: string, diet: string[]): string[] {
  const lowerIngredient = ingredient.toLowerCase();
  const subs = substitutions[lowerIngredient] || [];
  
  if (diet.includes("vegan") || diet.includes("vegetarian")) {
    return subs.filter(s => !s.includes("dairy") && !s.includes("egg"));
  }
  
  if (diet.includes("gluten-free")) {
    return subs.filter(s => !s.includes("wheat") && !s.includes("flour"));
  }
  
  return subs;
}

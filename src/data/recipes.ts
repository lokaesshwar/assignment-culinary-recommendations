import { Recipe } from "@/types/recipe";

export const recipes: Recipe[] = [
  {
    id: "r1",
    name: "Chickpea Spinach Curry",
    cuisine: "Indian",
    ingredients: ["chickpeas", "spinach", "onion", "tomato", "garlic", "garam masala", "coconut milk"],
    steps: [
      "Sauté diced onion and minced garlic in oil until golden",
      "Add chopped tomatoes and cook until soft",
      "Stir in garam masala and cook for 1 minute",
      "Add drained chickpeas and coconut milk",
      "Simmer for 15 minutes",
      "Fold in fresh spinach until wilted"
    ],
    nutrition: { calories: 420, protein: 18, carbs: 55, fat: 12 },
    tags: ["one-pot", "budget"],
    timeMinutes: 35,
    difficulty: "easy",
    diet: ["vegetarian", "gluten-free", "vegan"]
  },
  {
    id: "r2",
    name: "Classic Margherita Pizza",
    cuisine: "Italian",
    ingredients: ["pizza dough", "tomato sauce", "mozzarella", "basil", "olive oil"],
    steps: [
      "Preheat oven to 475°F (245°C)",
      "Roll out pizza dough on a floured surface",
      "Spread tomato sauce evenly",
      "Add torn mozzarella pieces",
      "Drizzle with olive oil",
      "Bake for 12-15 minutes until crust is golden",
      "Top with fresh basil leaves"
    ],
    nutrition: { calories: 680, protein: 28, carbs: 82, fat: 24 },
    tags: ["classic", "quick"],
    timeMinutes: 25,
    difficulty: "medium",
    diet: ["vegetarian"]
  },
  {
    id: "r3",
    name: "Pad Thai",
    cuisine: "Thai",
    ingredients: ["rice noodles", "shrimp", "eggs", "peanuts", "bean sprouts", "lime", "fish sauce", "tamarind"],
    steps: [
      "Soak rice noodles in warm water for 30 minutes",
      "Heat wok with oil and scramble eggs",
      "Add shrimp and cook until pink",
      "Add drained noodles, fish sauce, and tamarind paste",
      "Toss in bean sprouts and crushed peanuts",
      "Serve with lime wedges"
    ],
    nutrition: { calories: 520, protein: 32, carbs: 64, fat: 15 },
    tags: ["street-food", "seafood"],
    timeMinutes: 40,
    difficulty: "medium",
    diet: ["pescatarian", "gluten-free"]
  },
  {
    id: "r4",
    name: "Quinoa Buddha Bowl",
    cuisine: "Modern",
    ingredients: ["quinoa", "sweet potato", "kale", "avocado", "chickpeas", "tahini", "lemon"],
    steps: [
      "Cook quinoa according to package instructions",
      "Roast cubed sweet potato at 400°F for 25 minutes",
      "Massage kale with olive oil and lemon juice",
      "Arrange quinoa, sweet potato, kale, and chickpeas in bowl",
      "Top with sliced avocado",
      "Drizzle with tahini dressing"
    ],
    nutrition: { calories: 485, protein: 16, carbs: 62, fat: 20 },
    tags: ["healthy", "meal-prep"],
    timeMinutes: 45,
    difficulty: "easy",
    diet: ["vegetarian", "vegan", "gluten-free"]
  },
  {
    id: "r5",
    name: "Beef Tacos",
    cuisine: "Mexican",
    ingredients: ["ground beef", "taco seasoning", "tortillas", "lettuce", "tomato", "cheese", "sour cream"],
    steps: [
      "Brown ground beef in a skillet",
      "Add taco seasoning and water, simmer for 5 minutes",
      "Warm tortillas in a dry pan",
      "Chop lettuce and tomato",
      "Assemble tacos with beef, lettuce, tomato, cheese",
      "Top with sour cream"
    ],
    nutrition: { calories: 640, protein: 38, carbs: 45, fat: 32 },
    tags: ["quick", "family-friendly"],
    timeMinutes: 20,
    difficulty: "easy",
    diet: []
  },
  {
    id: "r6",
    name: "Mushroom Risotto",
    cuisine: "Italian",
    ingredients: ["arborio rice", "mushrooms", "onion", "white wine", "parmesan", "vegetable stock", "butter"],
    steps: [
      "Sauté sliced mushrooms in butter until golden, set aside",
      "In same pan, cook diced onion until soft",
      "Add arborio rice and toast for 2 minutes",
      "Add white wine and stir until absorbed",
      "Add stock one ladle at a time, stirring constantly",
      "Stir in mushrooms, butter, and parmesan",
      "Season and serve immediately"
    ],
    nutrition: { calories: 540, protein: 15, carbs: 72, fat: 18 },
    tags: ["comfort-food", "creamy"],
    timeMinutes: 50,
    difficulty: "hard",
    diet: ["vegetarian"]
  },
  {
    id: "r7",
    name: "Greek Salad",
    cuisine: "Greek",
    ingredients: ["cucumber", "tomato", "red onion", "olives", "feta cheese", "olive oil", "oregano"],
    steps: [
      "Chop cucumber and tomatoes into chunks",
      "Slice red onion thinly",
      "Combine vegetables and olives in a bowl",
      "Crumble feta cheese on top",
      "Drizzle with olive oil and sprinkle oregano",
      "Toss gently and serve"
    ],
    nutrition: { calories: 280, protein: 8, carbs: 12, fat: 22 },
    tags: ["fresh", "no-cook"],
    timeMinutes: 10,
    difficulty: "easy",
    diet: ["vegetarian", "gluten-free"]
  },
  {
    id: "r8",
    name: "Chicken Stir-Fry",
    cuisine: "Chinese",
    ingredients: ["chicken breast", "broccoli", "bell pepper", "soy sauce", "ginger", "garlic", "rice"],
    steps: [
      "Cut chicken into bite-sized pieces",
      "Heat wok with oil and cook chicken until done, set aside",
      "Stir-fry broccoli and bell peppers for 3 minutes",
      "Add minced ginger and garlic",
      "Return chicken to wok",
      "Add soy sauce and toss to coat",
      "Serve over steamed rice"
    ],
    nutrition: { calories: 480, protein: 42, carbs: 48, fat: 12 },
    tags: ["quick", "high-protein"],
    timeMinutes: 25,
    difficulty: "easy",
    diet: []
  },
  {
    id: "r9",
    name: "Lentil Soup",
    cuisine: "Mediterranean",
    ingredients: ["red lentils", "carrot", "celery", "onion", "garlic", "cumin", "vegetable stock", "lemon"],
    steps: [
      "Sauté diced onion, carrot, and celery until soft",
      "Add minced garlic and cumin, cook for 1 minute",
      "Add rinsed lentils and vegetable stock",
      "Bring to boil, then simmer for 25 minutes",
      "Blend half the soup for creamy texture",
      "Add lemon juice before serving"
    ],
    nutrition: { calories: 320, protein: 20, carbs: 52, fat: 4 },
    tags: ["healthy", "budget", "one-pot"],
    timeMinutes: 40,
    difficulty: "easy",
    diet: ["vegetarian", "vegan", "gluten-free"]
  },
  {
    id: "r10",
    name: "Salmon Teriyaki",
    cuisine: "Japanese",
    ingredients: ["salmon fillet", "soy sauce", "mirin", "sugar", "ginger", "sesame seeds", "rice"],
    steps: [
      "Mix soy sauce, mirin, sugar, and grated ginger for sauce",
      "Heat pan with oil and sear salmon skin-side down",
      "Flip and cook for 3 more minutes",
      "Pour teriyaki sauce over salmon",
      "Simmer until sauce thickens and glazes fish",
      "Sprinkle with sesame seeds and serve with rice"
    ],
    nutrition: { calories: 520, protein: 38, carbs: 42, fat: 20 },
    tags: ["quick", "seafood"],
    timeMinutes: 20,
    difficulty: "medium",
    diet: ["pescatarian"]
  },
  {
    id: "r11",
    name: "Veggie Burger",
    cuisine: "American",
    ingredients: ["black beans", "oats", "onion", "garlic", "cumin", "bun", "lettuce", "tomato"],
    steps: [
      "Mash black beans in a bowl",
      "Mix in oats, diced onion, garlic, and cumin",
      "Form into patties and refrigerate for 30 minutes",
      "Pan-fry patties for 4 minutes each side",
      "Toast buns lightly",
      "Assemble burger with lettuce and tomato"
    ],
    nutrition: { calories: 380, protein: 16, carbs: 58, fat: 8 },
    tags: ["budget", "family-friendly"],
    timeMinutes: 50,
    difficulty: "medium",
    diet: ["vegetarian", "vegan"]
  },
  {
    id: "r12",
    name: "Pesto Pasta",
    cuisine: "Italian",
    ingredients: ["pasta", "basil", "pine nuts", "parmesan", "garlic", "olive oil", "cherry tomatoes"],
    steps: [
      "Cook pasta according to package instructions",
      "Blend basil, pine nuts, parmesan, garlic, and olive oil for pesto",
      "Halve cherry tomatoes and sauté briefly",
      "Drain pasta and toss with pesto",
      "Add cherry tomatoes",
      "Serve with extra parmesan"
    ],
    nutrition: { calories: 580, protein: 18, carbs: 64, fat: 28 },
    tags: ["quick", "classic"],
    timeMinutes: 20,
    difficulty: "easy",
    diet: ["vegetarian"]
  },
  {
    id: "r13",
    name: "Tom Yum Soup",
    cuisine: "Thai",
    ingredients: ["shrimp", "mushrooms", "lemongrass", "galangal", "lime leaves", "chili", "fish sauce", "lime"],
    steps: [
      "Bring water to boil with lemongrass, galangal, and lime leaves",
      "Add sliced mushrooms and simmer for 5 minutes",
      "Add shrimp and cook until pink",
      "Season with fish sauce and chili paste",
      "Remove from heat and add fresh lime juice",
      "Garnish with cilantro"
    ],
    nutrition: { calories: 180, protein: 24, carbs: 12, fat: 3 },
    tags: ["spicy", "light"],
    timeMinutes: 25,
    difficulty: "medium",
    diet: ["pescatarian", "gluten-free"]
  },
  {
    id: "r14",
    name: "Falafel Wrap",
    cuisine: "Middle Eastern",
    ingredients: ["chickpeas", "onion", "garlic", "cumin", "coriander", "pita bread", "tahini", "cucumber"],
    steps: [
      "Blend chickpeas, onion, garlic, cumin, and coriander",
      "Form into small balls and refrigerate for 20 minutes",
      "Deep fry or bake at 375°F for 20 minutes",
      "Warm pita bread",
      "Make tahini sauce with lemon juice",
      "Assemble wrap with falafel, cucumber, and sauce"
    ],
    nutrition: { calories: 440, protein: 16, carbs: 62, fat: 14 },
    tags: ["street-food", "budget"],
    timeMinutes: 45,
    difficulty: "medium",
    diet: ["vegetarian", "vegan"]
  },
  {
    id: "r15",
    name: "Caprese Salad",
    cuisine: "Italian",
    ingredients: ["tomato", "mozzarella", "basil", "olive oil", "balsamic vinegar"],
    steps: [
      "Slice tomatoes and mozzarella into rounds",
      "Arrange alternating slices on a plate",
      "Tuck fresh basil leaves between slices",
      "Drizzle with olive oil and balsamic vinegar",
      "Season with salt and pepper",
      "Serve immediately"
    ],
    nutrition: { calories: 320, protein: 18, carbs: 8, fat: 24 },
    tags: ["no-cook", "fresh"],
    timeMinutes: 10,
    difficulty: "easy",
    diet: ["vegetarian", "gluten-free"]
  },
  {
    id: "r16",
    name: "Korean Bibimbap",
    cuisine: "Korean",
    ingredients: ["rice", "beef", "spinach", "carrot", "egg", "gochujang", "sesame oil", "kimchi"],
    steps: [
      "Cook rice and keep warm",
      "Marinate beef in soy sauce and sesame oil, then cook",
      "Blanch spinach and sauté julienned carrots separately",
      "Fry an egg sunny-side up",
      "Arrange rice in bowl with vegetables and beef in sections",
      "Top with egg and serve with gochujang sauce"
    ],
    nutrition: { calories: 620, protein: 32, carbs: 72, fat: 20 },
    tags: ["colorful", "balanced"],
    timeMinutes: 40,
    difficulty: "medium",
    diet: []
  },
  {
    id: "r17",
    name: "Butternut Squash Soup",
    cuisine: "American",
    ingredients: ["butternut squash", "onion", "garlic", "vegetable stock", "cream", "nutmeg", "sage"],
    steps: [
      "Peel and cube butternut squash",
      "Sauté onion and garlic until soft",
      "Add squash and stock, bring to boil",
      "Simmer for 25 minutes until squash is tender",
      "Blend until smooth",
      "Stir in cream and nutmeg, garnish with sage"
    ],
    nutrition: { calories: 280, protein: 6, carbs: 42, fat: 12 },
    tags: ["comfort-food", "creamy"],
    timeMinutes: 45,
    difficulty: "easy",
    diet: ["vegetarian", "gluten-free"]
  },
  {
    id: "r18",
    name: "Chicken Shawarma",
    cuisine: "Middle Eastern",
    ingredients: ["chicken thigh", "yogurt", "cumin", "paprika", "garlic", "pita bread", "tahini", "pickles"],
    steps: [
      "Marinate chicken in yogurt, cumin, paprika, and garlic for 2 hours",
      "Grill or pan-fry chicken until cooked through",
      "Slice chicken thinly",
      "Warm pita bread",
      "Make tahini sauce",
      "Assemble with chicken, pickles, and sauce in pita"
    ],
    nutrition: { calories: 520, protein: 42, carbs: 38, fat: 20 },
    tags: ["street-food", "high-protein"],
    timeMinutes: 150,
    difficulty: "medium",
    diet: []
  },
  {
    id: "r19",
    name: "Vegetable Paella",
    cuisine: "Spanish",
    ingredients: ["rice", "bell pepper", "peas", "artichoke", "tomato", "saffron", "vegetable stock", "lemon"],
    steps: [
      "Heat oil in paella pan and sauté bell peppers",
      "Add rice and toast for 2 minutes",
      "Add saffron-infused stock and stir once",
      "Arrange artichokes, peas, and tomatoes on top",
      "Cook uncovered for 20 minutes without stirring",
      "Let rest for 5 minutes, serve with lemon wedges"
    ],
    nutrition: { calories: 380, protein: 10, carbs: 68, fat: 8 },
    tags: ["colorful", "one-pot"],
    timeMinutes: 50,
    difficulty: "hard",
    diet: ["vegetarian", "vegan", "gluten-free"]
  },
  {
    id: "r20",
    name: "Chocolate Avocado Mousse",
    cuisine: "Modern",
    ingredients: ["avocado", "cocoa powder", "maple syrup", "vanilla extract", "almond milk"],
    steps: [
      "Blend ripe avocados until smooth",
      "Add cocoa powder, maple syrup, and vanilla",
      "Add almond milk for desired consistency",
      "Blend until creamy and smooth",
      "Refrigerate for at least 1 hour",
      "Serve chilled with berries"
    ],
    nutrition: { calories: 240, protein: 4, carbs: 28, fat: 14 },
    tags: ["dessert", "healthy", "no-cook"],
    timeMinutes: 70,
    difficulty: "easy",
    diet: ["vegetarian", "vegan", "gluten-free"]
  },
  {
    id: "r21",
    name: "Shrimp Scampi",
    cuisine: "Italian",
    ingredients: ["shrimp", "linguine", "garlic", "white wine", "butter", "lemon", "parsley"],
    steps: [
      "Cook linguine according to package instructions",
      "Sauté minced garlic in butter until fragrant",
      "Add shrimp and cook until pink",
      "Add white wine and lemon juice, simmer",
      "Toss pasta with shrimp and sauce",
      "Garnish with fresh parsley"
    ],
    nutrition: { calories: 560, protein: 36, carbs: 58, fat: 18 },
    tags: ["quick", "seafood", "elegant"],
    timeMinutes: 25,
    difficulty: "medium",
    diet: ["pescatarian"]
  }
];

🍳 Smart Recipe Generator

Live Demo: https://assignment-culinary-recommendations.netlify.app/


📖 Overview

Smart Recipe Generator is a modern web application that helps users discover delicious recipes based on the ingredients they already have at home. It combines ingredient-based search, dietary filters, and AI-driven personalization to recommend healthy and relevant meal options.

This project was developed as part of the “Smart Recipe Generator” assignment, focusing on building a practical, user-friendly, and intelligent recipe suggestion engine.

The app delivers a seamless, visually appealing, and responsive user experience — deployable on any modern browser and mobile device.

🌟 Key Features (Assignment Requirements)
Feature	Description	Status
🥗 Ingredient Input	Users can enter or select available ingredients to get recipe suggestions.	✅ Implemented
⚙️ Dietary Preferences	Supports filters like Vegetarian, Vegan, and Gluten-Free to refine results.	✅ Implemented
🧠 Smart Recommendations	Suggests recipes based on match score between user inputs and recipe data.	✅ Implemented
🍴 Recipe Details	Displays ingredients, steps, and basic nutritional info for each recipe.	✅ Implemented
📱 Responsive Design	Built with Tailwind CSS for fully mobile-friendly UX.	✅ Implemented
🧾 Data Source	Uses a structured JSON dataset with ≥ 20 recipes (modifiable & extendable).	✅ Implemented
🧑‍🍳 Substitute Ingredients	Suggests alternatives if an ingredient is missing.	⚙️ Planned
🧩 Image-based Ingredient Recognition	Placeholder for future ML integration (TensorFlow.js or Vision API).	⚙️ Planned
💡 Motivation

People often waste time searching for recipes that match what’s available in their kitchen. Smart Recipe Generator eliminates that friction — users simply enter what they have, and the app instantly returns suitable recipes filtered by diet and preference.

This project demonstrates the power of AI-aided recommendation logic combined with clean, intuitive UI/UX principles — making it both academically valuable and industry-relevant.

🧰 Tech Stack
Category	Technology
Frontend Framework	React + TypeScript + Vite
Styling	Tailwind CSS
UI Components	shadcn/ui + Lucide Icons
State Management	React Hooks (useState, useEffect)
Routing	React Router DOM
Deployment	Netlify
Version Control	Git + GitHub
🧑‍💻 How to Run Locally
# 1️⃣ Clone the repository
git clone https://github.com/lokaesshwar/assignment-culinary-recommendations.git
cd assignment-culinary-recommendations

# 2️⃣ Install dependencies
npm install
# or
yarn install

# 3️⃣ Start the development server
npm run dev
# or
yarn dev

# 4️⃣ Build for production
npm run build


Then open http://localhost:5173
 (default Vite port) in your browser.

🗂️ Project Structure
assignment-culinary-recommendations/
├── src/
│   ├── components/          # Reusable UI components (Buttons, Cards, Selectors)
│   ├── pages/               # Main screens (Home, Results)
│   ├── data/                # Recipe dataset (JSON)
│   ├── assets/              # Icons & images
│   ├── App.tsx              # Root component
│   └── main.tsx             # Entry file
├── public/                  # Static assets
├── package.json
├── tailwind.config.ts
└── README.md

🧮 Approach (Summary – ~200 Words)

The Smart Recipe Generator applies a content-based filtering approach to match recipes to user inputs. Each recipe contains metadata such as ingredients, dietary category, preparation steps, and nutritional info. When the user enters ingredients, the system computes a similarity score for each recipe based on overlapping ingredients and dietary compatibility.

The top-scoring recipes are displayed as recommendations. If certain ingredients are missing, the app highlights substitute suggestions or alternative recipes.

For dietary filtering, each recipe is tagged as vegetarian, vegan, gluten-free, etc., allowing the algorithm to remove irrelevant options efficiently. The app is designed with scalable front-end architecture using React + TypeScript, ensuring type safety, modularity, and easy integration of future ML or API modules (e.g., TensorFlow.js for image recognition or a Nutrition API).

This design prioritizes user experience — minimal input, fast response, responsive layout, and elegant visuals — aligning with real-world usability standards and modern development practices.

📊 Dataset Details

Number of Recipes: 20+

Data Source: Custom JSON file (src/data/recipes.json)

Attributes per Recipe:

id

title

ingredients

instructions

dietType

nutrition (optional)

Easily extendable by adding more entries in JSON or connecting to an external recipe API.

📸 Screenshots
Home Page	Recipe Results	Detailed View

	
	

(Replace placeholders with actual screenshots from your app UI.)

✅ Evaluation Checklist
Criteria	Status
Ingredient input working	✅
Dietary preference filter functioning	✅
Responsive design across devices	✅
Minimum 20 recipes included	✅
Proper error handling for invalid inputs	✅
Optional nutritional details displayed	✅
Clean, well-commented code	✅
Hosted live demo accessible	✅
Planned ML integration (future work)	⚙️
🚀 Future Enhancements

🔍 Integrate image-based ingredient detection using TensorFlow.js.

🧾 Connect to external nutrition APIs for live calorie & macronutrient info.

🤖 Improve recommendation logic using AI-driven personalization.

💬 Add multilingual support for broader accessibility.

🧡 Enable user accounts to save and rate favorite recipes.

💬 Reflections & Learning

This project strengthened my skills in:

Front-end architecture (React + TypeScript)

UX/UI design with Tailwind CSS

Data-driven decision logic

API & component integration

Version control and Netlify deployment

It also encouraged me to think beyond coding — focusing on usability, scalability, and adaptability, all of which are crucial for real-world software engineering.

🧑‍🎓 Author

👨‍💻 Lokaesshwar Sudhagar
Front-End Developer | React | TypeScript | Java | Python

🌐 Portfolio
 (add link if you have one)
💼 LinkedIn
 (add your LinkedIn link)
📧 Email: your.email@example.com

🪪 License

This project is released under the MIT License
.

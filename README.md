# 🍳 Smart Recipe Generator

**Live Demo:** [https://assignment-culinary-recommendations.netlify.app/](https://assignment-culinary-recommendations.netlify.app/)


![assignment-culinary-recommendations - Google Chrome 2025-10-16 01-09-08](https://github.com/user-attachments/assets/9fcf4340-c2b7-4e50-9824-b971ee559bda)

---

## 📖 Overview

**Smart Recipe Generator** is a responsive web application that recommends recipes based on the ingredients users have.  
The app allows users to input ingredients, select dietary preferences, and instantly receive curated recipe suggestions that best match their inputs.

This project was developed as part of the *Smart Recipe Generator Assignment* given by **Unthinkable Solutions**, focusing on practical implementation of user-centric recommendation logic, clean UI design, and scalable front-end development.

---

## 🌟 Key Features

- 🥗 **Ingredient-Based Recommendations:** Suggests recipes based on entered ingredients.  
- ⚙️ **Dietary Filters:** Supports Vegetarian, Vegan, and Gluten-Free preferences.  
- 🍴 **Recipe Details:** Displays required ingredients, preparation steps, and nutritional details.  
- 🧠 **Smart Matching Logic:** Calculates best matches using ingredient overlap.  
- 📱 **Responsive UI:** Optimized for all devices using Tailwind CSS.  
- ☁️ **Deployed on Netlify:** Easily accessible online without installation.  

---

## 🧰 Tech Stack

- **Framework:** React + TypeScript + Vite  
- **Styling:** Tailwind CSS  
- **UI Components:** shadcn/ui & Lucide Icons  
- **State Management:** React Hooks  
- **Routing:** React Router DOM  
- **Hosting:** Netlify  
- **Version Control:** Git & GitHub  

---

## 🧑‍💻 How to Run Locally

```bash
# 1. Clone the repository
git clone https://github.com/lokaesshwar/assignment-culinary-recommendations.git
cd assignment-culinary-recommendations

# 2. Install dependencies
npm install

# 3. Start the development server
npm run dev

# 4. Build for production
npm run build
```

Then open **http://localhost:5173** in your browser.

---

## 🗂️ Project Structure

```
assignment-culinary-recommendations/
├── src/
│   ├── components/      # Reusable UI components
│   ├── pages/           # App pages (Home, Results)
│   ├── data/            # Recipe dataset (JSON)
│   ├── assets/          # Icons & images
│   ├── App.tsx          # Root component
│   └── main.tsx         # Entry point
├── public/
├── package.json
├── tailwind.config.ts
└── README.md
```

---

## 🧮 Approach (Summary)

The **Smart Recipe Generator** uses a **content-based filtering** method to recommend recipes.  
When users enter ingredients and select dietary preferences, the app compares those inputs against the recipe dataset and calculates a match score. Recipes with the highest overlap are displayed as suggestions.

Each recipe entry includes ingredients, instructions, diet type, and optional nutritional values.  
The app’s front end is built with **React + TypeScript**, ensuring modularity, type safety, and future scalability. **Tailwind CSS** provides a responsive and modern layout, while **Netlify deployment** ensures easy access and fast performance.

If certain ingredients are missing, the app highlights substitute suggestions or alternate recipes.  
For dietary filtering, each recipe is tagged (e.g., Vegetarian, Vegan, Gluten-Free), allowing efficient filtering.  
This design emphasizes **simplicity, usability, and performance**, aligning with real-world development standards.

---

## 📊 Dataset

- **Recipes:** 20+ curated recipes  
- **Data Format:** Local JSON file (`/src/data/recipes.json`)  

- **Attributes per Recipe:**  
  - Name  
  - Ingredients  
  - Instructions  
  - Diet Type  
  - Optional Nutritional Data  

---

## 🚀 Future Enhancements

- 🧾 Integration of **image-based ingredient recognition** using TensorFlow.js or a Vision API.  
- 🔍 Addition of **nutrition API** for live calorie calculation.  
- 🤖 Improved recommendation ranking using **AI/ML models**.  
- 💾 Option to **save favorite recipes** for registered users.  

---


## 🪪 License

This project is licensed under the **MIT License**.

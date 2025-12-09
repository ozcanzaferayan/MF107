import { useEffect, useState } from "react";

const API_URL = "https://www.themealdb.com/api/json/v1/1/search.php?s=";

// 1. Type oluştur
type Meal = {
  idMeal: string;
  strMeal: string;
  strMealThumb: string;
};

const App = () => {
  // 2. usss oluştur
  const [meals, setMeals] = useState<Meal[]>([]);

  // 3. uffs oluştur
  useEffect(() => {
    fetch(API_URL)
      .then((res) => res.json())
      .then((json) => setMeals(json.meals));
  }, []);

  // 4. map kullan
  return (
    <div>
      {meals.map((meal) => (
        <div>
          <img src={meal.strMealThumb} className="w-24 h-24" />
          <span>{meal.strMeal}</span>
        </div>
      ))}
    </div>
  );
};

export default App;

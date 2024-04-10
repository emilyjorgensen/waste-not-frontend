import { useState, useEffect } from "react";

export function RecipesIndex() {
  const [popular, setPopular] = useState([]);

  useEffect(() => {
    getPopular();
  }, []);

  const getPopular = async () => {
    const api = await fetch(
      `https://api.spoonacular.com/recipes/random?apiKey=${import.meta.env.VITE_APP_API_KEY}&number=9`
    );
    const data = await api.json();
    console.log(data.recipes);
    setPopular(data.recipes);
  };

  return (
    <div className="container">
      <h1>Popular Recipes</h1>
      <div className="row row-cols-1 row-cols-md-3 g-4">
        {popular.map((recipe) => {
          return (
            <div key={recipe.id} className="col">
              <div className="card">
                <div className="card-body">
                  <img src={recipe.image} className="card-img-top" alt="recipe image" />
                </div>
                <h5 className="card-title text-center">{recipe.title}</h5>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

export function RecipesIndex() {
  const [popular, setPopular] = useState([]);

  // import from RecipesSearch.jsx
  const [input, setInput] = useState("");
  const navigate = useNavigate();

  const submitHandler = (e) => {
    e.preventDefault();
    navigate(`/searched/${input}`);
  };
  // end import

  useEffect(() => {
    getPopular();
  }, []);

  const getPopular = async () => {
    const check = localStorage.getItem("popular");

    if (check) {
      setPopular(JSON.parse(check));
    } else {
      const api = await fetch(
        `https://api.spoonacular.com/recipes/random?apiKey=${import.meta.env.VITE_APP_API_KEY}&number=9`
      );
      const data = await api.json();
      localStorage.setItem("popular", JSON.stringify(data.recipes));
      console.log(data.recipes);
      setPopular(data.recipes);
    }
  };

  return (
    <div className="container">
      {/* imported from RecipesSearch.jsx */}
      <div>
        <h1 className="display-1">Find a Recipe</h1>
        <form action="search" className="d-flex pb-5">
          <input
            className="form-control me-2"
            type="text"
            placeholder="ingredient or keyword"
            aria-label="Search"
            onChange={(e) => setInput(e.target.value)}
            value={input}
          />
          <button onClick={submitHandler} className="btn btn-outline-success" type="submit">
            Search
          </button>
        </form>
      </div>
      {/* end import */}
      <h1>Popular Recipes</h1>
      <div className="row row-cols-1 row-cols-md-3 g-4">
        {popular.map((recipe) => {
          return (
            <div key={recipe.id} className="col">
              <div className="card">
                <div className="card-body">
                  <img src={recipe.image} className="card-img-top" alt={recipe.title} />
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

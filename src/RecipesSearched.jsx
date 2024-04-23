import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

export function RecipesSearched() {
  const [searchedRecipes, setSearchedRecipes] = useState([]);
  let params = useParams();

  const getSearched = async (name) => {
    const data = await fetch(
      `https://api.spoonacular.com/recipes/complexSearch?apiKey=${import.meta.env.VITE_APP_API_KEY}&query=${name}`
    );
    const recipes = await data.json();
    setSearchedRecipes(recipes.results);
  };

  useEffect(() => {
    getSearched(params.search);
  }, [params.search]);

  return (
    <div className="container">
      <h1>Results:</h1>
      <div className="row row-cols-1 row-cols-md-3 g-4">
        {searchedRecipes.map((item) => {
          return (
            <div key={item.id} className="col">
              <div className="card">
                <div className="card-body">
                  <Link to={`/recipe/${item.id}`}>
                    <img src={item.image} alt={item.title} className="card-img-top" />
                  </Link>
                </div>
                <h5 className="card-title text-center">{item.title}</h5>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

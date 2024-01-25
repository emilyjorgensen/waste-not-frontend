/* eslint-disable react/prop-types */
import { useState } from "react";

export function IngredientsIndex(props) {
  const [searchFilter, setSearchFilter] = useState("");

  return (
    <div className="container">
      <h1 className="display-1">All Ingredients</h1>
      <form action="search" className="d-flex pb-5">
        <input
          className="form-control me-2"
          type="search"
          placeholder="Search"
          aria-label="Search"
          value={searchFilter}
          onChange={(event) => setSearchFilter(event.target.value)}
          list="names"
        />
        <datalist id="names">
          {props.ingredients.map((ingredient) => (
            <option key={ingredient.id} value={ingredient.name} />
          ))}
        </datalist>
        <button className="btn btn-outline-success" type="submit">
          Search
        </button>
      </form>
      <div className="row row-cols-1 row-cols-md-3 g-4">
        {props.ingredients
          .filter((ingredient) => ingredient.name.toLowerCase().includes(searchFilter.toLowerCase()))
          .map((ingredient) => (
            <div key={ingredient.id} className="col">
              <div className="card">
                <div className="card-body">
                  <img
                    src={ingredient.image_url}
                    className="card-img-top"
                    alt="ingredient image"
                    onClick={() => props.onShowIngredient(ingredient)}
                  />
                </div>
                <h5 className="card-title text-center">{ingredient.name}</h5>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
}

/* eslint-disable react/prop-types */
import { useState } from "react";

export function IngredientsIndex(props) {
  const [searchFilter, setSearchFilter] = useState("");

  return (
    <div className="container">
      <h1 className="display-1">All Ingredients</h1>
      <form action="search" className="d-flex">
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
                <img src={ingredient.image_url} className="card-img-top" alt="ingredient image" />
              </div>
              <div className="card-body">
                <h3 className="card-title">{ingredient.name}</h3>
                <button
                  type="button"
                  className="btn btn-secondary"
                  data-bs-toggle="modal"
                  data-bs-target="#staticBackdrop"
                  onClick={() => props.onShowIngredient(ingredient)}
                >
                  Add to Pantry!
                </button>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
}

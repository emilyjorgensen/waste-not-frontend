/* eslint-disable react/prop-types */
import { useState } from "react";

export function IngredientsIndex(props) {
  const [searchFilter, setSearchFilter] = useState("");

  return (
    <div>
      <form action="search">
        <input
          type="search"
          placeholder="Search"
          value={searchFilter}
          onChange={(event) => setSearchFilter(event.target.value)}
          list="names"
        />
        <datalist id="names">
          {props.ingredients.map((ingredient) => (
            <option key={ingredient.id} value={ingredient.name} />
          ))}
        </datalist>
        <button type="submit">Search</button>
      </form>
      <h1>All ingredients</h1>
      {props.ingredients
        .filter((ingredient) => ingredient.name.toLowerCase().includes(searchFilter.toLowerCase()))
        .map((ingredient) => (
          <div key={ingredient.id}>
            <img src={ingredient.image_url} alt="ingredient image" width="300px" />
            <h3>{ingredient.name}</h3>
            <button onClick={() => props.onShowIngredient(ingredient)}>Add to Pantry!</button>
          </div>
        ))}
    </div>
  );
}

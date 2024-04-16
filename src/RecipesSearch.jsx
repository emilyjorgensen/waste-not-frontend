import { useState } from "react";

export function RecipesSearch() {
  return (
    <div className="container">
      <h1 className="display-1">Find a Recipe</h1>
      <form action="search" className="d-flex pb-5">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
        <button className="btn btn-outline-success" type="submit">
          Search
        </button>
      </form>
    </div>
  );
}

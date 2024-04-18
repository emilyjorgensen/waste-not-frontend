import React from "react";
import { RecipesIndex } from "./RecipesIndex";
import { RecipesSearch } from "./RecipesSearch";
import { RecipesSearched } from "./RecipesSearched";

export function Recipes() {
  return (
    <main>
      <RecipesSearch />
      <RecipesSearched />
      <RecipesIndex />
    </main>
  );
}

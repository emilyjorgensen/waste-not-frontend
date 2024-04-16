import React from "react";
import { RecipesIndex } from "./RecipesIndex";
import { RecipesSearch } from "./RecipesSearch";

export function Recipes() {
  return (
    <main>
      <RecipesSearch />
      <RecipesIndex />
    </main>
  );
}

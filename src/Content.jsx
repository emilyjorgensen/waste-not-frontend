import axios from "axios";
import { useState, useEffect } from "react";
import { Signup } from "./Signup";
import { Login } from "./Login";
import { LogoutLink } from "./LogoutLink";
import { IngredientsIndex } from "./IngredientsIndex";
import { PantryIndex } from "./PantryIndex";
import { PantryNew } from "./PantryNew";

export function Content() {
  const [ingredients, setIngredients] = useState([]);
  const [pantry_items, setPantryItems] = useState([]);

  const handleIndexIngredients = () => {
    console.log("handleIndexIngredients");
    axios.get("http://localhost:3000/ingredients.json").then((response) => {
      console.log(response.data);
      setIngredients(response.data);
    });
  };

  const handleIndexPantry = () => {
    console.log("handleIndexPantry");
    axios.get("http://localhost:3000/pantry_items.json").then((response) => {
      console.log(response.data);
      setPantryItems(response.data);
    });
  };

  const handleCreatePantry = (params, successCallback) => {
    console.log("handleCreatePantry", params);
    axios.post("http://localhost:3000/pantry_items.json", params).then((response) => {
      setPantryItems([...pantry_items, response.data]);
      successCallback();
    });
  };

  useEffect(handleIndexIngredients, []);
  useEffect(handleIndexPantry, []);

  return (
    <main>
      <h1>Welcome to Waste Not: Kitchen!</h1>
      <Login />
      <LogoutLink />
      <Signup />
      <PantryNew onCreatePantry={handleCreatePantry} />
      <IngredientsIndex ingredients={ingredients} />
      <PantryIndex pantry_items={pantry_items} />
    </main>
  );
}

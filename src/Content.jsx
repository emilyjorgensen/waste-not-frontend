import axios from "axios";
import { useState, useEffect } from "react";
import { Signup } from "./Signup";
import { Login } from "./Login";
import { LogoutLink } from "./LogoutLink";
import { IngredientsIndex } from "./IngredientsIndex";
import { PantryIndex } from "./PantryIndex";

export function Content() {
  const [ingredients, setIngredients] = useState([]);

  const handleIndexIngredients = () => {
    console.log("handleIndexIngredients");
    axios.get("http://localhost:3000/ingredients.json").then((response) => {
      console.log(response.data);
      setIngredients(response.data);
    });
  };

  // const pantry_items = [
  //   { id: 1, user_id: 1, ingredient_id: 1, amount: "1 dozen", category: "refrigerator", use_by_date: "Jan 14 2024" },
  //   { id: 2, user_id: 1, ingredient_id: 3, amount: "1 package", category: "pantry", use_by_date: "Jan 14 2024" },
  //   {
  //     id: 3,
  //     user_id: 1,
  //     ingredient_id: 5,
  //     amount: "4 8-oz cuts",
  //     category: "refrigerator",
  //     use_by_date: "Jan 14 2024",
  //   },
  // ];

  const [pantry_items, setPantryItems] = useState([]);

  const handleIndexPantry = () => {
    console.log("handleIndexPantry");
    axios.get("http://localhost:3000/pantry_items.json").then((response) => {
      console.log(response.data);
      setPantryItems(response.data);
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
      <IngredientsIndex ingredients={ingredients} />
      <PantryIndex pantry_items={pantry_items} />
    </main>
  );
}

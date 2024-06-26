import axios from "axios";
import { useState, useEffect } from "react";
import { Signup } from "./Signup";
import { Login } from "./Login";
import { LogoutLink } from "./LogoutLink";
import { Home } from "./Home";
import { IngredientsIndex } from "./IngredientsIndex";
import { PantryIndex } from "./PantryIndex";
import { IngredientsShow } from "./IngredientsShow";
import { PantryShow } from "./PantryShow";
import { RecipesIndex } from "./RecipesIndex";
import { Modal } from "./Modal";
import { Routes, Route } from "react-router-dom";
import { RecipesSearched } from "./RecipesSearched";
import { Recipe } from "./Recipe";

export function Content() {
  const [ingredients, setIngredients] = useState([]);
  const [pantry_items, setPantryItems] = useState([]);
  const [isIngredientShowVisible, setIsIngredientShowVisible] = useState(false);
  const [currentIngredient, setCurrentIngredient] = useState({});
  const [isPantryShowVisible, setIsPantryShowVisible] = useState(false);
  const [currentPantryItem, setCurrentPantryItem] = useState({});

  const handleIndexIngredients = () => {
    axios.get("http://localhost:3000/ingredients.json").then((response) => {
      console.log(response.data);
      setIngredients(response.data);
    });
  };

  const handleIndexPantry = () => {
    axios.get("http://localhost:3000/pantry_items.json").then((response) => {
      let data = response.data;
      data.sort((a, b) => a.use_by_date.localeCompare(b.use_by_date));
      setPantryItems(data);
    });
  };

  const handleCreatePantry = (params, successCallback) => {
    axios.post("http://localhost:3000/pantry_items.json", params).then((response) => {
      setPantryItems([...pantry_items, response.data]);
      successCallback();
    });
  };

  const handleShowIngredient = (ingredient) => {
    setIsIngredientShowVisible(true);
    setCurrentIngredient(ingredient);
  };

  const handleShowPantry = (pantry_item) => {
    setIsPantryShowVisible(true);
    setCurrentPantryItem(pantry_item);
  };

  const handleUpdatePantry = (id, params, successCallback) => {
    axios.patch(`http://localhost:3000/pantry_items/${id}.json`, params).then((response) => {
      setPantryItems(
        pantry_items.map((pantry_item) => {
          if (pantry_item.id === response.data.id) {
            return response.data;
          } else {
            return pantry_item;
          }
        })
      );
      successCallback();
      handleClose();
    });
  };

  const handleDestroyPantryItem = (pantry_item) => {
    axios.delete(`http://localhost:3000/pantry_items/${pantry_item.id}.json`).then((response) => {
      setPantryItems(pantry_items.filter((p) => p.id !== pantry_item.id));
      handleClose();
    });
  };

  const handleClose = () => {
    setIsPantryShowVisible(false);
    setIsIngredientShowVisible(false);
  };

  useEffect(handleIndexIngredients, []);
  useEffect(handleIndexPantry, []);

  return (
    <div className="container">
      <main>
        <Routes>
          <Route index element={<Home />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route path="/logout" element={<LogoutLink />} />
          <Route
            path="/ingredients"
            element={<IngredientsIndex ingredients={ingredients} onShowIngredient={handleShowIngredient} />}
          />
          <Route path="/pantry" element={<PantryIndex pantry_items={pantry_items} onShowPantry={handleShowPantry} />} />
          <Route path="/recipes" element={<RecipesIndex />} />
          <Route path="/searched/:search" element={<RecipesSearched />} />
          <Route path="/recipe/:name" element={<Recipe />} />
        </Routes>

        <Modal show={isPantryShowVisible} onClose={handleClose}>
          <PantryShow
            pantry_item={currentPantryItem}
            onUpdatePantry={handleUpdatePantry}
            onDestroyPantryItem={handleDestroyPantryItem}
            onClose={handleClose}
          />
        </Modal>
        <Modal show={isIngredientShowVisible} onClose={handleClose}>
          <IngredientsShow ingredient={currentIngredient} onCreatePantry={handleCreatePantry} />
        </Modal>
      </main>
    </div>
  );
}

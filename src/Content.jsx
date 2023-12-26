import axios from "axios";
import { useState, useEffect } from "react";
import { Signup } from "./Signup";
import { Login } from "./Login";
import { LogoutLink } from "./LogoutLink";
import { IngredientsIndex } from "./IngredientsIndex";
import { PantryIndex } from "./PantryIndex";
import { PantryNew } from "./PantryNew";
import { IngredientsShow } from "./IngredientsShow";
import { PantryShow } from "./PantryShow";
import { Modal } from "./Modal";

export function Content() {
  const [ingredients, setIngredients] = useState([]);
  const [pantry_items, setPantryItems] = useState([]);
  const [isIngredientShowVisible, setIsIngredientShowVisible] = useState(false);
  const [currentIngredient, setCurrentIngredient] = useState({});
  const [isPantryShowVisible, setIsPantryShowVisible] = useState(false);
  const [currentPantryItem, setCurrentPantryItem] = useState({});

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

  const handleShowIngredient = (ingredient) => {
    console.log("handleShowIngredient", ingredient);
    setIsIngredientShowVisible(true);
    setCurrentIngredient(ingredient);
  };

  const handleShowPantry = (pantry_item) => {
    console.log("handleShowPantry", pantry_item);
    setIsPantryShowVisible(true);
    setCurrentPantryItem(pantry_item);
  };

  const handleUpdatePantry = (id, params, successCallback) => {
    console.log("handleUpdatePantry", params);
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
    console.log("handleDestroyPantryItem", pantry_item);
    axios.delete(`http://localhost:3000/pantry_items/${pantry_item.id}.json`).then((response) => {
      setPantryItems(pantry_items.filter((p) => p.id !== pantry_item.id));
      handleClose();
    });
  };

  const handleClose = () => {
    console.log("handleClose");
    setIsPantryShowVisible(false);
    setIsIngredientShowVisible(false);
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
      <IngredientsIndex ingredients={ingredients} onShowIngredient={handleShowIngredient} />
      <PantryIndex pantry_items={pantry_items} onShowPantry={handleShowPantry} />
      <Modal show={isPantryShowVisible} onClose={handleClose}>
        <PantryShow
          pantry_item={currentPantryItem}
          onUpdatePantry={handleUpdatePantry}
          onDestroyPantryItem={handleDestroyPantryItem}
        />
      </Modal>
      <Modal show={isIngredientShowVisible} onClose={handleClose}>
        <IngredientsShow ingredient={currentIngredient} />
      </Modal>
    </main>
  );
}

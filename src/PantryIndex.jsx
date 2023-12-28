/* eslint-disable react/prop-types */
import { useState } from "react";

export function PantryIndex(props) {
  const [filteredPantry, setFilteredPantry] = useState(props.pantry_items);

  const handleFilterPantry = (category) => {
    const query = props.pantry_items.filter((pantry_item) => pantry_item.category === category);
    console.log(query);

    if (!query) {
      setFilteredPantry(props.pantry_items);
      return;
    }

    setFilteredPantry(query);
  };

  // const filterByCategory = (category) => {
  //   setFilteredPantry(
  //     props.pantry_items.filter((pantry_item) => {
  //       return pantry_item.category === category;
  //     })
  //   );
  // };

  const categories = Array.from(new Set(props.pantry_items.map((pantry_item) => pantry_item.category)));

  return (
    <div>
      <h1>My Pantry:</h1>
      <select onChange={(e) => handleFilterPantry(e.target.value)}>
        <option defaultValue="">Select category</option>
        {categories.map((category) => {
          return <option key={category}>{category}</option>;
        })}
      </select>
      {filteredPantry.map((pantry_item) => (
        <div key={pantry_item.id}>
          <img src={pantry_item.image_url} alt="ingredient image" width="300px" />
          <p>Ingredient: {pantry_item.name}</p>
          <p>Amount: {pantry_item.amount}</p>
          <p>Category: {pantry_item.category}</p>
          <p>Use By: {pantry_item.use_by_date}</p>
          <button onClick={() => props.onShowPantry(pantry_item)}>More Info!</button>
        </div>
      ))}
      {filteredPantry.length === 0 && <div>No pantry items matching the filter</div>}
    </div>
  );
}

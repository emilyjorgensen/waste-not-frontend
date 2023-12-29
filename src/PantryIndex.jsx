/* eslint-disable react/prop-types */
import { useState, useEffect } from "react";

export function PantryIndex(props) {
  // keeps track of the selected category for useEffect
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [filteredPantry, setFilteredPantry] = useState(props.pantry_items);

  const categories = Array.from(new Set(props.pantry_items.map((pantry_item) => pantry_item.category)));

  const filterByCategory = (category) => {
    setSelectedCategory(category);

    // added default category "All" to remove filtering
    if (category === "All") {
      setFilteredPantry(props.pantry_items);
    } else {
      setFilteredPantry(
        props.pantry_items.filter((pantry_item) => {
          return pantry_item.category === category;
        })
      );
    }
  };

  // useEffect to update filteredPantry when selectedCategory changes
  useEffect(() => {
    if (selectedCategory === "All") {
      setFilteredPantry(props.pantry_items);
    } else {
      setFilteredPantry(
        props.pantry_items.filter((pantry_item) => {
          return pantry_item.category === selectedCategory;
        })
      );
    }
  }, [selectedCategory, props.pantry_items]);

  return (
    <div>
      <h1 className="display-1">My Pantry</h1>
      <select value={selectedCategory} onChange={(e) => filterByCategory(e.target.value)}>
        <option value="All">all categories</option>
        {categories.map((category) => {
          return <option key={category}>{category}</option>;
        })}
      </select>
      <div className="row row-cols-1 row-cols-md-3 g-4">
        {filteredPantry.map((pantry_item) => (
          <div key={pantry_item.id} className="col">
            <div className="card mb-3">
              <img src={pantry_item.image_url} className="card-img-top" alt="ingredient image" />
              <div className="card-body">
                <h5 className="card-title">{pantry_item.name}</h5>
                <p className="m-0">Amount: {pantry_item.amount}</p>
                <p className="m-0">Category: {pantry_item.category}</p>
                <p className="mb-2">Use By: {pantry_item.use_by_date}</p>
                <button
                  type="button"
                  className="btn btn-secondary"
                  data-bs-toggle="modal"
                  data-bs-target="#staticBackdrop"
                  onClick={() => props.onShowPantry(pantry_item)}
                >
                  More Info!
                </button>
              </div>
            </div>
          </div>
        ))}
        {filteredPantry.length === 0 && <div>No pantry items matching the filter</div>}
      </div>
    </div>
  );
}

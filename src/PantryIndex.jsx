/* eslint-disable react/prop-types */
export function PantryIndex(props) {
  return (
    <div>
      <h1>My Pantry:</h1>
      {props.pantry_items.map((pantry_item) => (
        <div key={pantry_item.id}>
          <img src={pantry_item.image_url} alt="ingredient image" width="300px" />
          <p>Ingredient: {pantry_item.name}</p>
          <p>Amount: {pantry_item.amount}</p>
          <p>Category: {pantry_item.category}</p>
          <p>Use By: {pantry_item.use_by_date}</p>
          <button onClick={() => props.onShowPantry(pantry_item)}>More Info!</button>
        </div>
      ))}
    </div>
  );
}

export function PantryShow(props) {
  return (
    <div>
      <h1>Pantry Item Information:</h1>
      <img src={props.pantry_item.image_url} alt="ingredient image" width="300px" />
      <p>Ingredient: {props.pantry_item.ingredient_id}</p>
      <p>Amount: {props.pantry_item.amount}</p>
      <p>Category: {props.pantry_item.category}</p>
      <p>Use By: {props.pantry_item.use_by_date}</p>
    </div>
  );
}

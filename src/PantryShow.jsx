export function PantryShow(props) {
  return (
    <div>
      <h1>Pantry Item Information</h1>
      <img src={props.pantry_item.image_url} alt="pantry item image" />
      <p>Name: {props.pantry_item.name}</p>
      <p>Amount: {props.pantry_item.amount}</p>
      <p>Use By: {props.pantry_item.use_by_date}</p>
    </div>
  );
}

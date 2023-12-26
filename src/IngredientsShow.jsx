export function IngredientsShow(props) {
  return (
    <div>
      <h1>Ingredient Information</h1>
      <img src={props.ingredient.image_url} alt="pantry item image" width="300px" />
      <p>Name: {props.ingredient.name}</p>
    </div>
  );
}

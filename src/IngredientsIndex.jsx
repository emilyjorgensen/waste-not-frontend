/* eslint-disable react/prop-types */
export function IngredientsIndex(props) {
  return (
    <div>
      <h1>All ingredients</h1>
      {props.ingredients.map((ingredient) => (
        <div key={ingredient.id}>
          <img src={ingredient.image_url} alt="ingredient image" width="300px" />
          <button onClick={() => props.onShowPantry(pantry_item)}>{ingredient.name}</button>
        </div>
      ))}
    </div>
  );
}

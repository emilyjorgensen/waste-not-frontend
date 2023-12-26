/* eslint-disable react/prop-types */
export function IngredientsIndex(props) {
  console.log("onShowPantry IS A ", typeof props.onshowPantry); //log the type of onShowPantry

  return (
    <div>
      <h1>All ingredients</h1>
      {props.ingredients.map((ingredient) => (
        <div key={ingredient.id}>
          <img src={ingredient.image_url} alt="ingredient image" width="300px" />
          <h3>{ingredient.name}</h3>
          <button>Add to Pantry!</button>
        </div>
      ))}
    </div>
  );
}

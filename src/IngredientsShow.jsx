/* eslint-disable react/prop-types */
export function IngredientsShow(props) {
  const handleSubmit = (event) => {
    event.preventDefault();
    const params = new FormData(event.target);
    props.onCreatePantry(params, () => event.target.reset());
    window.location.href = "/";
  };

  return (
    <div>
      <h1>Ingredient Information</h1>
      <img src={props.ingredient.image_url} alt="ingredient image" width="300px" />
      <p>Name: {props.ingredient.name}</p>
      <form onSubmit={handleSubmit}>
        <div>
          <input defaultValue={props.ingredient.id} name="ingredient_id" type="hidden" />
        </div>
        <div>
          Amount: <input name="amount" type="text" />
        </div>
        <div>
          Category: <input name="category" type="text" />
        </div>
        <div>
          Use By Date: <input name="use_by_date" type="text" />
        </div>
        <button type="submit">Add to Pantry!</button>
      </form>
    </div>
  );
}

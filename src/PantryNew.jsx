/* eslint-disable react/prop-types */
export function PantryNew(props) {
  const handleSubmit = (event) => {
    event.preventDefault();
    const params = new FormData(event.target);
    props.onCreatePantry(params, () => event.target.reset());
  };

  return (
    <div>
      <h1>New Pantry Item:</h1>
      <form onSubmit={handleSubmit}>
        <div>
          Ingredient ID: <input name="ingredient_id" type="integer" />
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

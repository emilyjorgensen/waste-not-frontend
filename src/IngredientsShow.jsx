/* eslint-disable react/prop-types */
export function IngredientsShow(props) {
  const handleSubmit = (event) => {
    event.preventDefault();
    const params = new FormData(event.target);
    props.onCreatePantry(params, () => event.target.reset());
    window.location.href = "/ingredients";
  };

  return (
    <div>
      <h1>Ingredient Information</h1>
      <img src={props.ingredient.image_url} alt="ingredient image" width="300px" />
      <h5>{props.ingredient.name}</h5>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <input defaultValue={props.ingredient.id} name="ingredient_id" type="hidden" />
        </div>
        <div className="mb-3">
          Amount: <input className="form-control" name="amount" type="text" />
        </div>
        <div className="mb-3">
          Category: <input className="form-control" name="category" type="text" />
        </div>
        <div className="mb-3">
          Use By Date: <input className="form-control" name="use_by_date" type="text" />
          <small>00-00-0000</small>
        </div>
        <button type="submit" className="btn btn-secondary">
          Add to Pantry!
        </button>
      </form>
    </div>
  );
}

/* eslint-disable react/prop-types */
export function PantryShow(props) {
  const handleSubmit = (event) => {
    event.preventDefault();
    const params = new FormData(event.target);
    props.onUpdatePantry(props.pantry_item.id, params, () => event.target.reset());
  };

  const handleClick = () => {
    props.onDestroyPantryItem(props.pantry_item);
  };

  return (
    <div>
      <h1>Pantry Item Information</h1>
      <img src={props.pantry_item.image_url} alt="pantry item image" width="300px" />
      <h5>{props.pantry_item.name}</h5>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          Amount: <input defaultValue={props.pantry_item.amount} name="amount" type="text" className="form-control" />
        </div>
        <div className="mb-3">
          Category:{" "}
          <input defaultValue={props.pantry_item.category} name="category" type="text" className="form-control" />
        </div>
        <div className="mb-3">
          Use By:{" "}
          <input defaultValue={props.pantry_item.use_by_date} name="use_by_date" type="text" className="form-control" />
          <small>00-00-0000</small>
        </div>
        <button type="submit" className="btn btn-secondary">
          Update pantry item
        </button>
      </form>
      <button className="btn btn-danger" onClick={handleClick}>
        Destroy Pantry Item
      </button>
    </div>
  );
}

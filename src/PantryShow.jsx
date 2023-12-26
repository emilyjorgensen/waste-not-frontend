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
      <p>Name: {props.pantry_item.name}</p>
      <p>Category: {props.pantry_item.category}</p>
      <p>Amount: {props.pantry_item.amount}</p>
      <p>Use By: {props.pantry_item.use_by_date}</p>
      <form onSubmit={handleSubmit}>
        <div>
          Category: <input defaultValue={props.pantry_item.category} name="category" type="text" />
        </div>
        <div>
          Amount: <input defaultValue={props.pantry_item.amount} name="amount" type="text" />
        </div>
        <div>
          Use By: <input defaultValue={props.pantry_item.use_by_date} name="use_by_date" type="text" />
        </div>
        <button type="submit">Update pantry item</button>
      </form>
      <button onClick={handleClick}>Destroy Pantry Item</button>
    </div>
  );
}

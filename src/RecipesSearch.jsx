import { useState } from "react";
import { useNavigate } from "react-router-dom";

export function RecipesSearch() {
  const [input, setInput] = useState("");
  const navigate = useNavigate();

  const submitHandler = (e) => {
    e.preventDefault();
    navigate(`/searched/${input}`);
  };

  return (
    <div className="container">
      <h1 className="display-1">Find a Recipe</h1>
      <form action="search" className="d-flex pb-5">
        <input
          className="form-control me-2"
          type="text"
          placeholder="ingredient or keyword"
          aria-label="Search"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button onClick={submitHandler} className="btn btn-outline-success" type="submit">
          Search
        </button>
      </form>
    </div>
  );
}

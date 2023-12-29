import axios from "axios";
import { useState } from "react";

export function Signup() {
  const [errors, setErrors] = useState([]);

  const handleSubmit = (event) => {
    event.preventDefault();
    setErrors([]);
    const params = new FormData(event.target);
    axios
      .post("http://localhost:3000/users.json", params)
      .then((response) => {
        console.log(response.data);
        event.target.reset();
        window.location.href = "/login"; // Change this to hide a modal, redirect to a specific page, etc.
      })
      .catch((error) => {
        console.log(error.response.data.errors);
        setErrors(error.response.data.errors);
      });
  };

  return (
    <div id="signup">
      <h1 className="display-1">Sign Up for Waste Not!</h1>
      <ul>
        {errors.map((error) => (
          <li key={error}>{error}</li>
        ))}
      </ul>
      <form className="row g-3" onSubmit={handleSubmit}>
        <div className="col-md-6">
          <label htmlFor="inputName4" className="form-label">
            Name
          </label>
          <input name="name" type="text" className="form-control" id="inputName4" />
        </div>
        <div className="col-md-6">
          <label htmlFor="inputEmail4" className="form-label">
            Email
          </label>
          <input name="email" type="email" className="form-control" id="inputEmail4" />
        </div>
        <div className="col-12">
          <label htmlFor="inputPassword" className="form-label">
            Password
          </label>
          <input name="password" type="password" className="form-control" id="inputPassword" />
        </div>
        <div className="col-12">
          <label htmlFor="inputPassword" className="form-label">
            Password Confirmation
          </label>
          <input name="password" type="password" className="form-control" id="inputPassword" />
        </div>
        <div className="col-12">
          <button type="submit" className="btn btn-secondary">
            Sign up
          </button>
        </div>
      </form>
    </div>
  );
}

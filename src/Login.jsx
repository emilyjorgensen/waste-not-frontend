import axios from "axios";
import { useState } from "react";

const jwt = localStorage.getItem("jwt");
if (jwt) {
  axios.defaults.headers.common["Authorization"] = `Bearer ${jwt}`;
}

export function Login() {
  const [errors, setErrors] = useState([]);

  const handleSubmit = (event) => {
    event.preventDefault();
    setErrors([]);
    const params = new FormData(event.target);
    axios
      .post("http://localhost:3000/sessions.json", params)
      .then((response) => {
        console.log(response.data);
        axios.defaults.headers.common["Authorization"] = "Bearer " + response.data.jwt;
        localStorage.setItem("jwt", response.data.jwt);
        event.target.reset();
        window.location.href = "/"; // Change this to hide a modal, redirect to a specific page, etc.
      })
      .catch((error) => {
        console.log(error.response);
        setErrors(["Invalid email or password"]);
      });
  };

  return (
    <div id="login">
      <h1 className="display-1">Log In to Waste Not!</h1>
      <ul>
        {errors.map((error) => (
          <li key={error}>{error}</li>
        ))}
      </ul>
      <form className="row g-3" onSubmit={handleSubmit}>
        <div className="col-12">
          <label htmlFor="inputEmail" className="form-label">
            Email
          </label>
          <input name="email" type="email" className="form-control" id="inputEmail" />
        </div>
        <div className="col-12">
          <label htmlFor="inputPassword" className="form-label">
            Password
          </label>
          <input name="password" type="password" className="form-control" id="inputPassword" />
        </div>
        <div className="col-12">
          <button type="submit" className="btn btn-secondary">
            Log in
          </button>
        </div>
      </form>
    </div>
  );
}

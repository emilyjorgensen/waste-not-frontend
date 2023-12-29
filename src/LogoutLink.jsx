import axios from "axios";

export function LogoutLink() {
  const handleClick = (event) => {
    event.preventDefault();
    delete axios.defaults.headers.common["Authorization"];
    localStorage.removeItem("jwt");
    window.location.href = "/";
  };

  return (
    <div>
      <h5 className="display-5">Ready to leave?</h5>
      <button className="btn btn-secondary" href="#" onClick={handleClick}>
        Logout
      </button>
    </div>
  );
}

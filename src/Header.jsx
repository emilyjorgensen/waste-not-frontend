import { Link } from "react-router-dom";

export function Header() {
  return (
    <header>
      <nav className="navbar navbar-dark navbar-expand-lg bg-dark">
        <div className="container-fluid">
          <a className="navbar-brand" href="/">
            Waste Not
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav">
              <Link className="nav-link active" aria-current="page" to="/">
                Home
              </Link>
              <Link className="nav-link " aria-current="page" to="/ingredients">
                All Ingredients
              </Link>
              <Link className="nav-link " aria-current="page" to="/pantry">
                My Pantry
              </Link>
              {localStorage.jwt === undefined ? (
                <div>
                  <Link className="nav-link" to="/signup">
                    Signup
                  </Link>
                  <Link className="nav-link" to="/login">
                    Login
                  </Link>
                </div>
              ) : (
                <Link className="nav-link" to="/logout">
                  Logout
                </Link>
              )}
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}

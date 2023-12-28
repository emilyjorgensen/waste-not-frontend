import { Link } from "react-router-dom";

export function Header() {
  return (
    <header>
      <nav>
        <Link to="/">Home</Link> |
        {localStorage.jwt === undefined ? (
          <>
            <Link to="/signup">Signup</Link> | <Link to="/login">Login</Link>
          </>
        ) : (
          <Link to="/logout">Logout</Link>
        )}
      </nav>
    </header>
  );
}

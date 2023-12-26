import { Link } from "react-router-dom";

export function Header() {
  return (
    <header>
      <nav>
        <Link to="/">Home</Link> | <Link to="/signup">Signup</Link> | <Link to="/login">Login</Link> |{" "}
        <Link to="/logout">Logout</Link>
      </nav>
    </header>
  );
}

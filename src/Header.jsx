import { Link } from "react-router-dom";

export function Header() {
  let authenticationLinks;
  if (localStorage.jwt === undefined) {
    authenticationLinks = (
      <>
        <Link to="/">Home</Link> | <Link to="/signup">Signup</Link> | <Link to="/login">Login</Link>
      </>
    );
  } else {
    authenticationLinks = (
      <>
        <Link to="/">Home</Link> | <Link to="/logout">Logout</Link>
      </>
    );
  }

  return (
    <header>
      <nav>{authenticationLinks}</nav>
    </header>
  );
}

import { NavLink } from "react-router-dom";
import "./Navigation.css";

function Navigation() {
  return (
    <nav className="navigation">
      <NavLink to="/" className="navigation__link">
        Home
      </NavLink>

      <button type="button" className="navigation__button">
        Sign In
      </button>
    </nav>
  );
}

export default Navigation;

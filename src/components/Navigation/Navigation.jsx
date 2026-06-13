import { NavLink } from "react-router-dom";
import "./Navigation.css";

function Navigation({ onLoginClick }) {
  return (
    <nav className="navigation">
      <NavLink to="/" className="navigation__link">
        Home
      </NavLink>

      <button
        type="button"
        className="navigation__button"
        onClick={onLoginClick}
      >
        Sign In
      </button>
    </nav>
  );
}

export default Navigation;

import { NavLink } from "react-router-dom";
import "./Navigation.css";

function Navigation({ onLoginClick, isMenuOpen }) {
  return (
    <nav className={`navigation ${isMenuOpen ? "navigation_opened" : ""}`}>
      <NavLink
        to="/"
        className={({ isActive }) =>
          isActive
            ? "navigation__link navigation__link_active"
            : "navigation__link"
        }
      >
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

import { NavLink } from "react-router-dom";
import "./Navigation.css";

function Navigation({ onLoginClick, isMenuOpen, onCloseMenu }) {
  return (
    <nav className={`navigation ${isMenuOpen ? "navigation_opened" : ""}`}>
      <NavLink
        to="/"
        onClick={onCloseMenu}
        className={({ isActive }) =>
          isActive
            ? "navigation__link navigation__link_active"
            : "navigation__link"
        }
      >
        Home
      </NavLink>

      <NavLink
        to="/saved-news"
        onClick={onCloseMenu}
        className={({ isActive }) =>
          isActive
            ? "navigation__link navigation__link_active"
            : "navigation__link"
        }
      >
        Saved News
      </NavLink>

      <button
        type="button"
        className="navigation__button"
        onClick={() => {
          onLoginClick();
          onCloseMenu();
        }}
      >
        Sign In
      </button>
    </nav>
  );
}

export default Navigation;

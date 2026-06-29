import { NavLink } from "react-router-dom";
import { useContext } from "react";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";
import logoutIcon from "../../assets/logout.svg";
import logoutDarkIcon from "../../assets/logout-dark.svg";
import "./Navigation.css";

function Navigation({
  onLoginClick,
  isMenuOpen,
  onCloseMenu,
  isLoggedin,
  onLogout,
  isSavedNews,
}) {
  const currentUser = useContext(CurrentUserContext);

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

      {isLoggedin && (
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
      )}
      {isLoggedin ? (
        <button
          type="button"
          className="navigation__button navigation__button_logged-in"
          onClick={() => {
            onLogout();
            onCloseMenu();
          }}
        >
          <span>{currentUser?.name}</span>
          <img
            src={isSavedNews && !isMenuOpen ? logoutDarkIcon : logoutIcon}
            alt="Logout"
            className="navigation__logout-icon"
          />
        </button>
      ) : (
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
      )}
    </nav>
  );
}

export default Navigation;

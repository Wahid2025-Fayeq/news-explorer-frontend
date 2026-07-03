import { Link } from "react-router-dom";
import Navigation from "../Navigation/Navigation";
import menuIcon from "../../assets/menu.svg";
import menuDarkIcon from "../../assets/dark-menu.svg";
import closeIcon from "../../assets/close.svg";
import "./Header.css";

function Header({
  onLoginClick,
  onMenuClick,
  isMenuOpen,
  isSavedNews,
  onCloseMenu,
  isLoggedin,
  onLogout,
  isModalOpen,
}) {
  return (
    <header
      className={`header ${isMenuOpen ? "header_opened" : ""}
    ${isSavedNews ? "header_saved-news" : ""}`}
    >
      <Link to="/" className="header__title">
        NewsExplorer
      </Link>

      <button
        type="button"
        className={`header__menu-button ${isModalOpen ? "header__menu-button_hidden" : ""}`}
        onClick={onMenuClick}
        aria-hidden={isModalOpen}
        tabIndex={isModalOpen ? -1 : 0}
      >
        <img
          src={isMenuOpen ? closeIcon : isSavedNews ? menuDarkIcon : menuIcon}
          alt={isMenuOpen ? "Close menu" : "Open menu"}
          className="header__menu-icon"
        />
      </button>

      <Navigation
        onLoginClick={onLoginClick}
        isMenuOpen={isMenuOpen}
        isSavedNews={isSavedNews}
        onCloseMenu={onCloseMenu}
        isLoggedin={isLoggedin}
        onLogout={onLogout}
      />
    </header>
  );
}

export default Header;

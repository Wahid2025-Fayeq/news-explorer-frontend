import { Link } from "react-router-dom";
import Navigation from "../Navigation/Navigation";
import menuIcon from "../../assets/menu.svg";
import closeIcon from "../../assets/close.svg";
import "./Header.css";

function Header({ onLoginClick, onMenuClick, isMenuOpen }) {
  return (
    <header className="header">
      <Link to="/" className="header__title">
        NewsExplorer
      </Link>

      <button
        type="button"
        className="header__menu-button"
        onClick={onMenuClick}
      >
        <img
          src={isMenuOpen ? closeIcon : menuIcon}
          alt={isMenuOpen ? "Close menu" : "Open menu"}
          className="header__menu-icon"
        />
      </button>
      <Navigation onLoginClick={onLoginClick} isMenuOpen={isMenuOpen} />
    </header>
  );
}

export default Header;

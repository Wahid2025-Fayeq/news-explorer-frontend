import { Link } from "react-router-dom";
import Navigation from "../Navigation/Navigation";
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
        <span className="header__menu-line"></span>
        <span className="header__menu-line"></span>
      </button>
      <Navigation onLoginClick={onLoginClick} isMenuOpen={isMenuOpen} />
    </header>
  );
}

export default Header;

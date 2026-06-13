import { Link } from "react-router-dom";
import Navigation from "../Navigation/Navigation";
import "./Header.css";

function Header({ onLoginClick }) {
  return (
    <header className="header">
      <Link to="/" className="header__title">
        NewsExplorer
      </Link>
      <Navigation onLoginClick={onLoginClick} />
    </header>
  );
}

export default Header;

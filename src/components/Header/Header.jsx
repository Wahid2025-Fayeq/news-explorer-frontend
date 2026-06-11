import { Link } from "react-router-dom";
import Navigation from "../Navigation/Navigation";
import "./Header.css";

function Header() {
  return (
    <header className="header">
      <Link to="/" className="header__title">
        News Explorer
      </Link>
      <Navigation />
    </header>
  );
}

export default Header;

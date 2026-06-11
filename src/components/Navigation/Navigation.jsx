import { NavLink } from "react-router-dom";
import "./Navigation.css";

function Navigation() {
  return (
    <nav className="navigation">
      <NavLink to="/">Home</NavLink>
      <NavLink to="/saved-news">Saved News</NavLink>
    </nav>
  );
}

export default Navigation;

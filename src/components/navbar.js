import { NavLink } from "react-router-dom";
import "../css/navbar.css";
// TO DO: CHECK NAV-LINK

function Navbar() {
  return (
    <nav>
      <ul className="nav">
        <li>
          <NavLink
            // activeClassName="selected"
            className="nav-link"
            to="/"
          >
            <h1>MP-Design</h1>
          </NavLink>
        </li>
        <li>
          <NavLink
            // activeClassName="selected"
            className="nav-link"
            to="/projects"
          >
            Projects
          </NavLink>
        </li>
        <li>
          <NavLink
            // activeClassName="selected"
            className="nav-link"
            to="/about"
          >
            About
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;

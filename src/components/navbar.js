import { Link } from "react-router-dom";
import "../css/navbar.css";

function Navbar() {
  return (
    <nav>
      <ul className="nav">
        <li>
          <Link className="nav-link" to="/">
            <h1>MP-Design</h1>
          </Link>
        </li>
        <li>
          <Link className="nav-link" to="/projects">
            Projects
          </Link>
        </li>
        <li>
          <Link className="nav-link" to="/about">
            About
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;

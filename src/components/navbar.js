import { Link } from "react-router-dom";
import "../css/nav.css";

function Navbar() {
  return (
    <nav>
      <ul className="nav">
        <li>
          <Link className="nav-link" to="/">
            <h1>Home</h1>
          </Link>
        </li>
        <li>
          <Link className="nav-link" to="/work">
            Work
          </Link>
        </li>
        <li>
          <Link className="nav-link" to="/about">
            About
          </Link>
        </li>
        <li>
          <Link className="nav-link" to="/contact">
            Contact
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;

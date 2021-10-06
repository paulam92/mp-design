import { Link } from "react-router-dom";
import "../css/home.css";

function Home(props) {
  return (
    <div
      className="home-component"
      style={{ backgroundImage: `url(${props.mountainBG})` }}
    >
      <h2>
        Welcome, I design and code beautifully simple things, and I love what I
        do.
      </h2>
      <Link className="call-to-action-contact-link" to="/contact">
        Hire me
      </Link>
    </div>
  );
}

export default Home;

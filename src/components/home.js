import { Link } from "react-router-dom";
import "../css/home.css";

function Home(props) {
  return (
    <div
      className="home-component"
      style={{ backgroundImage: `url(${props.mountainBG})` }}
    >
      <h2>
        Welcome, my name is Paula. I love coding and designing beautifully simple things.
      </h2>
      <Link className="call-to-action-contact-link" to="/contact">
        Hire me
      </Link>
    </div>
  );
}

export default Home;

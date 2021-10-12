import { Link } from "react-router-dom";
import "../css/home.css";

function Home(props) {
  return (
    <div
      className="home-component"
      style={{ backgroundImage: `url(${props.mountainBG})` }}
    >
      <h2>
        Welcome, my name is <Link to="/about">Paula</Link>. I love coding and
        designing beautifully simple things.
      </h2>
      <a
        className="call-to-action-contact-link"
        href="mailto:szakacsmpaula@gmail.com"
        target="_blank"
        rel="noopener noreferrer"
      >
        <i className="fas fa-envelope" aria-hidden="true"></i> Hire me
      </a>
    </div>
  );
}

export default Home;

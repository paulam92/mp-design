import "../css/footer.css";

function Footer() {
  return (
    <footer className="footer-component">
      <ul>
        <li>
          <a
            href="mailto:szakacsmpaula@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fas fa-envelope" aria-hidden="true"></i>
          </a>
        </li>
        <li>
          <a
            href="https://www.linkedin.com/in/paula-mark/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fa fa-linkedin-square" aria-hidden="true"></i>
          </a>
        </li>
        <li>
          <a
            href="https://stackoverflow.com/users/15414270/szmap92"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fa fa-stack-overflow" aria-hidden="true"></i>
          </a>
        </li>
        <li>
          <a
            href="https://github.com/paulam92"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fab fa-github" aria-hidden="true"></i>
          </a>
        </li>
      </ul>
    </footer>
  );
}

export default Footer;

import { Link } from "react-router-dom";
import githubIcon from "../../assets/github.svg";
import linkedinIcon from "../../assets/linkedin.svg";
import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <p className="footer__copyright">© 2026 Supersite, Powered by News API</p>

      <div className="footer__content">
        <nav className="footer__nav">
          <Link to="/" className="footer__link">
            Home
          </Link>

          <a
            href="https://tripleten.com"
            target="_blank"
            rel="noreferrer"
            className="footer__link"
          >
            TripleTen
          </a>
        </nav>

        <div className="footer__social">
          <a
            href="https://github.com/Wahid2025-Fayeq"
            target="_blank"
            rel="noreferrer"
            className="footer__icon"
          >
            <img src={githubIcon} alt="GitHub" />
          </a>

          <a
            href="https://www.linkedin.com/in/wahid-fayeq-se/"
            target="_blank"
            rel="noreferrer"
            className="footer__icon"
          >
            <img src={linkedinIcon} alt="LinkedIn" />
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;

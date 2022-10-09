import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer>
      <section className="footer container">
        <div>
          <Link to="/">
            <h1>Simple Url</h1>
          </Link>
        </div>
        <div className="footer-content">
          <p className="caption-text copyright">
            &copy;2022 SimpleUrl All rights reserved.
          </p>
          <div className="footer-links">
            <a href="/#" className="caption-text">
              Terms
            </a>
            <a href="/#" className="caption-text">
              Privacy
            </a>
          </div>
        </div>
      </section>
    </footer>
  );
};

export default Footer;

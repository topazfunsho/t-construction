import { NavLink } from "react-router-dom";

function Footer() {
  const year = new Date().getFullYear();

  return (
    <>
      <footer className="footer">
        <div className="footer-grid">
          {/* Brand */}
          <div className="footer-brand">
            <NavLink to="/">
              <img src="https://iili.io/FYenpwP.png" alt="Tophem Construction" />
            </NavLink>
            <p>
              Tophem Construction delivers world-class infrastructure across Nigeria —
              built on trust, precision, and lasting quality.
            </p>
            <div className="footer-socials">
              <a href="https://linkedin.com" target="_blank" rel="noreferrer" aria-label="LinkedIn">
                <i className="bi bi-linkedin"></i>
              </a>
              <a href="https://instagram.com" target="_blank" rel="noreferrer" aria-label="Instagram">
                <i className="bi bi-instagram"></i>
              </a>
              <a href="https://facebook.com" target="_blank" rel="noreferrer" aria-label="Facebook">
                <i className="bi bi-facebook"></i>
              </a>
              <a href="https://twitter.com" target="_blank" rel="noreferrer" aria-label="Twitter">
                <i className="bi bi-twitter-x"></i>
              </a>
            </div>
          </div>

          {/* Navigate */}
          <div className="footer-col">
            <h4>Navigate</h4>
            <ul>
              <li><NavLink to="/">Home</NavLink></li>
              <li><NavLink to="/about">About Us</NavLink></li>
              <li><NavLink to="/services">Services</NavLink></li>
              <li><NavLink to="/projects">Projects</NavLink></li>
              <li><NavLink to="/contact">Contact</NavLink></li>
            </ul>
          </div>

          {/* Services */}
          <div className="footer-col">
            <h4>Services</h4>
            <ul>
              <li><NavLink to="/services">Road Construction</NavLink></li>
              <li><NavLink to="/services">Building Construction</NavLink></li>
              <li><NavLink to="/services">Civil Engineering</NavLink></li>
              <li><NavLink to="/services">General Contracting</NavLink></li>
              <li><NavLink to="/services">Project Consultation</NavLink></li>
            </ul>
          </div>

          {/* Contact */}
          <div className="footer-col">
            <h4>Contact Us</h4>
            <div className="footer-contact-item">
              <i className="bi bi-geo-alt-fill"></i>
              <span>No. 5 Shallom Road, Gwarimpa, Abuja, Nigeria</span>
            </div>
            <div className="footer-contact-item">
              <i className="bi bi-telephone-fill"></i>
              <span>+234 803 378 4778</span>
            </div>
            <div className="footer-contact-item">
              <i className="bi bi-envelope-fill"></i>
              <span>construction@tophem.com</span>
            </div>
            <div className="footer-contact-item">
              <i className="bi bi-clock-fill"></i>
              <span>Mon – Sat: 8:00 AM – 6:00 PM</span>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; {year} Tophem Construction Ltd. All Rights Reserved.</p>
          <p>Built with dedication &amp; precision in Nigeria.</p>
        </div>
      </footer>
    </>
  );
}

export default Footer;

import { useRef } from "react";
import { NavLink } from "react-router-dom";
import "../App.css";

function NavBar() {
  const mobileDiv = useRef<HTMLDivElement | null>(null);

  function handleMobileNav() {
    if (mobileDiv.current) mobileDiv.current.style.display = "flex";
  }

  function handleClose() {
    if (mobileDiv.current) mobileDiv.current.style.display = "none";
  }

  return (
    <>
      {/* Pre-nav */}
      <div className="px-5 justify-content-between fs-6 pre-nav">
        <div>
          <i className="bi bi-geo-alt-fill me-1"></i>
          No. 5 Shallom Road, Gwarimpa, Abuja, Nigeria
        </div>
        <div>
          <i className="bi-envelope me-1"></i>
          construction@tophem.com
        </div>
        <div>
          <a href="https://linkedin.com" target="_blank" rel="noreferrer">
            <i className="bi-linkedin me-3"></i>
          </a>
          <a href="https://instagram.com" target="_blank" rel="noreferrer">
            <i className="bi-instagram me-3"></i>
          </a>
          <a href="https://facebook.com" target="_blank" rel="noreferrer">
            <i className="bi-facebook"></i>
          </a>
        </div>
      </div>

      {/* Main Navbar */}
      <nav className="nav-section">
        <div className="logo">
          <NavLink to="/">
            <img src="https://iili.io/FYenpwP.png" alt="Tophem Construction Logo" />
          </NavLink>
        </div>

        <div className="navigate">
          <ul>
            <NavLink to="/" className={({ isActive }) => (isActive ? "active" : "")}>
              <li>Home</li>
            </NavLink>
            <NavLink to="/about" className={({ isActive }) => (isActive ? "active" : "")}>
              <li>About Us</li>
            </NavLink>
            <NavLink to="/services" className={({ isActive }) => (isActive ? "active" : "")}>
              <li>Services</li>
            </NavLink>
            <NavLink to="/projects" className={({ isActive }) => (isActive ? "active" : "")}>
              <li>Projects</li>
            </NavLink>
            <NavLink to="/contact" className={({ isActive }) => (isActive ? "active" : "")}>
              <li>Contact</li>
            </NavLink>
          </ul>
        </div>

        <div className="nav-phone pre-nav">
          <i className="bi bi-telephone-fill"></i>
          <span>+234 803 378 4778</span>
        </div>

        <div className="mobile-menu" onClick={handleMobileNav}>
          <i className="bi bi-list"></i>
        </div>

        {/* Mobile Nav */}
        <div className="mobile-nav" ref={mobileDiv}>
          <div className="mobile-nav-header">
            <img src="https://iili.io/FYenpwP.png" alt="Logo" style={{ width: "100px" }} />
            <i className="bi bi-x-lg" onClick={handleClose}></i>
          </div>
          <ul>
            <NavLink to="/" onClick={handleClose}><li>Home</li></NavLink>
            <NavLink to="/about" onClick={handleClose}><li>About Us</li></NavLink>
            <NavLink to="/services" onClick={handleClose}><li>Services</li></NavLink>
            <NavLink to="/projects" onClick={handleClose}><li>Projects</li></NavLink>
            <NavLink to="/contact" onClick={handleClose}><li>Contact</li></NavLink>
          </ul>
        </div>
      </nav>
    </>
  );
}

export default NavBar;

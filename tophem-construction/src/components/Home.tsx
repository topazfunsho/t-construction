import { useState } from "react";
import { NavLink } from "react-router-dom";
import "../App.css";

import roadImg from "../assets/Road 1.jpeg";
import road2Img from "../assets/road 2.jpeg";
import craneImg from "../assets/crane.jpeg";
import generalImg from "../assets/General Contractor.jpeg";
import heroImg from "../assets/hero.jpeg";

import logo1 from "../assets/big.jpeg";
import logo2 from "../assets/er.jpeg";
import logo3 from "../assets/fast.png";
import logo4 from "../assets/firs.png";
import logo5 from "../assets/jk.png";
import logo6 from "../assets/sfg.png";

import Footer from "./Footer";
import NavBar from "./NavBar";

function Home() {
  const [email, setEmail] = useState("");

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    alert("Thank you for subscribing!");
    setEmail("");
  }

  return (
    <>
      <NavBar />

      {/* ===== HERO ===== */}
      <section className="hero">
        <div className="hero-content">
          <div className="hero-badge">
            <i className="bi bi-award-fill me-1"></i> Nigeria's Trusted Builder
          </div>
          <h1>
            We Build the <span>Infrastructure</span> That Moves Nigeria Forward
          </h1>
          <p>
            From roads and bridges to residential and commercial buildings — Tophem
            Construction delivers durable, high-quality projects on time and within budget.
          </p>
          <div className="hero-buttons">
            <NavLink to="/contact" className="btn-primary">
              Get a Free Quote <i className="bi bi-arrow-right"></i>
            </NavLink>
            <NavLink to="/projects" className="btn-outline">
              View Our Projects <i className="bi bi-play-circle"></i>
            </NavLink>
          </div>
        </div>
      </section>

      {/* ===== STATS BAR ===== */}
      <div className="stats-bar">
        <div className="stat-item">
          <div>
            <span className="stat-number">150</span>
            <span className="stat-suffix">+</span>
          </div>
          <p>Completed Projects</p>
        </div>
        <div className="stat-item">
          <div>
            <span className="stat-number">80</span>
            <span className="stat-suffix">+</span>
          </div>
          <p>Happy Clients</p>
        </div>
        <div className="stat-item">
          <div>
            <span className="stat-number">15</span>
            <span className="stat-suffix">+</span>
          </div>
          <p>Years of Experience</p>
        </div>
        <div className="stat-item">
          <div>
            <span className="stat-number">12</span>
            <span className="stat-suffix"></span>
          </div>
          <p>States Reached</p>
        </div>
      </div>

      {/* ===== WHY CHOOSE US ===== */}
      <section className="features-section">
        <div style={{ textAlign: "center", marginBottom: "2.5rem" }}>
          <span className="section-label">Why Choose Us</span>
          <h2 className="section-title">
            Quality You Can <span>See and Touch</span>
          </h2>
          <p className="section-subtitle" style={{ margin: "0 auto" }}>
            We combine experienced professionals, modern machinery, and proven methods to
            deliver every project with excellence.
          </p>
        </div>
        <div className="features-grid">
          <div className="feature-card">
            <div className="feature-icon"><i className="bi bi-patch-check-fill"></i></div>
            <h3>Certified Excellence</h3>
            <p>
              All projects meet COREN and Nigerian Building Code standards. Our engineers
              hold internationally recognized certifications.
            </p>
          </div>
          <div className="feature-card">
            <div className="feature-icon"><i className="bi bi-clock-history"></i></div>
            <h3>On-Time Delivery</h3>
            <p>
              We maintain strict project timelines through efficient planning and dedicated
              site management teams.
            </p>
          </div>
          <div className="feature-card">
            <div className="feature-icon"><i className="bi bi-shield-check"></i></div>
            <h3>Safety First</h3>
            <p>
              Every site adheres to global HSE standards. Worker safety and public protection
              are non-negotiable commitments.
            </p>
          </div>
          <div className="feature-card">
            <div className="feature-icon"><i className="bi bi-tools"></i></div>
            <h3>Modern Equipment</h3>
            <p>
              We operate a fleet of modern, well-maintained construction machinery for
              superior results on any terrain.
            </p>
          </div>
          <div className="feature-card">
            <div className="feature-icon"><i className="bi bi-people-fill"></i></div>
            <h3>Expert Team</h3>
            <p>
              Our multidisciplinary team includes civil engineers, architects, quantity
              surveyors, and experienced site workers.
            </p>
          </div>
          <div className="feature-card">
            <div className="feature-icon"><i className="bi bi-currency-dollar"></i></div>
            <h3>Competitive Pricing</h3>
            <p>
              We deliver uncompromising quality at transparent, competitive prices — no
              hidden fees, no surprises.
            </p>
          </div>
        </div>
      </section>

      {/* ===== ABOUT PREVIEW ===== */}
      <section className="about-preview">
        <div className="about-preview-images">
          <img src={heroImg} alt="Construction site" className="about-img-main" />
          <div className="about-img-badge">
            <div className="big-num">15+</div>
            <p>Years of<br />Excellence</p>
          </div>
        </div>
        <div className="about-preview-content">
          <span className="section-label">About Tophem</span>
          <h2 className="section-title">
            A Legacy of <span>Structural Excellence</span>
          </h2>
          <p className="section-subtitle">
            Founded over 15 years ago, Tophem Construction has grown to become one of
            Nigeria's most respected construction and civil engineering companies.
          </p>
          <ul className="check-list">
            <li><i className="bi bi-check-circle-fill"></i> Licensed General Contractor registered with COREN</li>
            <li><i className="bi bi-check-circle-fill"></i> ISO-compliant project management processes</li>
            <li><i className="bi bi-check-circle-fill"></i> Delivered over 150 projects across 12 states</li>
            <li><i className="bi bi-check-circle-fill"></i> Full in-house engineering and design team</li>
            <li><i className="bi bi-check-circle-fill"></i> Dedicated post-project support and maintenance</li>
          </ul>
          <NavLink to="/about" className="btn-primary">
            Learn More About Us <i className="bi bi-arrow-right"></i>
          </NavLink>
        </div>
      </section>

      {/* ===== SERVICES PREVIEW ===== */}
      <section className="services-preview">
        <span className="section-label">Our Services</span>
        <h2 className="section-title">
          What We <span>Deliver</span>
        </h2>
        <p className="section-subtitle">
          From ground-breaking to final handover, we handle every phase with the
          highest professional standards.
        </p>
        <div className="services-grid">
          <div className="service-card">
            <img src={roadImg} alt="Road Construction" className="service-card-img" />
            <div className="service-card-body">
              <h3>Road Construction</h3>
              <p>
                Federal and state highway construction, rural road upgrades, drainage
                systems, and asphalt paving.
              </p>
              <NavLink to="/services" className="service-card-link">
                Learn More <i className="bi bi-arrow-right"></i>
              </NavLink>
            </div>
          </div>
          <div className="service-card">
            <img src={generalImg} alt="Building Construction" className="service-card-img" />
            <div className="service-card-body">
              <h3>Building Construction</h3>
              <p>
                Residential, commercial, and industrial building projects with full
                architectural and structural engineering.
              </p>
              <NavLink to="/services" className="service-card-link">
                Learn More <i className="bi bi-arrow-right"></i>
              </NavLink>
            </div>
          </div>
          <div className="service-card">
            <img src={craneImg} alt="Civil Engineering" className="service-card-img" />
            <div className="service-card-body">
              <h3>Civil Engineering</h3>
              <p>
                Bridges, culverts, drainage infrastructure, earthworks, and large-scale
                civil engineering solutions.
              </p>
              <NavLink to="/services" className="service-card-link">
                Learn More <i className="bi bi-arrow-right"></i>
              </NavLink>
            </div>
          </div>
        </div>
        <div style={{ marginTop: "2.5rem" }}>
          <NavLink to="/services" className="btn-outline-dark">
            View All Services <i className="bi bi-arrow-right"></i>
          </NavLink>
        </div>
      </section>

      {/* ===== PROJECTS PREVIEW ===== */}
      <section className="projects-preview">
        <span className="section-label">Our Portfolio</span>
        <h2 className="section-title">
          Recent <span>Projects</span>
        </h2>
        <p className="section-subtitle" style={{ margin: "0 auto 2.5rem" }}>
          A glimpse at some of our most impactful and complex infrastructure
          deliveries across Nigeria.
        </p>
        <div className="projects-grid">
          <div className="project-card">
            <img src={roadImg} alt="Abuja Ring Road" />
            <div className="project-overlay">
              <div className="project-tag">Road Construction</div>
              <h3>Abuja Inner Ring Road</h3>
              <p>4.2 km dual carriageway with full drainage and lighting.</p>
            </div>
          </div>
          <div className="project-card">
            <img src={road2Img} alt="Lagos Expressway" />
            <div className="project-overlay">
              <div className="project-tag">Highway</div>
              <h3>Lagos–Ibadan Expressway Link</h3>
              <p>Rehabilitation and expansion of 12 km highway section.</p>
            </div>
          </div>
          <div className="project-card">
            <img src={generalImg} alt="Commercial Complex" />
            <div className="project-overlay">
              <div className="project-tag">Building</div>
              <h3>Gwarimpa Commercial Complex</h3>
              <p>5-floor mixed-use commercial and office development.</p>
            </div>
          </div>
        </div>
        <div style={{ marginTop: "2.5rem" }}>
          <NavLink to="/projects" className="btn-primary">
            See All Projects <i className="bi bi-arrow-right"></i>
          </NavLink>
        </div>
      </section>

      {/* ===== TESTIMONIALS ===== */}
      <section className="testimonial-section">
        <span className="section-label">Testimonials</span>
        <h2 className="section-title">What Our Clients Say</h2>
        <p className="section-subtitle">
          Real feedback from the organizations and individuals who trust Tophem.
        </p>
        <div className="testimonials-grid">
          <div className="testimonial-card">
            <div className="stars">
              <i className="bi bi-star-fill"></i>
              <i className="bi bi-star-fill"></i>
              <i className="bi bi-star-fill"></i>
              <i className="bi bi-star-fill"></i>
              <i className="bi bi-star-fill"></i>
            </div>
            <p>
              "Tophem delivered our road project two weeks ahead of schedule with
              exceptional quality. Their team's professionalism is second to none in Nigeria."
            </p>
            <div className="testimonial-author">
              <div className="author-avatar">AO</div>
              <div>
                <h4>Adebayo Okafor</h4>
                <span>Director, FCT Area Council</span>
              </div>
            </div>
          </div>
          <div className="testimonial-card">
            <div className="stars">
              <i className="bi bi-star-fill"></i>
              <i className="bi bi-star-fill"></i>
              <i className="bi bi-star-fill"></i>
              <i className="bi bi-star-fill"></i>
              <i className="bi bi-star-fill"></i>
            </div>
            <p>
              "Our commercial building was handled from design to completion. Every
              detail was perfect and the cost was transparent throughout."
            </p>
            <div className="testimonial-author">
              <div className="author-avatar">CN</div>
              <div>
                <h4>Chioma Nwosu</h4>
                <span>CEO, Meridian Properties Ltd</span>
              </div>
            </div>
          </div>
          <div className="testimonial-card">
            <div className="stars">
              <i className="bi bi-star-fill"></i>
              <i className="bi bi-star-fill"></i>
              <i className="bi bi-star-fill"></i>
              <i className="bi bi-star-fill"></i>
              <i className="bi bi-star-half"></i>
            </div>
            <p>
              "I've worked with several contractors in Nigeria. Tophem stands apart
              for their safety standards, clean sites, and quality of finish."
            </p>
            <div className="testimonial-author">
              <div className="author-avatar">EU</div>
              <div>
                <h4>Emmanuel Uche</h4>
                <span>Project Manager, FMBN</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== CTA BANNER ===== */}
      <section className="cta-banner">
        <h2>
          Ready to Start Your <span>Next Project?</span>
        </h2>
        <p>
          Contact us today for a free consultation and project quote. Let's build
          something great together.
        </p>
        <div className="cta-buttons">
          <NavLink to="/contact" className="btn-primary">
            Get a Free Quote <i className="bi bi-arrow-right"></i>
          </NavLink>
          <NavLink to="/projects" className="btn-outline">
            View Portfolio <i className="bi bi-grid"></i>
          </NavLink>
        </div>
      </section>

      {/* ===== BRANDS ===== */}
      <section className="brands-section">
        <h3>Trusted by Leading Organizations</h3>
        <div className="brands-row">
          <img src={logo1} alt="Partner 1" />
          <img src={logo2} alt="Partner 2" />
          <img src={logo3} alt="Partner 3" />
          <img src={logo4} alt="Partner 4" />
          <img src={logo5} alt="Partner 5" />
          <img src={logo6} alt="Partner 6" />
        </div>
      </section>

      {/* ===== NEWSLETTER ===== */}
      <section className="newsletter-section">
        <div className="newsletter-text">
          <h2>Stay in the Loop</h2>
          <p>Get updates on projects, industry news, and company announcements.</p>
        </div>
        <form className="newsletter-form" onSubmit={handleSubmit}>
          <input
            type="email"
            placeholder="Enter your email address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            aria-label="Email address"
          />
          <button type="submit">Subscribe</button>
        </form>
      </section>

      <Footer />
    </>
  );
}

export default Home;

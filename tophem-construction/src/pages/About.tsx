import { NavLink } from "react-router-dom";
import Footer from "../components/Footer";
import NavBar from "../components/NavBar";
import "../App.css";

import heroImg from "../assets/hero.jpeg";
import road1 from "../assets/Road 1.jpeg";
import craneImg from "../assets/crane.jpeg";

function About() {
  return (
    <>
      <NavBar />

      {/* Page Hero */}
      <div className="page-hero">
        <div>
          <h1>About Us</h1>
          <p>Building Nigeria's future, one project at a time.</p>
          <nav className="breadcrumb-nav" aria-label="breadcrumb">
            <NavLink to="/">Home</NavLink>
            <span>/</span>
            <span>About Us</span>
          </nav>
        </div>
      </div>

      {/* ===== OUR STORY ===== */}
      <section className="about-story">
        <div className="about-story-images">
          <img src={heroImg} alt="Tophem Construction site" />
          <img src={road1} alt="Road project" />
          <img src={craneImg} alt="Crane at work" />
        </div>
        <div>
          <span className="section-label">Our Story</span>
          <h2 className="section-title">
            15+ Years of Building <span>with Purpose</span>
          </h2>
          <p style={{ color: "var(--text-muted)", lineHeight: "1.8", marginBottom: "1.2rem" }}>
            Tophem Construction was founded with a clear mission: to deliver infrastructure
            that lasts. Starting as a small civil engineering firm in Abuja, we have grown
            into a full-service construction company that has completed over 150 projects
            across 12 Nigerian states.
          </p>
          <p style={{ color: "var(--text-muted)", lineHeight: "1.8", marginBottom: "1.2rem" }}>
            Our growth has been driven by an unwavering commitment to quality, on-time
            delivery, and transparent client relationships. Every project we undertake is a
            testament to the trust our clients place in us — and we do not take that lightly.
          </p>
          <p style={{ color: "var(--text-muted)", lineHeight: "1.8", marginBottom: "2rem" }}>
            From federal highway contracts to residential estates and industrial buildings,
            Tophem's diverse portfolio speaks to both our technical capability and our
            dedication to Nigerian development.
          </p>
          <NavLink to="/contact" className="btn-primary">
            Work With Us <i className="bi bi-arrow-right"></i>
          </NavLink>
        </div>
      </section>

      {/* ===== STATS HIGHLIGHT ===== */}
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
          <p>Satisfied Clients</p>
        </div>
        <div className="stat-item">
          <div>
            <span className="stat-number">15</span>
            <span className="stat-suffix">+</span>
          </div>
          <p>Years Experience</p>
        </div>
        <div className="stat-item">
          <div>
            <span className="stat-number">12</span>
            <span className="stat-suffix"></span>
          </div>
          <p>States Covered</p>
        </div>
      </div>

      {/* ===== OUR VALUES ===== */}
      <section className="values-section">
        <span className="section-label">Our Values</span>
        <h2 className="section-title">
          What Drives <span>Everything We Do</span>
        </h2>
        <p className="section-subtitle" style={{ margin: "0 auto 2.5rem" }}>
          Our core values guide every decision, every contract, and every pour of concrete.
        </p>
        <div className="values-grid">
          <div className="value-card">
            <div className="value-icon"><i className="bi bi-trophy-fill"></i></div>
            <h3>Excellence</h3>
            <p>We set high standards and hold ourselves accountable to them on every single project.</p>
          </div>
          <div className="value-card">
            <div className="value-icon"><i className="bi bi-handshake-fill"></i></div>
            <h3>Integrity</h3>
            <p>Transparent pricing, honest timelines, and truthful reporting — always.</p>
          </div>
          <div className="value-card">
            <div className="value-icon"><i className="bi bi-shield-fill-check"></i></div>
            <h3>Safety</h3>
            <p>Our people and public go home safe. Safety is built into every process we run.</p>
          </div>
          <div className="value-card">
            <div className="value-icon"><i className="bi bi-recycle"></i></div>
            <h3>Sustainability</h3>
            <p>We build responsibly, minimizing environmental impact and supporting local communities.</p>
          </div>
        </div>
      </section>

      {/* ===== TEAM ===== */}
      <section className="team-section">
        <span className="section-label">Our Team</span>
        <h2 className="section-title">
          Meet the <span>People Behind Our Work</span>
        </h2>
        <p className="section-subtitle" style={{ margin: "0 auto 2.5rem" }}>
          Our leadership team brings decades of combined experience in construction, 
          engineering, and project management.
        </p>
        <div className="team-grid">
          {[
            { name: "Engr. Tunde Adeyemi", role: "Founder & CEO", init: "TA" },
            { name: "Arc. Ngozi Obi", role: "Chief Architect", init: "NO" },
            { name: "Engr. Emeka Eze", role: "Head of Civil Engineering", init: "EE" },
            { name: "Mrs. Fatima Musa", role: "Operations Director", init: "FM" },
          ].map((member) => (
            <div className="team-card" key={member.name}>
              <div className="team-card-img">
                <i className="bi bi-person-fill"></i>
              </div>
              <div className="team-card-body">
                <h3>{member.name}</h3>
                <span>{member.role}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ===== MILESTONES / TIMELINE ===== */}
      <section style={{ padding: "var(--section-pad)", background: "var(--dark)", color: "white" }}>
        <div style={{ textAlign: "center", marginBottom: "3rem" }}>
          <span className="section-label">Our Journey</span>
          <h2 className="section-title" style={{ color: "white" }}>
            Key <span>Milestones</span>
          </h2>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: "2rem" }}>
          {[
            { year: "2009", event: "Tophem Construction founded in Abuja with 8 staff members." },
            { year: "2012", event: "First federal government road contract awarded — 3.5 km in Kogi State." },
            { year: "2015", event: "Expanded to building construction; delivered first commercial complex." },
            { year: "2018", event: "Surpassed 50 completed projects and opened regional office in Lagos." },
            { year: "2021", event: "Achieved ISO 9001 compliance and grew team to 200+ professionals." },
            { year: "2024", event: "150+ projects completed across 12 states — still building strong." },
          ].map((m) => (
            <div
              key={m.year}
              style={{
                background: "rgba(255,255,255,0.05)",
                border: "1px solid rgba(255,255,255,0.08)",
                borderTop: "4px solid var(--primary)",
                borderRadius: "12px",
                padding: "1.8rem",
              }}
            >
              <div style={{ fontSize: "2rem", fontWeight: "900", color: "var(--primary)", marginBottom: "0.5rem" }}>
                {m.year}
              </div>
              <p style={{ fontSize: "0.92rem", color: "rgba(255,255,255,0.7)", lineHeight: "1.65" }}>{m.event}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ===== CTA ===== */}
      <section className="cta-banner">
        <h2>
          Let's Build Something <span>Extraordinary</span>
        </h2>
        <p>
          Partner with Nigeria's most reliable construction company. Reach out for
          a consultation — no project is too large or too complex.
        </p>
        <div className="cta-buttons">
          <NavLink to="/contact" className="btn-primary">
            Contact Us <i className="bi bi-arrow-right"></i>
          </NavLink>
          <NavLink to="/services" className="btn-outline">
            Our Services <i className="bi bi-grid"></i>
          </NavLink>
        </div>
      </section>

      <Footer />
    </>
  );
}

export default About;

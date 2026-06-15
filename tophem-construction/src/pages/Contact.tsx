import { useState } from "react";
import { NavLink } from "react-router-dom";
import Footer from "../components/Footer";
import NavBar from "../components/NavBar";
import "../App.css";

function Contact() {
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitted(true);
    setForm({ firstName: "", lastName: "", email: "", phone: "", service: "", message: "" });
  }

  return (
    <>
      <NavBar />

      {/* Page Hero */}
      <div className="page-hero">
        <div>
          <h1>Contact Us</h1>
          <p>Let's discuss your next project. We're ready to help.</p>
          <nav className="breadcrumb-nav" aria-label="breadcrumb">
            <NavLink to="/">Home</NavLink>
            <span>/</span>
            <span>Contact</span>
          </nav>
        </div>
      </div>

      {/* ===== CONTACT SECTION ===== */}
      <section className="contact-section">
        {/* Info */}
        <div className="contact-info">
          <span className="section-label">Get In Touch</span>
          <h2>Let's Build Something <span style={{ color: "var(--primary)" }}>Great Together</span></h2>
          <p>
            Have a project in mind? Want a quote? Or just need professional advice?
            Reach out to our team — we respond within 24 hours on business days.
          </p>

          <div className="contact-info-items">
            <div className="contact-info-item">
              <div className="contact-icon">
                <i className="bi bi-geo-alt-fill"></i>
              </div>
              <div>
                <h4>Office Address</h4>
                <p>No. 5 Shallom Road, Gwarimpa, Abuja, FCT, Nigeria</p>
              </div>
            </div>
            <div className="contact-info-item">
              <div className="contact-icon">
                <i className="bi bi-telephone-fill"></i>
              </div>
              <div>
                <h4>Phone Number</h4>
                <p>+234 803 378 4778</p>
                <p>+234 812 456 7890</p>
              </div>
            </div>
            <div className="contact-info-item">
              <div className="contact-icon">
                <i className="bi bi-envelope-fill"></i>
              </div>
              <div>
                <h4>Email Address</h4>
                <p>construction@tophem.com</p>
                <p>info@tophem.com</p>
              </div>
            </div>
            <div className="contact-info-item">
              <div className="contact-icon">
                <i className="bi bi-clock-fill"></i>
              </div>
              <div>
                <h4>Business Hours</h4>
                <p>Monday – Friday: 8:00 AM – 6:00 PM</p>
                <p>Saturday: 9:00 AM – 2:00 PM</p>
              </div>
            </div>
          </div>

          <div className="contact-socials">
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

        {/* Form */}
        <div className="contact-form-card">
          {submitted ? (
            <div style={{ textAlign: "center", padding: "3rem 1rem" }}>
              <i
                className="bi bi-check-circle-fill"
                style={{ fontSize: "3.5rem", color: "var(--primary)", display: "block", marginBottom: "1rem" }}
              ></i>
              <h3 style={{ color: "var(--dark)", marginBottom: "0.75rem" }}>Message Received!</h3>
              <p style={{ color: "var(--text-muted)", marginBottom: "1.5rem" }}>
                Thank you for reaching out. Our team will get back to you within 24 hours.
              </p>
              <button className="btn-primary" onClick={() => setSubmitted(false)}>
                Send Another Message
              </button>
            </div>
          ) : (
            <>
              <h3>Send Us a Message</h3>
              <form onSubmit={handleSubmit} noValidate>
                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="firstName">First Name *</label>
                    <input
                      id="firstName"
                      name="firstName"
                      type="text"
                      value={form.firstName}
                      onChange={handleChange}
                      placeholder="John"
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="lastName">Last Name *</label>
                    <input
                      id="lastName"
                      name="lastName"
                      type="text"
                      value={form.lastName}
                      onChange={handleChange}
                      placeholder="Doe"
                      required
                    />
                  </div>
                </div>
                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="email">Email Address *</label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      value={form.email}
                      onChange={handleChange}
                      placeholder="john@example.com"
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="phone">Phone Number</label>
                    <input
                      id="phone"
                      name="phone"
                      type="tel"
                      value={form.phone}
                      onChange={handleChange}
                      placeholder="+234 800 000 0000"
                    />
                  </div>
                </div>
                <div className="form-group">
                  <label htmlFor="service">Service of Interest</label>
                  <select
                    id="service"
                    name="service"
                    value={form.service}
                    onChange={handleChange}
                  >
                    <option value="">Select a service...</option>
                    <option value="road">Road Construction</option>
                    <option value="building">Building Construction</option>
                    <option value="civil">Civil Engineering</option>
                    <option value="contracting">General Contracting</option>
                    <option value="consultation">Project Consultation</option>
                    <option value="maintenance">Maintenance & Repairs</option>
                    <option value="other">Other</option>
                  </select>
                </div>
                <div className="form-group">
                  <label htmlFor="message">Your Message *</label>
                  <textarea
                    id="message"
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    placeholder="Tell us about your project, location, timeline, and any specific requirements..."
                    required
                  />
                </div>
                <button type="submit" className="btn-primary" style={{ width: "100%", justifyContent: "center" }}>
                  Send Message <i className="bi bi-send-fill"></i>
                </button>
              </form>
            </>
          )}
        </div>
      </section>

      {/* ===== MAP ===== */}
      <div className="map-section">
        <div className="map-placeholder">
          <i className="bi bi-map-fill"></i>
          <p>No. 5 Shallom Road, Gwarimpa, Abuja, FCT, Nigeria</p>
          <a
            href="https://maps.google.com/?q=Gwarimpa+Abuja+Nigeria"
            target="_blank"
            rel="noreferrer"
            className="btn-primary"
            style={{ marginTop: "0.5rem" }}
          >
            <i className="bi bi-box-arrow-up-right me-1"></i> Open in Google Maps
          </a>
        </div>
      </div>

      {/* ===== FAQ ===== */}
      <section
        style={{
          padding: "var(--section-pad)",
          background: "white",
          textAlign: "center",
        }}
      >
        <span className="section-label">FAQ</span>
        <h2 className="section-title">
          Frequently Asked <span>Questions</span>
        </h2>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            gap: "1.5rem",
            marginTop: "2rem",
            textAlign: "left",
          }}
        >
          {[
            {
              q: "How do I get a project quote?",
              a: "Fill out the contact form above or call us directly. We'll schedule a site visit and provide a detailed quotation.",
            },
            {
              q: "What types of projects do you handle?",
              a: "We handle roads, buildings, civil engineering works, general contracting, and maintenance for both government and private clients.",
            },
            {
              q: "Do you work outside Abuja?",
              a: "Yes. We have completed projects across 12 Nigerian states including Lagos, Kogi, Kaduna, Anambra, and more.",
            },
            {
              q: "How long does a typical project take?",
              a: "It depends on the scope. A residential building may take 6–12 months; road projects vary by length and complexity.",
            },
            {
              q: "Are you registered with relevant authorities?",
              a: "Yes. We are registered with COREN, CAC, and other relevant regulatory bodies in Nigeria.",
            },
            {
              q: "Do you offer post-construction maintenance?",
              a: "Yes. We offer maintenance contracts and emergency repairs for completed projects, whether built by us or others.",
            },
          ].map((faq) => (
            <div
              key={faq.q}
              style={{
                background: "var(--light-gray)",
                borderRadius: "12px",
                padding: "1.5rem",
                borderLeft: "4px solid var(--primary)",
              }}
            >
              <h4 style={{ fontSize: "1rem", fontWeight: "700", color: "var(--dark)", marginBottom: "0.5rem" }}>
                {faq.q}
              </h4>
              <p style={{ fontSize: "0.92rem", color: "var(--text-muted)", lineHeight: "1.65", margin: 0 }}>
                {faq.a}
              </p>
            </div>
          ))}
        </div>
      </section>

      <Footer />
    </>
  );
}

export default Contact;

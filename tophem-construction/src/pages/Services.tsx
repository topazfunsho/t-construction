import { NavLink } from "react-router-dom";
import Footer from "../components/Footer";
import NavBar from "../components/NavBar";
import "../App.css";

import road1 from "../assets/Road 1.jpeg";
import road2 from "../assets/road 2.jpeg";
import road3 from "../assets/road 3.jpeg";
import craneImg from "../assets/crane.jpeg";
import generalImg from "../assets/General Contractor.jpeg";
import heroImg from "../assets/hero.jpeg";

function Services() {
  const services = [
    {
      img: road1,
      num: "01",
      title: "Road Construction",
      desc:
        "We design, construct, and rehabilitate federal, state, and rural roads to the highest engineering standards. Our road projects include proper drainage systems, road markings, and lighting.",
      features: [
        "Federal & state highway construction",
        "Rural and access road development",
        "Asphalt paving and overlays",
        "Drainage and culvert installation",
        "Road markings and signage",
      ],
    },
    {
      img: generalImg,
      num: "02",
      title: "Building Construction",
      desc:
        "From residential estates to multi-storey commercial complexes, we manage every aspect of building construction — from foundation to finishing — with precision and quality.",
      features: [
        "Residential buildings & estates",
        "Commercial & retail complexes",
        "Industrial warehouses & factories",
        "Institutional buildings",
        "Renovation & retrofitting",
      ],
    },
    {
      img: craneImg,
      num: "03",
      title: "Civil Engineering",
      desc:
        "Our civil engineering division handles complex infrastructure including bridges, culverts, earth dams, retaining walls, and large-scale earthworks for government and private clients.",
      features: [
        "Bridge and flyover construction",
        "Culvert and canal works",
        "Retaining walls & slope stabilization",
        "Earthworks & land reclamation",
        "Structural assessment & repair",
      ],
    },
    {
      img: road2,
      num: "04",
      title: "General Contracting",
      desc:
        "As a licensed general contractor, we manage full project lifecycles — coordinating subcontractors, procurement, and site supervision to ensure seamless delivery.",
      features: [
        "Full project management",
        "Subcontractor coordination",
        "Materials procurement",
        "Site supervision & reporting",
        "Budget and cost control",
      ],
    },
    {
      img: road3,
      num: "05",
      title: "Project Consultation",
      desc:
        "Our expert consultants provide detailed project planning, feasibility studies, cost estimation, and engineering advice to help clients make informed decisions before breaking ground.",
      features: [
        "Feasibility studies",
        "Quantity surveying",
        "Cost estimation & BOQ",
        "Structural engineering advice",
        "Environmental impact assessment",
      ],
    },
    {
      img: heroImg,
      num: "06",
      title: "Maintenance & Repairs",
      desc:
        "We provide ongoing maintenance, periodic inspections, and emergency repair services for roads, buildings, and infrastructure previously constructed by us or other contractors.",
      features: [
        "Road resurfacing & patching",
        "Building maintenance contracts",
        "Emergency structural repairs",
        "Post-construction inspections",
        "Infrastructure audits",
      ],
    },
  ];

  return (
    <>
      <NavBar />

      {/* Page Hero */}
      <div className="page-hero">
        <div>
          <h1>Our Services</h1>
          <p>Comprehensive construction and engineering solutions across Nigeria.</p>
          <nav className="breadcrumb-nav" aria-label="breadcrumb">
            <NavLink to="/">Home</NavLink>
            <span>/</span>
            <span>Services</span>
          </nav>
        </div>
      </div>

      {/* ===== SERVICES INTRO ===== */}
      <section className="services-intro">
        <div>
          <span className="section-label">What We Offer</span>
          <h2 className="section-title">
            End-to-End <span>Construction Solutions</span>
          </h2>
          <p style={{ color: "var(--text-muted)", lineHeight: "1.8", marginBottom: "1.2rem" }}>
            Tophem Construction offers a comprehensive range of services covering every
            aspect of construction and civil engineering. Whether you're a federal agency,
            state government, private developer, or individual client, we have the capability
            and experience to deliver.
          </p>
          <p style={{ color: "var(--text-muted)", lineHeight: "1.8", marginBottom: "2rem" }}>
            Our integrated approach means a single, accountable team handles your project
            from initial consultation through to final handover and post-construction support.
          </p>
          <ul className="check-list" style={{ marginBottom: "2rem" }}>
            <li><i className="bi bi-check-circle-fill"></i> Fully licensed and COREN-registered engineers</li>
            <li><i className="bi bi-check-circle-fill"></i> Modern heavy equipment fleet</li>
            <li><i className="bi bi-check-circle-fill"></i> Experienced multidisciplinary team</li>
            <li><i className="bi bi-check-circle-fill"></i> ISO-compliant quality processes</li>
          </ul>
          <NavLink to="/contact" className="btn-primary">
            Request a Quote <i className="bi bi-arrow-right"></i>
          </NavLink>
        </div>
        <img src={craneImg} alt="Construction equipment at work" />
      </section>

      {/* ===== SERVICES GRID ===== */}
      <section className="services-full">
        <div style={{ textAlign: "center", marginBottom: "2.5rem" }}>
          <span className="section-label">All Services</span>
          <h2 className="section-title">
            Our <span>Capabilities</span>
          </h2>
        </div>
        <div className="services-full-grid">
          {services.map((s) => (
            <div className="service-full-card" key={s.num}>
              <img src={s.img} alt={s.title} />
              <div className="service-full-body">
                <div className="service-num">{s.num}</div>
                <h3>{s.title}</h3>
                <p>{s.desc}</p>
                <ul className="service-features">
                  {s.features.map((f) => (
                    <li key={f}>
                      <i className="bi bi-check-circle-fill"></i>
                      {f}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ===== PROCESS ===== */}
      <section
        style={{
          padding: "var(--section-pad)",
          background: "var(--dark)",
          color: "white",
          textAlign: "center",
        }}
      >
        <span className="section-label">How We Work</span>
        <h2 className="section-title" style={{ color: "white", marginBottom: "0.5rem" }}>
          Our <span>Process</span>
        </h2>
        <p
          className="section-subtitle"
          style={{ margin: "0 auto 3rem", color: "rgba(255,255,255,0.6)" }}
        >
          A structured, transparent process ensures consistent results on every project.
        </p>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
            gap: "2rem",
          }}
        >
          {[
            { step: "01", icon: "bi-telephone-fill", title: "Initial Consultation", desc: "We discuss your needs, goals, site conditions, and project scope." },
            { step: "02", icon: "bi-file-earmark-text-fill", title: "Design & Estimation", desc: "Our engineers prepare designs, BOQ, and a detailed cost estimate." },
            { step: "03", icon: "bi-pen-fill", title: "Contract & Planning", desc: "We sign a clear contract with milestones, timelines, and payment terms." },
            { step: "04", icon: "bi-hammer", title: "Construction", desc: "Skilled teams and modern equipment execute the project to specification." },
            { step: "05", icon: "bi-clipboard2-check-fill", title: "Quality Control", desc: "Regular inspections ensure every element meets our quality standards." },
            { step: "06", icon: "bi-key-fill", title: "Handover & Support", desc: "We deliver the completed project and remain available for aftercare." },
          ].map((p) => (
            <div
              key={p.step}
              style={{
                background: "rgba(255,255,255,0.05)",
                borderRadius: "12px",
                padding: "2rem 1.5rem",
                border: "1px solid rgba(255,255,255,0.08)",
              }}
            >
              <div
                style={{
                  width: "54px",
                  height: "54px",
                  borderRadius: "50%",
                  background: "var(--primary)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  margin: "0 auto 1.2rem",
                }}
              >
                <i className={`bi ${p.icon}`} style={{ color: "white", fontSize: "1.3rem" }}></i>
              </div>
              <div
                style={{
                  fontSize: "0.75rem",
                  fontWeight: "700",
                  letterSpacing: "2px",
                  color: "var(--primary)",
                  marginBottom: "0.4rem",
                }}
              >
                STEP {p.step}
              </div>
              <h3 style={{ fontSize: "1rem", fontWeight: "700", marginBottom: "0.5rem", color: "white" }}>
                {p.title}
              </h3>
              <p style={{ fontSize: "0.88rem", color: "rgba(255,255,255,0.6)", lineHeight: "1.6" }}>
                {p.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* ===== CTA ===== */}
      <section className="cta-banner">
        <h2>
          Ready to Start Your <span>Project?</span>
        </h2>
        <p>
          Talk to our team today. We'll help you scope, plan, and deliver your
          construction project on time and on budget.
        </p>
        <div className="cta-buttons">
          <NavLink to="/contact" className="btn-primary">
            Get a Free Quote <i className="bi bi-arrow-right"></i>
          </NavLink>
          <NavLink to="/projects" className="btn-outline">
            View Projects <i className="bi bi-grid"></i>
          </NavLink>
        </div>
      </section>

      <Footer />
    </>
  );
}

export default Services;

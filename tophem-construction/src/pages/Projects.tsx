import { useState } from "react";
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

type Project = {
  id: number;
  title: string;
  category: string;
  location: string;
  year: string;
  desc: string;
  img: string;
};

const allProjects: Project[] = [
  {
    id: 1,
    title: "Abuja Inner Ring Road Phase II",
    category: "Road",
    location: "Abuja, FCT",
    year: "2024",
    desc: "4.2 km dual carriageway construction with drainage, streetlights, and road markings.",
    img: road1,
  },
  {
    id: 2,
    title: "Lagos–Ibadan Expressway Link",
    category: "Road",
    location: "Lagos State",
    year: "2023",
    desc: "Rehabilitation and expansion of a critical 12 km highway connecting two states.",
    img: road2,
  },
  {
    id: 3,
    title: "Kogi Rural Access Roads",
    category: "Road",
    location: "Kogi State",
    year: "2022",
    desc: "Construction of 18 km of rural access roads serving 5 farming communities.",
    img: road3,
  },
  {
    id: 4,
    title: "Gwarimpa Commercial Complex",
    category: "Building",
    location: "Abuja, FCT",
    year: "2024",
    desc: "5-floor mixed-use building with commercial ground floor and 4 floors of offices.",
    img: generalImg,
  },
  {
    id: 5,
    title: "Maitama Residential Estate",
    category: "Building",
    location: "Abuja, FCT",
    year: "2023",
    desc: "12-unit luxury residential estate with full infrastructure and landscaping.",
    img: heroImg,
  },
  {
    id: 6,
    title: "Kaduna Industrial Warehouse",
    category: "Building",
    location: "Kaduna State",
    year: "2022",
    desc: "4,500 sqm industrial storage facility for a leading manufacturing company.",
    img: craneImg,
  },
  {
    id: 7,
    title: "River Niger Bridge Approach",
    category: "Civil",
    location: "Niger State",
    year: "2023",
    desc: "Construction of bridge approach roads, retaining walls, and safety barriers.",
    img: craneImg,
  },
  {
    id: 8,
    title: "Abuja Canal Rehabilitation",
    category: "Civil",
    location: "Abuja, FCT",
    year: "2022",
    desc: "Rehabilitation of 3.8 km drainage canal with concrete lining and access roads.",
    img: road1,
  },
  {
    id: 9,
    title: "Enugu–Onitsha Road Repairs",
    category: "Maintenance",
    location: "Anambra State",
    year: "2024",
    desc: "Emergency patching, resurfacing, and drainage clearing on a major trade route.",
    img: road3,
  },
];

const categories = ["All", "Road", "Building", "Civil", "Maintenance"];

function Projects() {
  const [active, setActive] = useState("All");

  const filtered = active === "All" ? allProjects : allProjects.filter((p) => p.category === active);

  return (
    <>
      <NavBar />

      {/* Page Hero */}
      <div className="page-hero">
        <div>
          <h1>Our Projects</h1>
          <p>A portfolio of infrastructure excellence across Nigeria.</p>
          <nav className="breadcrumb-nav" aria-label="breadcrumb">
            <NavLink to="/">Home</NavLink>
            <span>/</span>
            <span>Projects</span>
          </nav>
        </div>
      </div>

      {/* ===== STATS ===== */}
      <div className="stats-bar">
        <div className="stat-item">
          <div><span className="stat-number">150</span><span className="stat-suffix">+</span></div>
          <p>Total Projects</p>
        </div>
        <div className="stat-item">
          <div><span className="stat-number">12</span></div>
          <p>States Covered</p>
        </div>
        <div className="stat-item">
          <div><span className="stat-number">60</span><span className="stat-suffix">+</span></div>
          <p>km of Roads Built</p>
        </div>
        <div className="stat-item">
          <div><span className="stat-number">80</span><span className="stat-suffix">+</span></div>
          <p>Buildings Delivered</p>
        </div>
      </div>

      {/* ===== FILTER ===== */}
      <div className="projects-filter">
        {categories.map((cat) => (
          <button
            key={cat}
            className={`filter-btn ${active === cat ? "active" : ""}`}
            onClick={() => setActive(cat)}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* ===== PROJECTS GRID ===== */}
      <section className="projects-full">
        <div className="projects-full-grid">
          {filtered.map((project) => (
            <div className="project-full-card" key={project.id}>
              <img src={project.img} alt={project.title} />
              <div className="project-full-body">
                <span className="project-tag">{project.category}</span>
                <h3>{project.title}</h3>
                <p>{project.desc}</p>
                <div className="project-meta">
                  <span>
                    <i className="bi bi-geo-alt-fill"></i>
                    {project.location}
                  </span>
                  <span>
                    <i className="bi bi-calendar-fill"></i>
                    {project.year}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
        {filtered.length === 0 && (
          <div style={{ textAlign: "center", padding: "4rem", color: "var(--text-muted)" }}>
            <i className="bi bi-folder2-open" style={{ fontSize: "3rem", display: "block", marginBottom: "1rem" }}></i>
            No projects found in this category.
          </div>
        )}
      </section>

      {/* ===== CTA ===== */}
      <section className="cta-banner">
        <h2>
          Want to See Your Project <span>Here?</span>
        </h2>
        <p>
          Contact us today to discuss your next construction or infrastructure project.
          We'd love to add it to our portfolio.
        </p>
        <div className="cta-buttons">
          <NavLink to="/contact" className="btn-primary">
            Get in Touch <i className="bi bi-arrow-right"></i>
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

export default Projects;

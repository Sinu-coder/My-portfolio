import React, { useState } from "react";
import "../assets/css/Navbar.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import { Link } from "react-router-dom";
import logo from "../assets/img/rabi-dev.png";

const items = ["Home", "About", "Education", "Skills", "Projects", "Resume"];

export default function Navbar() {
  const [darkMode, setDarkMode] = useState(false);
  const [logoOpen, setLogoOpen] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    document.body.classList.toggle("dark-mode");
  };
  const closeNavbar = () => {
  const navbar = document.getElementById("navbarNav");
  if (navbar.classList.contains("show")) {
    new window.bootstrap.Collapse(navbar).hide();
  }
};


  return (
    <>
      <nav className="navbar navbar-expand-lg custom-navbar">
        <div className="container-fluid">

          {/* LOGO */}
          <Link
            className="navbar-brand fw-bold brand-text"
            to="/"
            onClick={(e) => {
              e.preventDefault();   // stop navigation
              setLogoOpen(true);    // open modal
            }}
          >
            <img src={logo} alt="logo" className="img-fluid logo-img" />
          </Link>

          {/* TOGGLER */}
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          {/* MENU */}
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto nav-gap align-items-center">
              {items.map((item) => {
                const path = item === "Home" ? "/" : `/${item.toLowerCase()}`;

                if (item === "Resume") {
                  return (
                    <li key={item} className="nav-item">
                      <a
  className="nav-link nav-a underline-hover"
  href="/resume.pdf"
  target="_blank"
  rel="noopener noreferrer"
  onClick={closeNavbar}
>
  {item}
</a>
                    </li>
                  );
                }

                return (
                  <li key={item} className="nav-item">
                    <Link className="nav-link nav-a underline-hover" to={path} onClick={closeNavbar}>
                    {item}
                    </Link>
                  </li>
                );
              })}

              {/* DARK MODE */}
              <li className="nav-item d-flex align-items-center">
                <button className="dark-toggle-btn" onClick={toggleDarkMode}>
                  {darkMode ? (
                    <i className="bi bi-sun-fill"></i>
                  ) : (
                    <i className="bi bi-moon-stars-fill"></i>
                  )}
                </button>
              </li>
            </ul>
          </div>

        </div>
      </nav>

      {/* LOGO MODAL */}
      {logoOpen && (
        <div className="logo-modal-overlay" onClick={() => setLogoOpen(false)}>
          <div className="logo-modal-box" onClick={(e) => e.stopPropagation()}>
            <span className="logo-close" onClick={() => setLogoOpen(false)}>
              &times;
            </span>
            <img src={logo} alt="logo-large" className="logo-modal-img" />
          </div>
        </div>
      )}
    </>
  );
}

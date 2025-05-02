// src/components/Navbar.js
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark shadow-sm fixed-top">
      <div className="container">
        {/* Brand */}
        <a className="navbar-brand fw-bold fs-4" href="#about">
          <i className="fas fa-user-circle me-2"></i>Srinivasan 
        </a>

        {/* Toggler */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Navigation Links */}
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <a className="nav-link px-3" href="#about">About</a>
            </li>
            <li className="nav-item">
              <a className="nav-link px-3" href="#skills">Skills</a>
            </li>
            <li className="nav-item">
              <a className="nav-link px-3" href="#projects">Projects</a>
            </li>
            <li className="nav-item">
              <a className="nav-link px-3" href="#education">Education</a>
            </li>
            <li className="nav-item">
              <a className="nav-link px-3" href="#contact">Contact</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;

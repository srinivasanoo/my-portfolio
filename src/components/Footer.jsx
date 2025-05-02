import React from 'react';

const Footer = () => {
  return (
    <footer className="mt-5 py-4">
      <div className="container">
        {/* Social Media Links */}
        <div className="d-flex justify-content-center mb-3 footer-links">
          <a href="https://github.com/srinivasanoo" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-github"></i>
          </a>
          <a href="https://linkedin.com/in/srinivasan-b" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-linkedin"></i>
          </a>
          <a href="mailto:srinivasanb656@gmail.com">
            <i className="fas fa-envelope"></i>
          </a>
        </div>

        {/* Navigation Links */}
        <div className="d-flex justify-content-center mb-4 footer-nav">
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#projects">Projects</a>
          <a href="#education">Education</a>
          <a href="#contact">Contact</a>
        </div>

        {/* Copyright */}
        <div className="copyright text-center">
          Copyright © 2025 Srinivasan B. All Rights Reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;

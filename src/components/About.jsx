import React from 'react';
import 'animate.css';

const About = () => {
  return (
    <>
      <section className="container py-5 mt-5" id="about">
        <div className="row align-items-center py-5 animate__animated animate__fadeInUp">
          {/* Left Terminal Column */}
          <div className="col-lg-4 mb-4 mb-lg-0">
            <div
              className="profile-terminal p-4 shadow-lg"
              style={{
                backgroundColor: '#0f172a',
                borderRadius: '12px',
                color: '#e2e8f0',
                fontFamily: "'Fira Code', monospace",
                border: '1px solid #334155',
                position: 'relative',
              }}
            >
              {/* Terminal Header */}
              <div
                className="d-flex align-items-center mb-3"
                style={{
                  backgroundColor: '#1e293b',
                  padding: '0.5rem 1rem',
                  borderRadius: '8px 8px 0 0',
                }}
              >
                <span className="me-2" style={{ color: '#f87171' }}>●</span>
                <span className="me-2" style={{ color: '#facc15' }}>●</span>
                <span style={{ color: '#4ade80' }}>●</span>
              </div>

              {/* Code Simulation */}
              <div style={{ padding: '1rem', backgroundColor: '#0f172a', borderRadius: '0 0 8px 8px' }}>
                <code style={{ display: 'block', color: '#38bdf8' }}>&gt;&gt;&gt; print("Hello World!")</code>
                <code style={{ display: 'block', color: '#e2e8f0' }}>Hello World!</code>
                <code style={{ display: 'block', color: '#38bdf8' }}>&gt;&gt;&gt; def fullstack_dev():</code>
                <code style={{ display: 'block', color: '#94a3b8' }}>
                  &nbsp;&nbsp;&nbsp;&nbsp;return <span style={{ color: '#facc15' }}>"React | Node.js | Spring Boot"</span>
                </code>
                <code style={{ display: 'block', color: '#38bdf8' }}>&gt;&gt;&gt; fullstack_dev()</code>
                <code style={{ display: 'block', color: '#facc15' }}>'React | Node.js | Spring Boot'</code>
              </div>
            </div>
          </div>

          {/* Right Content Column */}
          <div className="col-lg-8">
            <h1 className="name animate__animated animate__fadeInRight">Srinivasan</h1>
            <h2 className="title mb-3 animate__animated animate__fadeInRight animate__delay-1s">
              Full Stack Web Developer
            </h2>
            <p className="bio mb-4 animate__animated animate__fadeInRight animate__delay-2s">
              Full Stack Developer with hands-on experience in building web applications using React, Node.js,
              and Spring Boot. Completed a Full Stack Web Development course at Tata STRIVE, Bengaluru.
              Developed real-world projects like <strong>Mitra</strong> and a crowdfunding donation UI.
              Eager to build user-centered digital solutions and continuously learn modern technologies.
            </p>
            <div className="social-links d-flex gap-3 animate__animated animate__fadeIn animate__delay-3s">
              <a href="https://github.com/srinivasanoo" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-github "></i>
              </a>
              <a href="https://linkedin.com/in/srinivasan-b" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-linkedin "></i>
              </a>
              <a href="mailto:srinivasanb656@gmail.com">
                <i className="fas fa-envelope "></i>
              </a>
            </div>
          </div>
        </div>
      </section>

      <div className="divider"></div>
    </>
  );
};

export default About;

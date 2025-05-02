import React from 'react';

const projectList = [
  {
    title: 'Mitra – A Charity Donation Platform',
    tech: ['React', 'Node.js', 'Spring Boot'],
    description: `Created a web-based platform at Tata STRIVE to support secure donations for old age homes.
    Built features like user registration, real-time donation tracking, and a secure payment gateway.
    Used React for the frontend, Spring Boot and Node.js for the backend, with Bootstrap for styling.`,
    date: 'Dec 2024 - Mar 2025',
  },
  {
    title: 'Personal Portfolio Website',
    tech: ['React', 'Bootstrap'],
    description: `Built a responsive portfolio using React to showcase my skills and projects.
    Used components and hooks to create an interactive UI.
    Structured into sections like About, Projects, and Contact.`,
    date: 'Mar 2025',
  },
  {
    title: 'Sid Quick – Online Medical Consultancy',
    tech: ['Bootstrap', 'HTML', 'CSS'],
    description: `Created a medical consultation platform for quick disease identification and doctor search.
    Helps users connect with nearby healthcare professionals based on symptoms or needs.
    Built to support fast access to online medical assistance and improve healthcare outreach.`,
    date: 'Dec 2022 - Mar 2023',
  },
  {
    title: 'Intelligent Vehicle Breakdown Assistance Management',
    tech: ['Java', 'MySQL'],
    description: `Built a system that allows users to register vehicle issues and request breakdown help.
    Connects users with nearby service providers to reduce wait time and improve response.
    Focused on enhancing customer experience in emergency roadside situations.`,
    date: 'Jan 2024 - Mar 2024',
  },
];

const Projects = () => {
  return (
    <>
      <section className="container py-4" id="projects">
        <h2 className="section-title mb-2">Projects</h2>
        <p className="section-subtitle mb-4">Check out my latest work</p>
        <div className="row g-4">
          {projectList.map((project, index) => (
            <div className="col-md-6" key={index}>
              <div className="project-card p-3 h-100 border rounded bg-dark text-white">
                <div className="card-body">
                  <h4 className="card-title">{project.title}</h4>
                  <div className="mb-3">
                    {project.tech.map((tech, i) => (
                      <span key={i} className="badge bg-primary me-2">{tech}</span>
                    ))}
                  </div>
                  <p className="card-text">{project.description}</p>
                  <p className="text-white mt-2">{project.date}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <div className="divider"></div>
    </>
  );
};

export default Projects;

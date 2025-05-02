import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'animate.css';

const skillData = [
  {
    category: 'Front End',
    border: 'primary',
    skills: [
      { name: 'React', icon: 'fab fa-react' },
      { name: 'HTML', icon: 'fab fa-html5' },
      { name: 'CSS', icon: 'fab fa-css3-alt' },
      { name: 'Bootstrap', icon: 'fab fa-bootstrap' },
    ],
  },
  {
    category: 'Back End',
    border: 'success',
    skills: [
      { name: 'Node.js', icon: 'fab fa-node-js' },
      { name: 'Spring Boot', icon: 'fas fa-leaf' }, // Using a leaf as a placeholder
      { name: 'Java', icon: 'fab fa-java' },         // Use if you’ve included Java icon support
      { name: 'REST APIs', icon: 'fas fa-cogs' },    // Gear/cogs for APIs
    ],
  },
  {
    category: 'Database',
    border: 'warning',
    skills: [
      { name: 'MySQL', icon: 'fas fa-database' },
      { name: 'PostgreSQL', icon: 'fas fa-database' },
    ],
  },
  {
    category: 'Tools & Others',
    border: 'info',
    skills: [
      { name: 'Git', icon: 'fab fa-git-alt' },
      { name: 'GitHub', icon: 'fab fa-github' },
      { name: 'Figma', icon: 'fab fa-figma' },
    ],
  },
];

const Skills = () => {
  return (
    <>
      <section className="container py-4" id="skills">
        <h2 className="section-title mb-2 text-center">Technical Skills</h2>
        <p className="section-subtitle mb-4 text-center">
          My expertise and technologies I work with
        </p>

        {skillData.map(({ category, skills, border }) => (
          <div className="skill-category mb-5" key={category}>
            <h4 className="mb-3 text-center">{category}</h4>
            <div className="d-flex justify-content-center gap-3 flex-wrap">
              {skills.map(({ name, icon }) => (
                <div
                  key={name}
                  className={`skill-card text-center bg-dark text-white rounded p-3 h-100 border border-${border}`}
                >
                  <i className={`${icon} fa-2x mb-2`}></i>
                  <p className="mb-0">{name}</p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </section>

      <div className="divider"></div>
    </>
  );
};

export default Skills;

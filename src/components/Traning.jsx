import React from 'react';
import TATAStriveJuniorFullStackJavaDeveloper from '../training/TATAStriveJuniorFullStackJavaDeveloper.png';

const Training = () => {
  return (
    <section className="container py-4" id="training">
      <h2 className="section-title text-center mb-2">Professional Training</h2>
      <p className="section-subtitle text-center">Specialized programs and hands-on experience</p>
      <div className="row">
        <div className="col-lg-8 mx-auto">
          <div className="education-card mb-4 text-center">
            <h4>Tata STRIVE, Bengaluru</h4>
            <h5>Full Stack Java Development Cohort</h5>
            <p className="year">Professional Training</p>
            <img
              src={TATAStriveJuniorFullStackJavaDeveloper}
              alt="Tata STRIVE Junior Full Stack Java Developer Certificate"
              className="img-fluid mt-3"
              style={{ maxHeight: '300px' }}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Training;

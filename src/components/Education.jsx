import React from 'react';

const educationList = [
  {
    institution: 'Er.Perumal Manimekali College of Engineering',
    degree: 'B.Tech - Information Technology',
    year: '2020 - 2024',
    grade: 'CGPA: 8.03',
  },
  {
    institution: 'Islamiah Higher Secondary School',
    degree: '12th - MPCB',
    year: '2019 - 2020',
    grade: 'Percentage: 67%',
  },
  {
    institution: 'Islamiah Higher Secondary School',
    degree: '10th',
    year: '2017 - 2018',
    grade: 'Percentage: 70%',
  },
];

const Education = () => {
  return (
    <section className="container py-4" id="education">
      <h2 className="section-title text-center mb-2">Education</h2>
      <p className="section-subtitle text-center">My academic journey</p>
      <div className="row">
        <div className="col-lg-10 mx-auto">
          {educationList.map((edu, index) => (
            <div className="education-card mb-4" key={index}>
              <h4>{edu.institution}</h4>
              <h5>{edu.degree}</h5>
              <p className="year">{edu.year}</p>
              <p className="grade">{edu.grade}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;

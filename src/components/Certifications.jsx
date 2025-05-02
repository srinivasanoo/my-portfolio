import React from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

import AnalyzeDatawithSQL from '../certifications/AnalyzeDatawithSQL.jpeg';
import Bootstrsp from '../certifications/Bootstrap.jpeg';
import CommandLine from '../certifications/CommandLine.jpeg';
import CreateRESTAPIswithSpring from '../certifications/CreateRESTAPIswithSpring.jpeg';
import CSS from '../certifications/CSS.jpeg';
import Git from '../certifications/Git.jpeg';
import GitGitHub from '../certifications/GitGitHub.jpeg';
import HTML from '../certifications/HTML.jpeg';
import Java from '../certifications/Java.jpeg';
import JavaClassesMethodsnheritancePolymorphism from '../certifications/JavaClassesMethodsnheritancePolymorphism.jpeg';
import JavaDebugging from '../certifications/JavaDebugging.jpeg';
import JavaIntermediate from '../certifications/JavaIntermediate.jpeg';
import JavaInheritanceandPolymorphism from '../certifications/JavaInheritanceandPolymorphism.jpeg';
import JavaIntermediateGenericsCollections from '../certifications/JavaIntermediateGenericsCollections.jpeg';
import JavaLoopsandArrays from '../certifications/JavaLoopsandArrays.jpeg';
import JavaOOP from '../certifications/JavaOOP.jpeg';
import JavaScript from '../certifications/JavaScript.jpeg';
import JavaScriptAsychronous from '../certifications/JavaScriptAsychronous.jpeg';
import JavaScriptUnitTesting from '../certifications/JavaScriptUnitTesting.jpeg';
import Nodejs from '../certifications/Nodejs.jpeg';
import Reactjs from '../certifications/Reactjs.jpeg';
import Spring from '../certifications/Spring.jpeg';
import SpringBuilding from '../certifications/SpringBuilding.jpeg';
import SpringFundamentalsandControllers from '../certifications/SpringFundamentalsandControllers.jpeg';
import SQL from '../certifications/SQL.jpeg';
import UIandUX from '../certifications/UIandUX.jpeg';

const certifications = [
  { name: 'Analyze Data with SQL', image: AnalyzeDatawithSQL },
  { name: 'Bootstrap', image: Bootstrsp },
  { name: 'Command Line', image: CommandLine },
  { name: 'Create REST APIs with Spring', image: CreateRESTAPIswithSpring },
  { name: 'CSS', image: CSS },
  { name: 'Git', image: Git },
  { name: 'Git & GitHub', image: GitGitHub },
  { name: 'HTML', image: HTML },
  { name: 'Java', image: Java },
  { name: 'Java Classes, Methods, Inheritance & Polymorphism', image: JavaClassesMethodsnheritancePolymorphism },
  { name: 'Java Debugging', image: JavaDebugging },
  { name: 'Java Intermediate', image: JavaIntermediate },
  { name: 'Java Inheritance and Polymorphism', image: JavaInheritanceandPolymorphism },
  { name: 'Java Intermediate Generics & Collections', image: JavaIntermediateGenericsCollections },
  { name: 'Java Loops & Arrays', image: JavaLoopsandArrays },
  { name: 'Java OOP', image: JavaOOP },
  { name: 'JavaScript', image: JavaScript },
  { name: 'JavaScript Asynchronous', image: JavaScriptAsychronous },
  { name: 'JavaScript Unit Testing', image: JavaScriptUnitTesting },
  { name: 'Node.js', image: Nodejs },
  { name: 'React.js', image: Reactjs },
  { name: 'Spring', image: Spring },
  { name: 'Spring Building', image: SpringBuilding },
  { name: 'Spring Fundamentals & Controllers', image: SpringFundamentalsandControllers },
  { name: 'SQL', image: SQL },
  { name: 'UI & UX', image: UIandUX }
];

const responsive = {
  superLargeDesktop: { breakpoint: { max: 4000, min: 1280 }, items: 5 },
  desktop: { breakpoint: { max: 1280, min: 1024 }, items: 4 },
  tablet: { breakpoint: { max: 1024, min: 768 }, items: 3 },
  mobile: { breakpoint: { max: 768, min: 0 }, items: 2 }
};

const Certifications = () => {
  return (
    <section className="container py-4" id="certifications">
      <h2 className="section-title text-center mb-2">Certifications</h2>
      <p className="section-subtitle text-center">Courses and certifications completed</p>
      <div className="education-card text-center mb-4">
        <h4>Codecademy</h4>
        <p>Completed training in: React, Java, JavaScript, SQL, HTML, CSS, Git & GitHub, Spring Boot, UI/UX, and more.</p>
      </div>

      <Carousel
        responsive={responsive}
        infinite={true}
        autoPlay={true}
        autoPlaySpeed={3000}
        arrows={true} // ← This enables navigation buttons
        keyBoardControl={true}
        showDots={true}
        containerClass="carousel-container"
        itemClass="carousel-item-padding-40-px"
      >
        {certifications.map((cert, index) => (
          <div key={index} style={{ padding: '10px', textAlign: 'center' }}>
            <img
              src={cert.image}
              alt={cert.name}
              style={{ width: '100%', height: '150px', objectFit: 'contain', borderRadius: '8px' }}
            />
            <p style={{ marginTop: '8px', fontSize: '14px' }}>{cert.name}</p>
          </div>
        ))}
      </Carousel>
    </section>
  );
};

export default Certifications;

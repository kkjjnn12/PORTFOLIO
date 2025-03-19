import React from 'react';
import './About.css';

// Ensure the correct path

function About() {
  return (
    <div className="about">
      <div className="animated-bg"></div>
      <div className="about-wrapper">
        <div className="about-image">
          <img src={ "./Image/image.jpg"} // Correct way to use an imported image
            alt="PRAKASH"
          />
        </div>
        <div className="about-content">
          <h1 className="animated-text">About Me</h1>
          <p>
            Hi, I'm a passionate developer with experience in building web applications.
            I specialize in creating responsive and user-friendly designs. My journey
            as a developer has been fueled by a love for problem-solving and learning
            new technologies.
          </p>
          <button className="cta-button">View My Work</button>
        </div>
      </div>
    </div>
  );
}

export default About;

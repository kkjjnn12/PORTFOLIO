import React, { useState } from 'react';
import './Skill.css';

const Skills = () => {
  const [activeSkill, setActiveSkill] = useState(null);

  const skills = [
    { name: 'HTML', percentage: 90, icon: './Image/html.png' },
    { name: 'CSS', percentage: 85, icon: './Image/css.png' },
    { name: 'Bootstrap', percentage: 80, icon: './Image/bootstrap.png' },
    { name: 'JavaScript', percentage: 75, icon: './Image/java-script.png' },
    { name: 'jQuery', percentage: 70, icon: './Image/jquery.png' },
    { name: 'React', percentage: 85, icon: './Image/physics.png' },
    { name: 'Python', percentage: 80, icon: './Image/python.png' },
    { name: 'SQL', percentage: 75, icon: './Image/sql.png' },
    { name: 'Django', percentage: 70, icon: './Image/django.png' }
  ];

  const handleSkillClick = (skill) => {
    setActiveSkill(skill);  // Trigger animation on click
  };

  return (
    <section className="skills-container my-5">
      {/* Bubbles in the background */}
      <div className="bubbles">
        <div className="bubble"></div>
        <div className="bubble"></div>
        <div className="bubble"></div>
        <div className="bubble"></div>
        <div className="bubble"></div>
        <div className="bubble"></div>
        <div className="bubble"></div>
        <div className="bubble"></div>
        <div className="bubble"></div>
        <div className="bubble"></div>
      </div>

      <header className="text-center">
        <h3 className="title">My Skills</h3>
      </header>

      <div className="row">
        {/* Left side - Technical Skills */}
        <div className="col-md-6">
          {skills.slice(0, 5).map((skill, index) => (
            <div className="skill" onClick={() => handleSkillClick(skill.name)} key={index}>
              <img src={skill.icon} alt={skill.name} className="skill-icon" />
              <p>{skill.name}</p>
              <div className="progress">
                <div
                  className={`progress-bar ${activeSkill === skill.name ? 'animate' : ''}`}
                  style={{ width: `${skill.percentage}%` }}
                >
                  <span

                    className={`progress-percentage ${activeSkill === skill.name ? 'purple' : ''}`}
                  >
                    {activeSkill === skill.name ? `${skill.percentage}%` : ''}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Right side - Technical Skills */}
        <div className="col-md-6">
          {skills.slice(5).map((skill, index) => (
            <div className="skill" onClick={() => handleSkillClick(skill.name)} key={index}>
              <img src={skill.icon} alt={skill.name} className="skill-icon" />
              <p>{skill.name}</p>
              <div className="progress">
                <div
                  className={`progress-bar ${activeSkill === skill.name ? 'animate' : ''}`}
                  style={{ width: `${skill.percentage}%` }}
                >
                  <span
                    className={`progress-percentage ${activeSkill === skill.name ? 'purple' : ''}`}
                  >
                    {activeSkill === skill.name ? `${skill.percentage}%` : ''}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
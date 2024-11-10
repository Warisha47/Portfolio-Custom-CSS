import '../../style/Skills.css';
import React from 'react';
import { IoArrowForwardCircleSharp } from 'react-icons/io5';


const Skills = () => {
  return (
    <div id='skills'>
      <section className="skills-section">
        <div className="container">
          <div className="header">
            <h2 className="title">Skills</h2>
            <h1 className="subtitle">My Skills</h1>
          </div>
          <div className="skills-wrapper">
            {/* Skill Item */}
            <div className="skill-item">
              <div className="skill-content">
                <div className="icon-header">
                  <div className="icon">
                    <IoArrowForwardCircleSharp />
                  </div>
                  <h2 className="skill-title">HTML</h2>
                </div>
                <div className="progress">
                  <div className="progress-bar partial"></div>
                  <p className="percentage">70%</p>
                </div>
              </div>
            </div>

            {/* Skill Item */}
            <div className="skill-item">
              <div className="skill-content">
                <div className="icon-header">
                  <div className="icon">
                    <IoArrowForwardCircleSharp />
                  </div>
                  <h2 className="skill-title">CSS</h2>
                </div>
                <div className="progress">
                  <div className="progress-bar half"></div>
                  <p className="percentage">60%</p>
                </div>
              </div>
            </div>

            {/* Skill Item */}
            <div className="skill-item">
              <div className="skill-content">
                <div className="icon-header">
                  <div className="icon">
                    <IoArrowForwardCircleSharp />
                  </div>
                  <h2 className="skill-title">JavaScript/TypeScript</h2>
                </div>
                <div className="progress">
                  <div className="progress-bar "></div>
                  <p className="percentage">50%</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Skills;

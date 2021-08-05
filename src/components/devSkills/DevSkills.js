import React from "react";
import { skillsSection } from "../../portfolio";
import { Fade } from "react-reveal";
export default function DevSkills() {
  return (
    <div>
      <div className="software_skills_main">
        <Fade>
          <div className="skill_card">
            <h2>Frontend Skills</h2>
            <ul className="dev-icons">
              {skillsSection.frontendSkills.map((skills, i) => {
                return (
                  <li
                    key={i}
                    className="software_skill_inline"
                    name={skills.skillName}
                  >
                    <i className={skills.fontAwesomeClassname}></i>
                    <p>{skills.skillName}</p>
                  </li>
                );
              })}
            </ul>
          </div>
        </Fade>
        <Fade>
          <div className="skill_card">
            <h2>backend Skills</h2>
            <ul className="dev_icons">
              {skillsSection.backendSkills.map((skills, i) => {
                return (
                  <li
                    key={i}
                    className="software_skill_inline"
                    name={skills.skillName}
                  >
                    <i className={skills.fontAwesomeClassname}></i>
                    <p>{skills.skillName}</p>
                  </li>
                );
              })}
            </ul>
          </div>
        </Fade>
        <Fade>
          <div className="skill_card">
            <h2>everything inbetween</h2>
            <ul className="dev_icons">
              {skillsSection.otherSkills.map((skills, i) => {
                return (
                  <li
                    key={i}
                    className="software_skill_inline"
                    name={skills.skillName}
                  >
                    <i className={skills.fontAwesomeClassname}></i>
                    <p>{skills.skillName}</p>
                  </li>
                );
              })}
            </ul>
          </div>
        </Fade>
      </div>
    </div>
  );
}

import React from "react";
import { skillsSection } from "../../portfolio";
import { Fade } from "react-reveal";
export default function DevSkills() {
  return (
    <div>
      <div className="software_skills_main">
        {/* <Fade>
          <div className="skill_card">
            <h2>Skills</h2>
            <ul className="dev_icons">
              {skillsSection.devSkills.map((skills, i) => {
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
        </Fade> */}
        <Fade>
          <div className="skill_cards">
            //sort cards by area
            <div className="title">
              <h1>{skillsSection.devSkills.area}</h1>
            </div>
            <br />
            <div className="body">
              <ul className="dev_icons">
                {skillsSection.devSkills.map((skills, i) => {
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
          </div>
        </Fade>
      </div>
    </div>
  );
}

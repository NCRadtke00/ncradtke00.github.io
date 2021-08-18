import React from "react";
import { skillsSection } from "../../portfolio";
import { Fade } from "react-reveal";
import "./DevSkills.css";
export default function DevSkills() {
  return (
    <div>
      <div className="software_skills_main">
        <Fade>
          <div className="skill_cards">
            <div className="title">Frontend, BackEnd, Other</div>
            <br />
            <div className="body">
              <ul className="dev_icons">
                {skillsSection.devskills.map((skills, i) => {
                  return (
                    <li
                      key={i}
                      className="software_skill_inline"
                      name={skills.className}
                    >
                      <i className={skills.fontAwesomeClassname}></i>
                      <p>{skills.className}</p>
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

import React, { useContext } from "react";
import "./Skills.css";
import { skillsSection } from "../../portfolio";
import { Fade } from "react-reveal";
import StyleContext from "../../contexts/StyleContext";

export default function Skills() {
  const { isDark } = useContext(StyleContext);
  if (!skillsSection.display) {
    return null;
  }
  return (
    <div className={isDark ? "dark_mode main" : "main"} id="skills">
      <div className="skills_main">
        <Fade right duration={1000}>
          <div className="skills_text">
            <h1
              className={isDark ? "dark-mode skills_heading" : "skills_heading"}
            >
              {skillsSection.title}
            </h1>
            <p
              className={
                isDark
                  ? "dark-mode subTitle skills_text_subtitle"
                  : "subTitle skills_text_subtitle"
              }
            >
              {skillsSection.subTitle}
            </p>
            <div>
              {skillsSection.skills.map((skills, i) => {
                return (
                  <p
                    key={i}
                    className={
                      isDark
                        ? "dark-mode subTitle skills_text"
                        : "subTitle skills_text"
                    }
                  >
                    {skills}
                  </p>
                );
              })}
            </div>
            <p>bring in different skills (frontend, backend,db)</p>
          </div>
        </Fade>
      </div>
    </div>
  );
}

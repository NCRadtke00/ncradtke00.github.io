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
      <div className="skills_main"></div>
    </div>
  );
}

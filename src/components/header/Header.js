import React, { useContext } from "react";
import "./Header.css";
import Headroom from "react-headroom";
import {
  intro,
  workExperiences,
  skillsSection,
  myProjects,
  educationInfo,
} from "../../portfolio";
import Toggle from "../toggle/Toggle";
import StyleContext from "../../contexts/StyleContext";

function Header() {
  const { isDark } = useContext(StyleContext);
  const viewExperience = workExperiences.display;
  const viewEducation = educationInfo.display;
  const viewSkills = skillsSection.display;
  const viewMyProjects = myProjects.display;
  return (
    <Headroom>
      <header className={isDark ? "dark_menu header" : "header"}>
        <a href="/" className="logo">
          <span className="logo_name">{intro.username}</span>
        </a>
        <input className="menu_btn" type="checkbox" id="menu_btn" />
        <label
          className="menu_icon"
          htmlFor="menu_btn"
          style={{ color: "white" }}
        >
          <span className={isDark ? "navicon navicon_dark" : "navicon"}></span>
        </label>
        <ul className={isDark ? "dark_menu menu" : "menu"}>
          <li>
            <a href="#">
              <Toggle />
            </a>
          </li>
          <li>
            <a href="#contact">Contact Me</a>
          </li>
          {viewExperience && (
            <li>
              <a href="#experience">Work Experiences</a>
            </li>
          )}
          {viewEducation && (
            <li>
              <a href="#education">Education</a>
            </li>
          )}
          {viewSkills && (
            <li>
              <a href="#skills">Skills</a>
            </li>
          )}

          {viewMyProjects && (
            <li>
              <a href="#myprojects">My Projects</a>
            </li>
          )}
        </ul>
      </header>
    </Headroom>
  );
}

export default Header;

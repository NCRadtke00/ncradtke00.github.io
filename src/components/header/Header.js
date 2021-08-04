import React, { useContext } from "react";
import "./Header.css";
import Headroom from "react-headroom";
import {
  greeting,
  workExperiences,
  skillsSection,
  openSource,
  myProjects,
} from "../../portfolio";

function Header() {
  const viewExperience = workExperiences.display;
  const viewOpenSource = openSource.display;
  const viewSkills = skillsSection.display;
  const viewMyProjects = myProjects.display;
  return (
    <Headroom>
      <header className="header">
        <a href="/" className="logo">
          <span className="logo_name">{greeting.username}</span>
        </a>
        <input className="menu_btn" type="checkbox" id="menu_btn" />
        <label
          className="menu_icon"
          htmlFor="menu_btn"
          style={{ color: "white" }}
        >
          <span className="navicon"></span>
        </label>
        <ul className="menu">
          {viewSkills && (
            <li>
              <a href="#skills">Skills</a>
            </li>
          )}
          {viewExperience && (
            <li>
              <a href="#experience">Work Experiences</a>
            </li>
          )}
          {viewOpenSource && (
            <li>
              <a href="#opensource">Open Source</a>
            </li>
          )}
          {viewMyProjects && (
            <li>
              <a href="#myprojects">My Projects</a>
            </li>
          )}
          <li>
            <a href="#contact">Contact Me</a>
          </li>
          <li>
            <a href="#">{/* <ToggleSwitch /> */}</a>
          </li>
        </ul>
      </header>
    </Headroom>
  );
}

export default Header;

import React, { useContext } from "react";
import "./Header.css";
import Headroom from "react-headroom";
import {
  greeting,
  workExperiences,
  skillsSection,
  githubRepo,
  myProjects,
} from "../../portfolio";
import Toggle from "../toggle/Toggle";
import StyleContext from "../../contexts/StyleContext";

function Header() {
  const { isDark } = useContext(StyleContext);
  const viewExperience = workExperiences.display;
  const viewGithubRepo = githubRepo.display;
  const viewSkills = skillsSection.display;
  const viewMyProjects = myProjects.display;
  return (
    <Headroom>
      <header className={isDark ? "dark_menu header" : "header"}>
        <a href="/" className="logo">
          <span className="logo_name">{greeting.username}</span>
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
            <a href="#contact">Contact Me</a>
          </li>
          {viewExperience && (
            <li>
              <a href="#experience">Work Experiences</a>
            </li>
          )}
          {viewGithubRepo && (
            <li>
              <a href="#githubrepo">Sorce Code</a>
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
          <li>
            <a href="#">
              <Toggle />
            </a>
          </li>
        </ul>
      </header>
    </Headroom>
  );
}

export default Header;

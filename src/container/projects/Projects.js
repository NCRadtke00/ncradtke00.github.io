import React, { useContext } from "react";
import "./Projects.css";
import { myProjects } from "../../portfolio";
import { Fade } from "react-reveal";
import StyleContext from "../../contexts/StyleContext";

export default function Projects() {
  function openProjectInNewWindow(url) {
    var win = window.open(url, "_blank");
    win.focus();
  }
  const { isDark } = useContext(StyleContext);
  if (!myProjects.display) {
    return null;
  }
  return (
    <Fade bottom duration={1000} distance="20px">
      <div className="main" id="projects">
        <div>
          <h1 className="skills_heading">{myProjects.title}</h1>
          <p
            className={
              isDark
                ? "dark_mode project_subtitle"
                : "subTitle project_subtitle"
            }
          >
            {myProjects.subtitle}
          </p>

          <div className="projects_container">
            {myProjects.projects.map((project, i) => {
              return (
                <div
                  key={i}
                  className={
                    isDark
                      ? "dark_mode project_card project_card_dark"
                      : "project_card project_card_light"
                  }
                >
                  {project.image ? (
                    <div className="project_image">
                      <img
                        src={project.image}
                        alt={project.projectName}
                        className="card_image"
                      ></img>
                    </div>
                  ) : null}
                  <div className="project_detail">
                    <h5
                      className={isDark ? "dark_mode card_title" : "card_title"}
                    >
                      {project.projectName}
                    </h5>
                    <p
                      className={
                        isDark ? "dark_mode card_subtitle" : "card_subtitle"
                      }
                    >
                      {project.projectDesc}
                    </p>
                    {project.footerLink ? (
                      <div className="project_card_footer">
                        {project.footerLink.map((link, i) => {
                          return (
                            <span
                              key={i}
                              className={
                                isDark ? "dark_mode project_tag" : "project_tag"
                              }
                              onClick={() => openProjectInNewWindow(link.url)}
                            >
                              {link.name}
                            </span>
                          );
                        })}
                      </div>
                    ) : null}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </Fade>
  );
}

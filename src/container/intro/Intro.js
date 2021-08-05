import React, { useContext } from "react";
import { Fade } from "react-reveal";
import "./Intro.css";
import StyleContext from "../../contexts/StyleContext";
import { intro } from "../../portfolio";
import SocialMedia from "../../components/socialMedia/SocialMedia";

export default function Intro() {
  const { isDark } = useContext(StyleContext);
  if (!intro.displayIntro) {
    return null;
  }
  return (
    <Fade bottom duration={1000} distance="40px">
      <div className="introduction" id="intro">
        <div className="intro_main">
          <div className="intro_text_div">
            <div>
              <h1 className={isDark ? "dark_mode intro_text" : "intro_text"}>
                {intro.title}
              </h1>
              <p
                className={
                  isDark ? "dark_mode intro_text_p" : "intro_text_p subTitle"
                }
              >
                {intro.subTitle}
              </p>
              <SocialMedia />
            </div>
          </div>
        </div>
      </div>
    </Fade>
  );
}

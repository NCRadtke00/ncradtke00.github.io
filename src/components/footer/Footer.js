import React, { useContext } from "react";
import "./Footer.css";
import StyleContext from "../../contexts/StyleContext";
import { Fade } from "react-reveal";

function Footer() {
  const { isDark } = useContext(StyleContext);
  return (
    <Fade bottom duration={1000} distance="5px">
      <div className="footer">
        <p className={isDark ? "dark_mode footer_text" : "footer_text"}>
          <a href="https://github.com/NCRadtke00">Made by Nick Radtke</a>
        </p>
      </div>
    </Fade>
  );
}

export default Footer;

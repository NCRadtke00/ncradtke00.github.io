import React, { useContext } from "react";
import "./Footer.css";
import StyleContext from "../../contexts/StyleContext";
function Footer() {
  const { isDark } = useContext(StyleContext);
  return (
    <div className="footer">
      <p className={isDark ? "dark_mode footer_text" : "footer_text"}>
        <a href="https://github.com/NCRadtke00">Made by Nick Radtke</a>
      </p>
    </div>
  );
}

export default Footer;

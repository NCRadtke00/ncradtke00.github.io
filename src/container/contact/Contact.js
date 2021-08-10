import React, { useContext } from "react";
import "./Contact.css";
import { illustration, contactInfo } from "../../portfolio";
import { Fade } from "react-reveal";
import StyleContext from "../../contexts/StyleContext";

export default function Contact() {
  const { isDark } = useContext(StyleContext);
  return (
    <Fade bottom duration={1000} distance="20px">
      <div className="main contact_top" id="contact">
        <div className="contact">
          <div className="contact_header">
            <h1 className="heading contact_title">{contactInfo.title}</h1>
            <p
              className={
                isDark
                  ? "dark_mode contact_subtitle"
                  : "subTitle contact_subtitle"
              }
            >
              {contactInfo.subtitle}
            </p>
            <div className={isDark ? "dark_mode contact_text" : "contact_text"}>
              <a className="contact_detail" href={"tel:" + contactInfo.number}>
                {contactInfo.number}
              </a>
              <br />
              <br />
              <a
                className="contact_detail_email"
                href={"mailto:" + contactInfo.email_address}
              >
                {contactInfo.email_address}
              </a>
            </div>
          </div>
        </div>
      </div>
    </Fade>
  );
}

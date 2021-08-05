import React from "react";
import "./SocialMedia.css";
import { socialMediaLinks } from "../../portfolio";
function SocialMedia() {
  return (
    <div className="social_media">
      {socialMediaLinks.github ? (
        <a
          href={socialMediaLinks.github}
          className="icon_button github"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="fab fa-github"></i>
          <span></span>
        </a>
      ) : null}
      {socialMediaLinks.gmail ? (
        <a
          href={`mailto:${socialMediaLinks.gmail}`}
          className="icon_button google"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="fab fa-google"></i>
          <span></span>
        </a>
      ) : null}

      {socialMediaLinks.linkedin ? (
        <a
          href={socialMediaLinks.linkedin}
          className="icon_button linkedin"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="fab fa-linkedin-in"></i>
          <span></span>
        </a>
      ) : null}
    </div>
  );
}

export default SocialMedia;

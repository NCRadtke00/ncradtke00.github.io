import React, { createRef, useContext } from "react";
import { Fade, Slide, Zoom } from "react-reveal";
import "./EducationCard.css";
import StyleContext from "../../contexts/StyleContext";

export default function EducationCard({ school }) {
  const imgRef = createRef();

  const GetDescBullets = ({ descBullets }) => {
    return descBullets
      ? descBullets.map((item, i) => (
          <li key={i} className="subTitle">
            {item}
          </li>
        ))
      : null;
  };
  const { isDark } = useContext(StyleContext);
  return (
    <div>
      <Fade left duration={1000}>
        <div className="education">
          <div className="education_left">
            <img
              crossOrigin={"anonymous"}
              ref={imgRef}
              className="education_roundedimg"
              src={school.logo}
              alt={school.schoolName}
            />
          </div>
          <div className="education_right">
            <h5 className="education_text_school">{school.schoolName}</h5>

            <div className="education_text_details">
              <h5
                className={
                  isDark
                    ? "dark_mode education_text_subHeader"
                    : "education_text_subHeader"
                }
              >
                {school.subHeader}
              </h5>
              <p
                className={`${
                  isDark ? "dark_mode" : ""
                } education_text_duration`}
              >
                {school.duration}
              </p>
              <p className="education_text_desc">{school.desc}</p>
              <div className="education_text_bullets">
                <ul>
                  <GetDescBullets descBullets={school.descBullets} />
                </ul>
              </div>
            </div>
          </div>
        </div>
      </Fade>
      <Slide left duration={2000}>
        <div className="education_border"></div>
      </Slide>
    </div>
  );
}

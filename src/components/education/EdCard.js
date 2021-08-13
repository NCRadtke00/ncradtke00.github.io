import React, { createRef, useContext } from "react";
import { Fade, Slide } from "react-reveal";
import "./EdCard.css";
import StyleContext from "../../contexts/StyleContext";
import dcc from "../../assests/images/Images";

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
      <div className="education_card">
        <Fade left duration={2000}>
          <div className="card_img">
            <img
              className="school_logo"
              ref={imgRef}
              src={school.logo}
              alt={school.schoolName}
            />
          </div>
        </Fade>
        <Fade right duration={2000} distance="40px">
          <div
            className={
              isDark
                ? "dark_mode education_text_details"
                : "education_text_details"
            }
          >
            <div className="card_body">
              <h5
                className={
                  isDark
                    ? "dark_mode education_text_school"
                    : "education_text_school"
                }
              >
                {school.schoolName}
              </h5>
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
              <p
                className={
                  isDark
                    ? "dark_mode education_text_desc"
                    : "education_text_desc"
                }
              >
                {school.desc}
              </p>
              <div
                className={
                  isDark
                    ? "dark_mode education_text_bullets"
                    : "education_text_bullets"
                }
              >
                <ul>
                  <GetDescBullets descBullets={school.descBullets} />
                </ul>
              </div>
            </div>
          </div>
        </Fade>
      </div>
      <Slide left duration={2000}>
        <div className="education_border"></div>
      </Slide>
    </div>
  );
}

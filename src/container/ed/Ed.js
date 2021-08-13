import React from "react";
import "./Ed.css";
import EdCard from "../../components/education/EdCard";
import { educationInfo } from "../../portfolio";
import { Fade } from "react-reveal";
export default function Ed() {
  return (
    <div className="main" id="educations">
      <div className="educations-header-div">
        <Fade bottom duration={2000} distance="20px">
          <h1 className="educations-header">Education </h1>
        </Fade>
      </div>
      <div className="educations-body-div">
        {educationInfo.schools.map((school) => (
          <EdCard school={school} />
        ))}
      </div>
    </div>
  );
}

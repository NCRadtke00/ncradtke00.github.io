import React from "react";
import "./Ed.css";
import EdCard from "../../components/education/EdCard";
import { educationInfo } from "../../portfolio";
import { Fade } from "react-reveal";
function Ed() {
  return (
    <div className="main" id="educations">
      <div className="educations-header-div">
        <Fade bottom duration={2000} distance="20px">
          <h1 className="educations-header">Education Received</h1>
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

export default Ed;

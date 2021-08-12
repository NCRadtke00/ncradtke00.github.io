import React from "react";
import "./Education.css";
import EducationCard from "../../components/educationCard/EducationCard";
import { educationInfo } from "../../portfolio";

export default function Education() {
  if (educationInfo.display) {
    return (
      <div className="education_section" id="education">
        <h1 className="education_heading">My Education</h1>
        <div className="education_card_container">
          {educationInfo.schools.map((school) => (
            <EducationCard school={school} />
          ))}
        </div>
      </div>
    );
  }
  return null;
}

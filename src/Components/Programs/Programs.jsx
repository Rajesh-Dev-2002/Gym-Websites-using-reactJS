import React from "react";
import "./Programs.css";
import {ProgramsData, programsData} from '../../data/programsData'
import RightArrow from '../../assets/rightArrow.png'
function Programs() {
  return (
    <div className="Programs" id="programs">
      {/* /Headrer */}

      <div className="programs-header">
        <span className="stroke-text">Explore our </span>
        <span>Programs </span>
        <span className="stroke-text">to shape you</span>
      </div>

      <div className="programs-categories">
        {programsData.map((program)=>(
            <div className="category">
                {program.image}
                <span>{program.heading}</span><span>{program.details}</span>
                <div className="join-now"><span>Join Now</span><img src={RightArrow} /></div>
            </div>

        ))}
      </div>
    </div>
  );
}

export default Programs;

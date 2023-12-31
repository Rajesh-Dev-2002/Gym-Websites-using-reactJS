import React from "react";
import "./Reasons.css";
import image1 from "../../assets/image1.png";
import image2 from "../../assets/image2.png";
import image3 from "../../assets/image3.png";
import image4 from "../../assets/image4.png";
import nb from "../../assets/nb.png";
import adidas from "../../assets/adidas.png";
import nike from "../../assets/nike.png";
import tick from "../../assets/tick.png";

function Reasons() {
  return (
    <div className="Reasons" id="reasons">
      <div className="left-r">
        <img src={image1} />
        <img src={image2} />
        <img src={image3} />
        <img src={image4} />
      </div>
      <div className="right-r">
        <span>some reasons</span>
        <div>
          <span className="stroke-text">Why </span>
          <span>Choose Us</span>
        </div>

        <div className="details-r">
          <div>
            <img src={tick}></img>
            <span>Over 140+ expert coaches</span>
          </div>
          <div>
            <img src={tick} />
            <span>train smarter and faster then before</span>
          </div>
          <div>
            <img src={tick} />
            <span>1 free program for new member</span>
          </div>
          <div>
            <img src={tick} />
            <span>reliable partners</span>
          </div>
        </div>

        <span id="biju">OUR PARTNERS</span>

        <div className="partners">
          <img src={nb} alt="" />
          <img src={adidas} alt="" />
          <img src={nike} alt="" />
        </div>
      </div>
    </div>
  );
}

export default Reasons;

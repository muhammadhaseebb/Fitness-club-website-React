import React from "react";
import "./Testimonials.css";
// import image1 from "../../assets/t-image1.png";
// import image2 from "../../assets/t-image2.jpg";
// import image3 from "../../assets/t-image3.jpg";
import { testimonialsData } from "../../data/testimonialsData";
import { useState } from "react";

import leftArrow from "../../assets/leftArrow.png";
import rightArrow from "../../assets/rightArrow.png";

const Testimonials = () => {
  const [selected, setSelected] = useState(0);
  const tLength = testimonialsData.length;
  return (
    <div className="testimonials">
      <div className="left-t">
        <span>Testimonials</span>
        <span>What they</span>
        <span>say about us</span>
        <span>{testimonialsData[selected].review}</span>
        <span>
          <span style={{ color: "var(--orange)" }}>
            {testimonialsData[selected].name}
          </span>
          (" ")-{testimonialsData[selected].status}
        </span>
      </div>
      <div className="right-t">
        <div></div>
        <div></div>
        <img src={testimonialsData[selected].image} alt="" />
        <div className="Arrows">
          <img src={leftArrow} alt="" />
          <img src={rightArrow} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Testimonials;

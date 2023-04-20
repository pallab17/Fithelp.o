import React, { useState } from "react";
import "./Testimonials.css";
import {testimonialsData} from "../../data/testimonialsData";

const Testimonials = () => {
    const[selected, setSelected]=useState(0);
    const tlengtyh = testimonialsData.length;


  return (
    <div className="Testimonials">
      <div className="left-t">
        <span>TESTIMONIALS</span>
        <span className="outline-text">WHAT THEY</span>
        <span>SAY ABOUT US</span>
        <span>
            {testimonialsData[selected].review}
        </span>
        <span>
            <span>
                {testimonialsData[selected].name}
            </span> {" "}
            - {testimonialsData[selected].status}
        </span>
      </div>
      <div className="right-t"></div>
    </div>
  );
};

export default Testimonials;

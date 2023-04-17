import React from "react";
import "./Hero.css";
import Header from "../Header/Header";

const Hero = () => {
  return (
    <div className="hero">
      <div className="left-h">
        <Header />
        {/* the best ad */}
        <div className="the-best-ad">
          <div></div>
          <span>the best fitness club in the town</span>
        </div>
        {/* hero-head */}
        <div className="hero-text">
          <div>
            <span className="outline-text">Shape </span>
            <span>Your</span>
          </div>
          <div>
          <span>Ideal Body</span>
          </div>
          <div>
          <span>hey we will help you to shape and build your ideal body and live  your life to the fullest</span>
          </div>
        </div>
      </div>

      <div className="right-h"> right side</div>
    </div>
  );
};

export default Hero;

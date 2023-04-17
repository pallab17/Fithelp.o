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
            <span>
              hey we will help you to shape and build your ideal body and live
              your life to the fullest
            </span>
          </div>
        </div>

        {/* figures section ta  */}
        <div className="figures">
          <div>
            
            <span>+ 140</span>
            <span>Expert Coaches</span>
          </div>
          <div>
            <span>+ 978</span>
            <span>Members joined</span>
          </div>
          <div>
            <span>+ 50</span>
            <span>Fitness Programs</span>
          </div>
        </div>

        {/* buttons */}
        <div className="hero-buttons">
          <button className="btn">Get Started</button>
          <button className="btn">Learn More</button>
        </div>


      </div>

      <div className="right-h"> right side</div>
    </div>
  );
};

export default Hero;

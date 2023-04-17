import React from "react";
import "./Hero.css";
import Header from "../Header/Header";
import hero_image from "../../assets/hero_image.png";
import hero_image_back from "../../assets/hero_image_back.png";
import Heart from "../../assets/heart.png";
import Calories from "../../assets/calories.png";

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

      <div className="right-h">
        <button className="btn">Join Now</button>

        <div className="heart-rate">
          <img src={Heart} alt="" />
          <span>heart rate</span>
          <span>116 bpm</span>
        </div>

        {/* hero isstyle image */}
        <img src={hero_image} className="hero-image" alt="" />
        <img src={hero_image_back} className="hero-image-back" alt="" />

        {/* calories pic ta  */}
        <div className="calories">
          <img src={Calories} alt="" />
          <div>
          <span>Calories Burned</span>
          <span>520 Kcal</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;

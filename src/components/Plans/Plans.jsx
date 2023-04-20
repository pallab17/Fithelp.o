import React from "react";
import "./Plans.css";
import { plansData } from "../../data/plansData";
import whiteTick from "../../assets/whiteTick.png";

const Plans = () => {
  return (
    <div className="plans-container">
      {/* plans r header file */}
      <div className="programs-header" style={{ gap: "2rem" }}>
        <span className="outline-text">READY TO START</span>
        <span>YOUR JOURNEY</span>
        <span className="outline-text">NOW WITHUS</span>
      </div>

      {/* plans card ta */}
      <div className="plans">
        {plansData.map((goru, i) => (
          <div className="plan" key={i}>
            {goru.icon}

            <span>{goru.name} </span>
            <span>$ {goru.price} </span>

            <div className="features">
                {goru.features.map((feature,i)=> (
                    <div className="feature">
                    <img src={whiteTick} alt="" />
                    <span key={i} >{feature}</span>
                    

                    </div>
                ))}
            </div>



          </div>
        ))}
      </div>
    </div>
  );
};

export default Plans;

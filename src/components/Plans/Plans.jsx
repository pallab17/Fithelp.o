import React from "react";
import "./Plans.css";
import { plansData } from "../../data/plansData";

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
        {plansData.map((plan, i) => (
          <div className="plan">
            {plan.icon}

            <span> </span>
            <span></span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Plans;

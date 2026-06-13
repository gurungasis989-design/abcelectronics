import React from "react";
import img1 from "../assets/1.jpeg"
const Landing = () => {
  return (
    <section className="landing" id="home">
      <div className="landing-content">
        <div className="landing-text">
          <h1>ABC Electronics</h1>

          <p>
            We Provide Quality Product at Reasonable Price 
          </p>

          <button className="btn">
            Shop Now
          </button>
        </div>

        <div className="landing-image">
          <img
          
            src={img1} alt="Electronics"
          />
        </div>
      </div>
    </section>
  );
};

export default Landing;
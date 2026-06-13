import React from "react";

const About = () => {
  return (
    <section className="about" id="about">
      <h2>About Us</h2>

      <p>
        ABC Electronics is dedicated to delivering premium-quality
        electronic products with modern technology, affordable pricing,
        and excellent customer service.
      </p>

      <div className="features">
        <div className="card">
          <h3>Quality Products</h3>
          <p>Trusted electronic devices from best manufacturers.</p>
        </div>

        <div className="card">
          <h3>Fast Delivery</h3>
          <p>Quick and secure shipping services.</p>
        </div>

        <div className="card">
          <h3>24/7 Support</h3>
          <p>Our team is always available to assist customers.</p>
        </div>
      </div>
    </section>
  );
};

export default About;
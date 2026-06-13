import React from "react";

const ContactUs = () => {
  return (
    <section className="contactUs" id="contactUs">
      <h2>Contact Us</h2>

      <div className="contactus-container">

        {/* Company Details */}
        <div className="company-details">
          <h3>ABC Electronics Pvt. Ltd.</h3>

          <p>
            ElectroTech is committed to providing high-quality electronic
            products and excellent customer service through out Nepal.
          </p>

          <div className="detail">
            <h4>📍 Address</h4>
            <p>Belbari-01, Morang, Koshi Province, Nepal</p>
          </div>

          <div className="detail">
            <h4>📞 Phone</h4>
            <p>+977 9769807120</p>
          </div>

          <div className="detail">
            <h4>✉️ Email</h4>
            <p>info@abcelectronic.com</p>
          </div>

          <div className="detail">
            <h4>🕒 Business Hours</h4>
            <p>Sunday – Friday: 9:00 AM – 7:00 PM</p>
            <p>Saturday: Closed</p>
          </div>
        </div>

      
      </div>
    </section>
  );
};

export default ContactUs;
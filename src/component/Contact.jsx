import React, { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(formData);
    alert("Your inquiry has been submitted successfully!");

    setFormData({
      name: "",
      email: "",
      phone: "",
      message: "",
    });
  };

  return (
    <section style={{ padding: "60px 20px", backgroundColor: "#47074da6" }}>
      <div style={{ textAlign: "center", marginBottom: "40px" }}>
        <h1>Inquiries</h1>
        <p>
          Have questions? Send us your inquiry and our team will get back to
          you as soon as possible.
        </p>
      </div>

      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          gap: "30px",
          maxWidth: "1200px",
          margin: "0 auto",
        }}
      >
        {/* Google Map */}
        <div style={{ flex: "1", minWidth: "300px" }}>
          <iframe
            title="Belbari Map"
            src="https://www.google.com/maps?q=Belbari,Morang,Nepal&output=embed"
            width="100%"
            height="450"
            style={{
              border: "0",
              borderRadius: "10px",
            }}
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </div>

        {/* Inquiry Form */}
        <div
          style={{
            flex: "1",
            minWidth: "300px",
            backgroundColor: "#d03636",
            padding: "30px",
            borderRadius: "10px",
            boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
          }}
        >
          <h2>Send an Inquiry</h2>

          <form onSubmit={handleSubmit}>
            <input
              type="text"
              name="name"
              placeholder="Full Name"
              value={formData.name}
              onChange={handleChange}
              required
              style={inputStyle}
            />

            <input
              type="email"
              name="email"
              placeholder="Email Address"
              value={formData.email}
              onChange={handleChange}
              required
              style={inputStyle}
            />

            <input
              type="tel"
              name="phone"
              placeholder="Phone Number"
              value={formData.phone}
              onChange={handleChange}
              required
              style={inputStyle}
            />

            <textarea
              name="message"
              placeholder="Your Message"
              rows="5"
              value={formData.message}
              onChange={handleChange}
              required
              style={textareaStyle}
            ></textarea>

            <button type="submit" style={buttonStyle}>
              Submit Inquiry
            </button>
          </form>

          <div style={{ marginTop: "30px" }}>
            <h3>Contact Information</h3>
            <p>📍 Belbari-01, Morang, Nepal</p>
            <p>📞 +977 9769807120</p>
            <p>✉️ info@abcelectronic.com</p>
          </div>
        </div>
      </div>
    </section>
  );
};

const inputStyle = {
  width: "100%",
  padding: "12px",
  marginBottom: "15px",
  border: "1px solid #ccc",
  borderRadius: "5px",
  fontSize: "16px",
};

const textareaStyle = {
  ...inputStyle,
  resize: "vertical",
};

const buttonStyle = {
  width: "100%",
  padding: "12px",
  backgroundColor: "#000000",
  color: "#01edb6",
  border: "none",
  borderRadius: "5px",
  fontSize: "16px",
  cursor: "pointer",
};

export default Contact;
import React from "react";

const PaymentPlatform = () => {
  const paymentMethods = [
    {
      name: "eSewa",
      logo:
        "https://upload.wikimedia.org/wikipedia/commons/6/6b/ESewa_Logo.png",
      description: "Pay securely using your eSewa wallet.",
      color: "#60BB46",
    },
    {
      name: "Khalti",
      logo:
        "https://khalti.com/static/images/logo1.png",
      description: "Fast and easy digital payments with Khalti.",
      color: "#5C2D91",
    },
    {
      name: "IME Pay",
      logo:
        "https://www.imepay.com.np/wp-content/uploads/2021/03/logo.png",
      description: "Transfer money and make online payments instantly.",
      color: "#D71920",
    },
    {
      name: "ConnectIPS",
      logo:
        "https://www.connectips.com/images/logo.png",
      description: "Direct bank-to-bank online payment service.",
      color: "#005BAC",
    },
  ];

  return (
    <div style={{ padding: "50px 20px", textAlign: "center" }}>
      <h1>Nepal Online Payment Platforms</h1>
      <p>
        Choose your preferred payment method for secure online transactions.
      </p>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
          gap: "20px",
          marginTop: "40px",
        }}
      >
        {paymentMethods.map((method, index) => (
          <div
            key={index}
            style={{
              border: "1px solid #ddd",
              borderRadius: "10px",
              padding: "20px",
              boxShadow: "0 2px 10px rgba(0,0,0,0.1)",
            }}
          >
            <img
              src={method.logo}
              alt={method.name}
              style={{
                width: "120px",
                height: "80px",
                objectFit: "contain",
              }}
            />

            <h2 style={{ color: method.color }}>{method.name}</h2>

            <p>{method.description}</p>

            <button
              style={{
                backgroundColor: method.color,
                color: "#fff",
                border: "none",
                padding: "10px 20px",
                borderRadius: "5px",
                cursor: "pointer",
              }}
            >
              Pay with {method.name}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PaymentPlatform;
import React from "react";

const Brands = () => {
  const brands = [
    {
      id: 1,
      name: "Samsung",
      logo:
        "https://upload.wikimedia.org/wikipedia/commons/2/24/Samsung_Logo.svg",
    },
    {
      id: 2,
      name: "LG",
      logo:
        "https://upload.wikimedia.org/wikipedia/commons/2/20/LG_symbol.svg",
    },
    {
      id: 3,
      name: "Sony",
      logo:
        "https://upload.wikimedia.org/wikipedia/commons/c/ca/Sony_logo.svg",
    },
    {
      id: 4,
      name: "Apple",
      logo:
        "https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg",
    },
    {
      id: 5,
      name: "Xiaomi",
      logo:
        "https://upload.wikimedia.org/wikipedia/commons/a/ae/Xiaomi_logo_%282021-%29.svg",
    },
    {
      id: 6,
      name: "Panasonic",
      logo:
        "https://upload.wikimedia.org/wikipedia/commons/1/16/Panasonic_logo.svg",
    },
    {
      id: 7,
      name: "Dell",
      logo:
        "https://upload.wikimedia.org/wikipedia/commons/4/48/Dell_Logo.svg",
    },
    {
      id: 8,
      name: "HP",
      logo:
        "https://upload.wikimedia.org/wikipedia/commons/a/ad/HP_logo_2012.svg",
    },
  ];

  return (
    <section
      style={{
        padding: "60px 20px",
        backgroundColor: "#f5f7fa",
      }}
    >
      <div
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          textAlign: "center",
        }}
      >
        <h2
          style={{
            fontSize: "36px",
            marginBottom: "10px",
          }}
        >
          Top Electronics Brands
        </h2>

        <p
          style={{
            color: "#666",
            marginBottom: "40px",
          }}
        >
          We offer products from trusted global electronics brands.
        </p>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))",
            gap: "25px",
          }}
        >
          {brands.map((brand) => (
            <div
              key={brand.id}
              style={{
                backgroundColor: "#fff",
                padding: "30px 20px",
                borderRadius: "12px",
                boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
                transition: "0.3s",
                cursor: "pointer",
              }}
            >
              <img
                src={brand.logo}
                alt={brand.name}
                style={{
                  width: "100px",
                  height: "80px",
                  objectFit: "contain",
                  marginBottom: "15px",
                }}
              />

              <h3>{brand.name}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Brands;
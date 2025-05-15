import React from "react";

const Card = ({ title, image, description }) => {
  return (
    <div
      style={{
        border: "1px solid #ccc",
        borderRadius: "8px",
        padding: "16px",
        width: "220px",
        textAlign: "center",
      }}
    >
      <img
        src={image}
        alt={title}
        style={{ width: "100%", borderRadius: "8px" }}
      />
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
};

export default Card;

import React from "react";

export default function MainSection(props) {
  const { title, description, image } = props;
  return (
    <div
      className="container"
      style={{ background: "yellow", padding: "10px", margin: "0 0 20px 0" }}
    >
      <div style={{ fontWeight: "bold" }}>
        {title || "Football Cricket Cycling"}
      </div>
      <div>{description}</div>
      <div>
        <img
          src={image}
          alt={title}
          style={{ height: "200px", width: "500px" }}
        />
      </div>
    </div>
  );
}

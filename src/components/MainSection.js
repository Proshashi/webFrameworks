import React from "react";

export default function MainSection(props) {
  const { title, description, image, meta } = props;
  return (
    <div
      className="container"
      style={{ background: "white", padding: "20px", margin: "0 0 20px 0" }}
    >
      <div>
        <img
          src={image}
          alt={title}
          style={{ height: "350px", width: "100%" }}
        />
      </div>
      <div style={{ fontWeight: "bold" }}>
        <span
          style={{
            fontSize: "32px",
            fontWeight: "bold",
            fontFamily: "serif",
            color: "#00518D",
          }}
        >
          {" "}
          {title || "Football Cricket Cycling"} |{" "}
        </span>
        <span
          style={{ fontSize: "32px", fontWeight: "bold", fontFamily: "serif" }}
        >
          {description}
        </span>
      </div>
      <div style={{ margin: "20px 0 10px 0", fontSize: "18px" }}>{meta}</div>
    </div>
  );
}

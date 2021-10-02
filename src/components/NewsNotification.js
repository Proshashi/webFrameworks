import React from "react";

export default function NewsNotification(props) {
  const { width, space_left } = props;

  return (
    <div
      style={{
        width: width,
        background: "#4196A4",
        color: "white",
        margin: "2px 0 10px 0",
        marginLeft: space_left,
        padding: "10px",
      }}
    >
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam sequi vel
      illo ex hic consequatur architecto voluptatibus ratione accusamus
      similique fuga dignissimos
    </div>
  );
}

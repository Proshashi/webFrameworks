import React from "react";
import News, { NewsWithTime } from "./News";
import s from "./SideSection.module.css";

export default function SideSection() {
  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <div
        style={{
          background: "white",
          padding: "10px 10px 20px 10px",
          marginBottom: "20px",
        }}
      >
        <div className={s.Heading}>Most read</div>
        <div className={s.NewsGroup}>
          <News
            number="1"
            title="HS-Gallup | "
            description="A clear majority of Finns do not accept a refusal to receive a
          coronary vaccine for reasons of principle"
          />
          <News
            number="2"
            title="Kingdom | "
            description="A clear majority of Finns do not accept a refusal to receive a
          coronary vaccine for reasons of principle"
          />{" "}
          <News
            number="1"
            title="HS-Gallup | "
            description="A clear majority of Finns do not accept a refusal to receive a
        coronary vaccine for reasons of principle"
          />{" "}
          <News
            number="1"
            title="HS-Gallup | "
            description="A clear majority of Finns do not accept a refusal to receive a
      coronary vaccine for reasons of principle"
          />{" "}
          <News
            number="1"
            title="HS-Gallup | "
            description="A clear majority of Finns do not accept a refusal to receive a
    coronary vaccine for reasons of principle"
          />
        </div>
        <div className={s.ShowMore}>Show More</div>
      </div>
      <div
        style={{
          background: "white",
          padding: "10px 10px 20px 10px",
          margin: "10px 0",
        }}
      >
        <div className={s.Heading}>The latest</div>
        <div className={s.NewsGroup}>
          <NewsWithTime
            number="19:07"
            title="HS-Gallup | "
            description="A clear majority of Finns do not accept a refusal to receive a
          coronary vaccine for reasons of principle"
          />
          <NewsWithTime
            number="19:07"
            title="HS-Gallup | "
            description="A clear majority of Finns do not accept a refusal to receive a
          coronary vaccine for reasons of principle"
          />
          <NewsWithTime
            number="19:07"
            title="HS-Gallup | "
            description="A clear majority of Finns do not accept a refusal to receive a
          coronary vaccine for reasons of principle"
          />
          <NewsWithTime
            number="19:07"
            title="HS-Gallup | "
            description="A clear majority of Finns do not accept a refusal to receive a
          coronary vaccine for reasons of principle"
          />
          <NewsWithTime
            number="19:07"
            title="HS-Gallup | "
            description="A clear majority of Finns do not accept a refusal to receive a
          coronary vaccine for reasons of principle"
          />
          <NewsWithTime
            number="19:07"
            title="HS-Gallup | "
            description="A clear majority of Finns do not accept a refusal to receive a
          coronary vaccine for reasons of principle"
          />
        </div>
        <div className={s.ShowMore}>Show More</div>
      </div>
    </div>
  );
}

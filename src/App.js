import "./App.css";
import Header from "./components/Header";
import MainSection from "./components/MainSection";
import NewsNotification from "./components/NewsNotification";
import SideSection from "./components/SideSection";

// 964PX

const WIDTH = "1200px";
const SPACE_LEFT = "180px";

function App() {
  return (
    <div
      style={{
        display: "flex",
        // alignItems: "center",
        flexDirection: "column",
        background: "#E9EAED",
      }}
    >
      <Header width={WIDTH} space_left={SPACE_LEFT} />
      <NewsNotification width={WIDTH} space_left={SPACE_LEFT} />
      <NewsNotification width={WIDTH} space_left={SPACE_LEFT} />
      <NewsNotification width={WIDTH} space_left={SPACE_LEFT} />
      <div
        style={{
          display: "flex",
          width: WIDTH,
          marginLeft: SPACE_LEFT,
          justifyContent: "space-between",
          marginTop: "10px",
        }}
      >
        <div style={{ width: "63%", display: "flex", flexDirection: "column" }}>
          <MainSection
            title="HS-gallup"
            description="Suurin osa suomalaisista ei hyväksy koronarokotteesta kieltäytymistä periaatteen takia"
            image="https://hs.mediadelivery.fi/img/658/3ade7a6f7d3dca5e8b793cfd9c0429e7.jpg.webp"
            meta="Kotimaa 18:37"
          />
          <MainSection
            title="Title 2"
            description="I am description 2"
            image="https://hs.mediadelivery.fi/img/658/3ade7a6f7d3dca5e8b793cfd9c0429e7.jpg.webp"
            meta="Kotimaa 18:37"
          />{" "}
          <MainSection
            title="Title 1"
            description="I am description"
            image="https://hs.mediadelivery.fi/img/658/3ade7a6f7d3dca5e8b793cfd9c0429e7.jpg.webp"
            meta="Kotimaa 18:37"
          />{" "}
          <MainSection
            title="Title 1"
            description="I am description"
            image="https://hs.mediadelivery.fi/img/658/3ade7a6f7d3dca5e8b793cfd9c0429e7.jpg.webp"
            meta="Kotimaa 18:37"
          />{" "}
          <MainSection
            title="Title 1"
            description="I am description"
            image="https://hs.mediadelivery.fi/img/658/3ade7a6f7d3dca5e8b793cfd9c0429e7.jpg.webp"
            meta="Kotimaa 18:37"
          />
        </div>
        <div style={{ width: "35%" }}>
          <SideSection />
          {/* <SideSection />
          <SideSection />
          <SideSection /> */}
        </div>
      </div>
    </div>
  );
}

export default App;

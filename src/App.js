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
        }}
      >
        <div style={{ width: "68%", display: "flex", flexDirection: "column" }}>
          <MainSection
            title="Title 1"
            description="I am description"
            image="https://www.pixsy.com/wp-content/uploads/2021/04/ben-sweet-2LowviVHZ-E-unsplash-1.jpeg"
          />
          <MainSection
            title="Title 1"
            description="I am description"
            image="https://www.pixsy.com/wp-content/uploads/2021/04/ben-sweet-2LowviVHZ-E-unsplash-1.jpeg"
          />{" "}
          <MainSection
            title="Title 1"
            description="I am description"
            image="https://www.pixsy.com/wp-content/uploads/2021/04/ben-sweet-2LowviVHZ-E-unsplash-1.jpeg"
          />{" "}
          <MainSection
            title="Title 1"
            description="I am description"
            image="https://www.pixsy.com/wp-content/uploads/2021/04/ben-sweet-2LowviVHZ-E-unsplash-1.jpeg"
          />{" "}
          <MainSection
            title="Title 1"
            description="I am description"
            image="https://www.pixsy.com/wp-content/uploads/2021/04/ben-sweet-2LowviVHZ-E-unsplash-1.jpeg"
          />
        </div>
        <div style={{ width: "30%" }}>
          <SideSection />
          <SideSection />
          <SideSection />
          <SideSection />
        </div>
      </div>
    </div>
  );
}

export default App;

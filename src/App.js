import "./App.css";
import Header from "./components/Header";
import MainSection from "./components/MainSection";
import NewsNotification from "./components/NewsNotification";
import SideSection from "./components/SideSection";


function App() {
  return (
    <div>
      <Header />
      <NewsNotification />
      <NewsNotification />
      <NewsNotification />
      <MainSection />
      <SideSection />
    </div>
  );
}

export default App;

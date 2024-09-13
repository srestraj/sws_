import Home from "./Home";
import HomeBody from "./HomeBody";

import VideoSection from "../../components/vedio/VideoSection";
import FindersCard from "../../components/finders/FindersCard.jsx";
import News from "../../components/news/News.jsx";
import NavBarTabs from "../../components/Nav/NavBarTabs.jsx";

const HomePage = () => {
  return (
    <>
      <Home />
      <HomeBody />
      <VideoSection />
      <FindersCard background={"#1F323D"} />
      <News />
      <FindersCard background={"#E3E9ED"} />
    </>
  );
};

export default HomePage;

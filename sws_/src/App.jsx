import React from "react";
import NavBar from "./components/Nav/NavBar";
import NavBarTabs from "./components/Nav/NavBarTabs";
import HomePage from "./pages/home/HomePage";
import Discover from "./pages/discover/Discover";
import News from "./pages/news/News";
import Footer from "./components/footer/Footer";
import Dental from "./pages/dental/Dental";
import FindersCard from "./components/finders/FindersCard";
import Logo from "./components/Logo/Logo";

const App = () => {
  return (
    <>
      <div className="bg-black">
        <div className="container mx-auto dark:bg-[#435A65] bg-white">
          <NavBar />
          <NavBarTabs />
          <HomePage />
          <Discover />
          <FindersCard background={"#1F323D"} />
          <News />
          <FindersCard background={"#E3E9ED"} />
          <Dental />
          <Footer />
        </div>
      </div>
    </>
  );
};

export default App;

import React from "react";
import NavBar from "./components/Nav/NavBar";
import NavBarTabs from "./components/Nav/NavBarTabs";
import HomePage from "./pages/home/HomePage";
import Discover from "./pages/discover/Discover";
import News from "./pages/news/News";
import Footer from "./components/footer/Footer";
import Dental from "./pages/dental/Dental";

const App = () => {
  return (
    <>
      <div className="container mx-auto dark:bg-[#435A65]">
        {/* <NavBar />
        
        <hr className="w-full" />
        <NavBarTabs /> 
       
        <HomePage />    


        <Discover />  */}
      </div>
      {/* <News /> */}

      {/* <Dental /> */}
      <Footer /> 
    </>
  );
};

export default App;

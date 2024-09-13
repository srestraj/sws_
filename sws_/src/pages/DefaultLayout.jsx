import React from "react";
import { Navigate, Outlet, Link } from "react-router-dom";
import NavBar from "../components/Nav/NavBar";
import NavBarTabs from "../components/Nav/NavBarTabs";
import FindersCard from "../components/finders/FindersCard";
import Footer from "../components/footer/Footer";

const DefaultLayout = () => {
  return (
    <>
      <div className="bg-black">
        <div className="container mx-auto dark:bg-[#435A65] bg-white">
          <NavBar />
          <NavBarTabs />
          <main className="my-10 container px-10">
            <Outlet />
          </main>
          <FindersCard background={"#E3E9ED"} />
          <Footer />
        </div>
      </div>
    </>
  );
};

export default DefaultLayout;
/*  <div className="bg-black">
        <div className="container mx-auto dark:bg-[#435A65] bg-white">
          <NavBar />
          <HomePage />
          <Discover />
          <FindersCard background={"#1F323D"} />
          <News />
          <FindersCard background={"#E3E9ED"} />
          <Dental />
          <Footer />
        </div>
      </div> 
       <main>
        <Outlet />
      </main>
      
      */

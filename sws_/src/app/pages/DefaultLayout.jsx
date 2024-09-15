import React from "react";
import { Navigate, Outlet, Link } from "react-router-dom";
import NavBar from "../components/Nav/NavBar";
import NavBarTabs from "../components/Nav/NavBarTabs";
import FindersCard from "../components/finders/FindersCard";
import Footer from "../components/footer/Footer";
// import Header from "../components/Nav/Header";
import logo from "../../assets/iafgg.svg";

const DefaultLayout = () => {
  return (
    <>
      <div className="bg-black p-0 m-0 overflow-hidden relative">
        {/* <img
          src={logo}
          alt=""
          className=" w-[849px] h-[481.56px] absolute top-[-10.58px] left-[1267px] opacity-45 z-10"
        /> */}
        <div className="dark:bg-light-grey20 bg-light-white20 text-light-green20   mx-auto px-[300px] m-0 py-2 relative">
          <NavBar />
          <hr />
          <NavBarTabs />
          <main className="px-10 ">
            {/* <Header /> */}
            <Outlet />
          </main>
        </div>
        <Footer />
      </div>
    </>
  );
};

export default DefaultLayout;

import React from "react";
import { Navigate, Outlet, Link } from "react-router-dom";
import NavBar from "../components/Nav/NavBar";
import NavBarTabs from "../components/Nav/NavBarTabs";
import FindersCard from "../components/finders/FindersCard";
import Footer from "../components/footer/Footer";
import Header from "../components/Nav/Header";
import logo from "../assets/iafgg.svg";

const DefaultLayout = () => {
  return (
    <>
      <div className="bg-black p-0 m-0 overflow-hidden relative">
         
        <section className="w-[849px] h-[881.56px] absolute top-[-10.58px] left-[1067px] opacity-45">
          <img src={logo} alt="" className=" w-3/4 -z-10" />
        </section>
        <div className="dark:bg-[#435A65] bg-slate-300  mx-auto px-[200px]">
          <NavBar />
          <hr />
          <NavBarTabs />
          <main className="px-10">
            {/* <Header /> */}
            <Outlet />
          </main>
          <Footer />
        </div>
      </div>
    </>
  );
};

export default DefaultLayout;

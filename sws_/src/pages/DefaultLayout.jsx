import React from "react";
import { Navigate, Outlet, Link } from "react-router-dom";
import NavBar from "../components/Nav/NavBar";
import NavBarTabs from "../components/Nav/NavBarTabs";
import FindersCard from "../components/finders/FindersCard";
import Footer from "../components/footer/Footer";

const DefaultLayout = () => {
  return (
    <>
      <div className="bg-black p-3 m-0">
        <div className="container mx-auto  dark:bg-[#435A65] bg-slate-300 ">
          <NavBar />
          <NavBarTabs />
          {/*
           */}
          <main className="px-10">
            <Outlet />
          </main>
          <Footer />
        </div>
      </div>
    </>
  );
};

export default DefaultLayout;

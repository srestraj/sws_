import React from "react";
import { Navigate, Outlet, Link } from "react-router-dom";
import NavBar from "../components/Nav/NavBar";
import NavBarTabs from "../components/Nav/NavBarTabs";
import Footer from "../components/footer/Footer";

const DefaultLayout = () => {
  return (
    <>
      <div className="bg-black p-0 m-0 overflow-hidden relative">
        <section className="dark:bg-light-grey20 bg-light-white20 text-light-green20 mx-auto px-[200px] m-0 py-2 relative">
          <NavBar />
          <hr />
          <NavBarTabs />
          <main className="px-10">
            <Outlet />
          </main>
        </section>
        <Footer />
      </div>
    </>
  );
};

export default DefaultLayout;

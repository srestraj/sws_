import React from "react";
import Search from "../search/Search";
import logoIAFGG from "../../assets/iafgg.svg";

const NavBar = () => {
  return (
    <>
      <div className="my-0 py-0 p-10 border-b-2">
        <div className="flex justify-between">
          <div className="flex justify-between h-[112px] w-[1440px] items-center ">
            <div className="flex">
              <img src={logoIAFGG} className="h-8" />
              <span className="text-[#1F323D] text-2xl font-bold ">IAFGG</span>
            </div>

            <h1 className="h-[22px] w-[461px] text-sm font-semibold tracking-tight">
              The International Association of Facial Growth Guidence (
              Orthotropics<sup>&reg;</sup> )
            </h1>
            <hr />
          </div>
          <Search />
        </div>
      </div>
    </>
  );
};

export default NavBar;

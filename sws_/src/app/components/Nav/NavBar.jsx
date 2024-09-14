import React from "react";
import Search from "../search/Search";
import logoIAFGG from "../../assets/iafgg.svg";

const NavBar = () => {
  return (
    <>
      <div className="my-0 py-0 p-10 ">
        <div className="flex justify-between">
          <div className="flex justify-between h-[112px] w-[1440px] items-center">
            <div className="flex items-center">
              <img src={logoIAFGG} className="h-10 mx-3" />
              <span className="text-[#1F323D] text-2xl font-bold ">IAFGG</span>
            </div>
            {/* h-[22px] w-[461px] */}
            <h1 className="text-sm font-semibold tracking-tight text-start">
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

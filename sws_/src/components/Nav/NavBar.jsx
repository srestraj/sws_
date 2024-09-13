import React from "react";
import Logo from "../Logo/Logo";
import Search from "../search/Search";

const NavBar = () => {
  return (
    <>
      <div className="flex justify-between">
        <div className="flex justify-between h-[112px] w-[1440px] items-center ">
          <div className="flex">
            <Logo size={10} />
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
    </>
  );
};

export default NavBar;

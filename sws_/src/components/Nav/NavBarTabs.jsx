import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import logo from "../../assets/iafgg.svg";

const navLink = [
  { id: 1, linkTitile: "Home", navPath: "/" },
  { id: 2, linkTitile: "Discover", navPath: "discover" },
  { id: 3, linkTitile: "Education", navPath: "education" },
  { id: 4, linkTitile: "Science", navPath: "science" },
  { id: 5, linkTitile: "About the IAFGG", navPath: "about-us" },
  { id: 6, linkTitile: "Events", navPath: "events" },
  { id: 7, linkTitile: "Shop", navPath: "shop" },
];
const NavBarTabs = () => {
  return (
    <>
      <div className="flex text-sm font-inter relative">
        <ul className="sticky flex ms-10 ">
          {navLink?.map((linksName) => (
            <li
              className={` mx-1 border-t-4 border-transparent hover:border-[#2E9BB2] p-2 transition-all`}
              key={linksName.id}
            >
              <NavLink to={linksName.navPath}>{linksName.linkTitile}</NavLink>
            </li>
          ))}
        </ul>

        <div className="w-[849px] h-[881.56px] absolute top-[-120.58px] left-[967px] opacity-25">
          <img src={logo} alt="" className=" w-3/4 -z-10" />
        </div>
      </div>
    </>
  );
};

export default NavBarTabs;

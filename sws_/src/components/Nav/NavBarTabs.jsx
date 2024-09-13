import React, { useState } from "react";

const navLink = [
  { id: 1, linkTitile: "Home" },
  { id: 2, linkTitile: "Discover" },
  { id: 3, linkTitile: "Education" },
  { id: 4, linkTitile: "Science" },
  { id: 5, linkTitile: "About the IAFGG" },
  { id: 6, linkTitile: "Events" },
  { id: 7, linkTitile: "Shop" },
];
const NavBarTabs = () => {
  return (
    <>
      <div className="flex text-sm font-inter">
        <ul className="flex ms-10 ">
          {navLink?.map((linksName) => (
            <li
              className={`mx-1 hover:border-t-4 hover:border-[#2E9BB2] p-2 transition-all`}
              key={linksName.id}
            >
              <a href="">{linksName.linkTitile}</a>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default NavBarTabs;

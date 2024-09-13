import React from "react";

const NavBarTabs = () => {
  return (
    <>
      <div className="w-full border-2"></div>

      <div className="flex font-inter py-0 p-9">
        <div className="flex p-2 text-sm">
          <ul className="flex ">
            <li className="m-2 border-t-4   border-[#2E9BB2]">
              <a href="">Home</a>
            </li>
            <li className="m-2">
              <a href="">Discover</a>
            </li>
            <li className="m-2">
              <a href="">Education</a>
            </li>
            <li className="m-2">
              <a href="">Science</a>
            </li>
            <li className="m-2">
              <a href="">About the IAFGG</a>
            </li>
            <li className="m-2">
              <a href="">Shop</a>
            </li>
            <li className="m-2">
              <a href="">Home</a>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default NavBarTabs;

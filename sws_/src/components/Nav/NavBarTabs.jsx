import React from "react";

const NavBarTabs = () => {
  return (
    <div className="flex font-inter">
      <div className="flex p-2 text-sm">
        <ul className="flex ">
          <li className="m-2 border-t-4 border-[#2E9BB2]">
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
  );
};

export default NavBarTabs;

/* 
 <a href="">Discover</a>
        <a href="">Education</a>
        <a href="">Science</a>
        <a href="">About the IAFGG</a>
        <a href="">Shop</a>


*/

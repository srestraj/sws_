import React, { useState } from "react";

const navLink = [
  { id: 1, linkTitile: "Home" },
  { id: 2, linkTitile: "Discover" },
  { id: 3, linkTitile: "Education" },
  { id: 4, linkTitile: "Science" },
  { id: 5, linkTitile: "About the IAFGG" },
  { id: 6, linkTitile: "Shop" },
  { id: 7, linkTitile: "Home" },
];
const NavBarTabs = () => {
  const [mouseHover, setMouseHover] = useState(false);

  const handleHover = (e) => {
    e.preventDefault();
    setMouseHover(true);
  };

  const handleLeaveHover = (e) => {
    e.preventDefault();
    setMouseHover(false);
  };

  return (
    <>
      <div className="flex text-sm font-inter">
        <ul className="flex ms-10">
          {navLink?.map((linksName) => (
            <li
              className={
                mouseHover
                  ? `mx-1 border-t-4 border-[#2E9BB2] p-2`
                  : `mx-1 border-none p-2`
              }
              key={linksName.id}
            >
              <a
                href=""
                onMouseLeave={handleLeaveHover}
                onMouseEnter={handleHover}
              >
                {linksName.linkTitile}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default NavBarTabs;

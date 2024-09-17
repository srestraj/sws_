"use client";

import ButtonPills from "../components/ButtonPills";
import logoImg from "../assets/logo.webp";
import Images from "next/image";
import Link from "next/link";
import { Bars3Icon } from "@heroicons/react/24/solid";

interface NavRoute {
  id: number;
  linkTitle: string;
  routes: string;
}

const navRoutes: NavRoute[] = [
  { id: 1, linkTitle: "Feature", routes: "features" },
  { id: 2, linkTitle: "User Guide", routes: "users-group" },
  { id: 3, linkTitle: "Testimonials", routes: "testimonial" },
  { id: 4, linkTitle: "Pricing", routes: "pricing" },
  { id: 5, linkTitle: "FAQs", routes: "faqs" },
  { id: 6, linkTitle: "Contact", routes: "contact" },
];

/* 
    --jet-black: #2a2a29;
    --light-grey: #a5a6a8;
    --platinum: #e9e5e5;
    --electric-indigo: #6100ff;
    --dark-gray: #56595d;
    --white: white;
    --black: black;

   // meroColor: {
        //   "jet-black": "#2a2a29",
        //   "light-grey": "#a5a6a8",
        //   "platinum-10": "#e9e5e5",
        //   "electric-indigo": " #6100ff",
        //   "dark-gray": " #56595d",
        //   "white-10": " white",
        //   "black-10": "black",
        // },
*/

const NavBar = () => {
  return (
    <>
      <nav className=" items-center justify-between bg-[#e9e5e5] flex mx-auto px-20 lg:px-40 z-20 py-3">
        <Link href={"home"}>
          <Images src={logoImg} width={160} alt="logo_" />
        </Link>
        <ul className="lg:flex py-3 items-center justify-between hidden">
          {navRoutes?.map((linksLists) => (
            <Link href={linksLists.routes}>
              <li
                key={linksLists.id}
                className="text-meroColor-dark-gray  me-10 px-2  hover:text-meroColor-electric-indigo"
              >
                {linksLists.linkTitle}
              </li>
            </Link>
          ))}
          <ButtonPills
            btnName="Start free trial"
            hoverColor="meroColor-electric-indigo"
            ringColor=""
            textColor=""
            hoverTextColor=""
          />
        </ul>

        <div className=" lg:hidden">
          <Bars3Icon className="size-6 text-meroColor-electric-indigo" />
        </div>
      </nav>
    </>
  );
};

export default NavBar;

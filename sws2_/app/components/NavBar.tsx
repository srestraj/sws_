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
  { id: 2, linkTitle: "User Guide", routes: "user-guide" },
  { id: 3, linkTitle: "Testimonials", routes: "testimonials" },
  { id: 4, linkTitle: "Pricing", routes: "pricing" },
  { id: 5, linkTitle: "FAQs", routes: "faqs" },
  { id: 6, linkTitle: "Contact", routes: "contact" },
];

const NavBar = () => {
  return (
    <>
      <nav className=" items-center justify-between bg-meroColor-platinum-10 flex mx-auto px-20 lg:px-32 z-20 py-1">
        <Link href={"home"}>
          <Images src={logoImg} width={160} alt="logo_" />
        </Link>
        <ul className="lg:flex py-3 items-center justify-evenly hidden ">
          {navRoutes?.map((linksLists) => (
            <Link href={linksLists.routes} key={linksLists.id}>
              <li className="text-meroColor-dark-gray  text-wrap  text-sm px-1  last:me-5 hover:text-meroColor-electric-indigo">
                {linksLists.linkTitle}
              </li>
            </Link>
          ))}
          <ButtonPills
            btnName="Start free trial"
            hoverColor="hover:ring-meroColor-electric-indigo"
            ringColor=""
            textColor=""
            hoverTextColor="hover:text-meroColor-electric-indigo"
          />
        </ul>

        <div className="lg:hidden">
          <Bars3Icon className="size-6 text-meroColor-electric-indigo" />
        </div>
      </nav>
    </>
  );
};

export default NavBar;
